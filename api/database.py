from sqlmodel import SQLModel, Session, create_engine
import os
import logging
from dotenv import load_dotenv

logger = logging.getLogger(__name__)

# Load environment variables from .env file
load_dotenv()

# Get DATABASE_URL from environment or default to SQLite
DATABASE_URL = os.getenv("DATABASE_URL")

# Vercel specific: Default to /tmp/database.db for SQLite if no DATABASE_URL provided
if not DATABASE_URL:
    DATABASE_URL = "sqlite:////tmp/database.db"

# SQL Alchemy requires postgresql:// instead of postgres://
if DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

# Create engine with appropriate settings
if DATABASE_URL.startswith("sqlite"):
    # SQLite settings
    engine = create_engine(DATABASE_URL, echo=True, connect_args={"check_same_thread": False})
else:
    # PostgreSQL/Neon DB settings
    # For Neon, we often need some connection pool settings for serverless
    logger.info("Connecting to PostgreSQL/Neon DB")
    engine = create_engine(DATABASE_URL, echo=True, pool_pre_ping=True)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session
