# Hackathon Todo - Phase 3 (AI Chatbot) 🚀

**A premium, full-stack Todo application featuring a Google Gemini-powered AI Assistant, recurring tasks, and smart reminders.**

Phase 3 transforms the Todo application into an intelligent personal assistant. It combines a modern Next.js frontend with a robust FastAPI backend and the power of Generative AI.

---

## ✨ Key Features

- **🤖 AI Todo Assistant**: A floating chat widget powered by **Google Gemini**. Create tasks, search your list, and update statuses using natural language.
- **🔄 Recurring Tasks**: Support for Daily, Weekly, and Monthly task cycles. Completed recurring tasks automatically regenerate for the next period.
- **🔔 Smart Reminders**: Integrated browser notifications to keep you on track with your due dates.
- **📊 Rich Dashboard**: Advanced filtering by Priority (Low, Medium, High, Urgent), Category, and Tags.
- **💾 Persistent Storage**: Full SQLModel/SQLite backend for reliable data management.

---

## 🛠️ Project Structure

The project is structured as a unified Vercel application:

- **`/api`**: Backend services (FastAPI + SQLModel).
- **`/components`**: Reusable React components (ChatWidget, TaskForm, etc.).
- **`/pages`**: Next.js application pages.
- **`/spec`**: Project specifications and documentation (The "Five Pillars").

---

## 🚀 Quick Start

### 1. Prerequisites
- Node.js 18+
- Python 3.10+
- A Google Gemini API Key (Get one at [aistudio.google.com](https://aistudio.google.com/))

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
GOOGLE_API_KEY=your_gemini_api_key_here
```

### 3. Running Locally

#### Backend (FastAPI)
```bash
pip install -r requirements.txt
uvicorn api.main:app --reload
```
*API runs at http://localhost:8000*

#### Frontend (Next.js)
```bash
npm install
npm run dev
```
*App runs at http://localhost:3000*

---

## 🧪 Testing the AI
1. Launch the app and click the **Indigo Chat Bubble** in the bottom-right.
2. Try commands like:
   - *"Add a task to buy groceries with high priority"*
   - *"When is my next meeting?"*
   - *"Mark task 123 as completed"*

---

## 📝 Specifications
For deep technical details, refer to the `spec/` directory:
- [Phase 3 Technical Spec](spec/phase3_specification.md)
- [File Specification](spec/file_specification.md)

---

*Built with ❤️ during the AI Todo Hackathon.*
