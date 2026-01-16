# Phase 3 File Specification

This document provides a comprehensive overview of the files in the Phase 3 Todo Application and their specific roles.

## 📂 Project Structure

### 🧠 Backend (api/)
Located in the `api/` directory (served as Vercel serverless functions).

| File | Role |
| :--- | :--- |
| **main.py** | API Entry point. Defines FastAPI routes and lifespan logic. |
| **agent.py** | AI Logic. Implements the Gemini-powered `TodoAgent` with function calling. |
| **skills.py** | Business Logic. Contains the `TodoSkills` class for advanced task operations. |
| **models.py** | Data Models. SQLModel definitions for `Task`, `TaskCreate`, and `TaskUpdate`. |
| **crud.py** | Database Operations. Standard Create, Read, Update, Delete logic. |
| **database.py** | Infrastructure. Handles SQLite connection and session management. |

### 🎨 Frontend (components/ & pages/)
Standard Next.js structure.

| File | Role |
| :--- | :--- |
| **pages/index.js** | Main Dashboard. Displays the task list and filters. |
| **pages/create.js** | Dedicated task creation page. |
| **components/ChatWidget.js** | The AI Chatbot interface (Floating bubble). |
| **components/TaskForm.js** | Complex form for creating/editing tasks with all Phase 3 fields. |
| **components/TaskList.js** | Component for rendering the grid of tasks. |
| **components/TaskFilters.js** | Search and filtering sidebar/header. |
| **components/NotificationManager.js** | Client-side logic for browser reminders. |
| **components/Layout.js** | Global navigation and structure wrapper. |

### ⚙️ Configuration & Utils
| File | Role |
| :--- | :--- |
| **vercel.json** | Orchestrates the monolithic deployment on Vercel. |
| **package.json** | Node.js dependencies and scripts. |
| **requirements.txt** | Python dependencies for the backend. |
| **tailwind.config.js** | Design system configuration. |
| **utils/api.js** | Fetch wrapper for communicating with the backend. |

### 📝 Documentation
| File | Role |
| :--- | :--- |
| **README.md** | Getting started guide and project overview. |
| **spec/phase3_specification.md** | Detailed architecture and design goals. |
| **spec/file_specification.md** | This file. |
