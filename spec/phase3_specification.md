# Phase 3: AI-Powered Todo Chatbot - Five Pillars Specification

This document outlines the strategic implementation of Phase 3 of the Hackathon Todo project, which introduces an AI Todo Assistant and extended task features.

## 1. Planning 📝

**Goal:** Integrate an AI-powered Chatbot interface that allows natural language interaction with the Todo list, including advanced features like recurring tasks and smart reminders.

### Requirements
- **AI Interface**: Conversation-based task management (e.g., "Add a task to buy milk").
- **Recurring Tasks**: Logic to handle tasks that repeat (daily, weekly, monthly).
- **Reminders**: Support for due dates and reminder timestamps.
- **Provider**: Google Gemini (Pro/Flash) via the Generative AI Python SDK.

### User Stories
- As a user, I want to type "Remind me to fix the sink tomorrow at 5pm" and have the AI handle the creation.
- As a user, I want to see recurring tasks automatically regenerate when marked as completed.
- As a user, I want to ask the chatbot "What high priority tasks do I have?" and get a summary.

---

## 2. Constitution (Design & Architecture) 🏛️

**System Architecture:**

- **Frontend**: Next.js (React)
  - **Chat Interface**: Custom `ChatWidget` component with auto-scrolling and loading states.
  - **Notifications**: `NotificationManager` for handling browser-based alerts.
  - **Styling**: Tailwind CSS with custom Indigo/Indigo-Dark theme for the chat interface.

- **Backend**: FastAPI (Python)
  - **AI Agent**: `TodoAgent` class wrapping Google Gemini with tool-calling capabilities.
  - **Intelligence Layer**: `TodoSkills` class encapsulating business logic (CRUD + Recurrence).
  - **API**: New `/chat` endpoint for processing natural language messages.

- **Database**: SQLModel (SQLite)
  - **Extended Schema**: `Task` model now includes `due_date`, `reminder_at`, and `recurrence_rule`.

**Rules & Guidelines:**
- AI tools must be strictly typed and mapped to `TodoSkills`.
- Function calling is handled automatically by the Gemini Flash model.
- Recurrence logic is triggered upon task completion.

---

## 3. Execution (Implementation) 🔨

**Step-by-Step Implementation:**

1.  **Backend AI Integration**:
    - Developed `agent.py` using `google-generativeai`.
    - Defined tools for `create_todo`, `get_todos`, `search_todos`, and `update_todo`.
    - Integrated `TodoAgent` into the FastAPI `/chat` endpoint.

2.  **Intelligence Layer**:
    - Refined `skills.py` to handle `recurrence_rule` (Daily, Weekly, Monthly).
    - Added `_calculate_next_due` logic using `dateutil`.

3.  **Frontend Chat Widget**:
    - Built a floating `ChatWidget.js` that communicates with the `/chat` API.
    - Implemented a "Thinking..." state for better UX during AI processing.

4.  **Notification System**:
    - Implemented `NotificationManager.js` to poll for due tasks and trigger browser Notifications.

---

## 4. Verification (Testing) ✅

**Verification Strategy:**

- **AI Functional Testing**:
  - Prompt: "Add buy eggs to my list" -> Result: Task created in database.
  - Prompt: "Find tasks about milk" -> Result: AI calls `search_todos` and displays matches.

- **Recurrence Verification**:
  - Complete a "Daily" task and verify a new task with tomorrow's date is created.

- **Deployment Verification**:
  - Verified that `GOOGLE_API_KEY` is correctly pulled from Vercel environment variables.

---

## 5. Deployment & Evolution 🚀

**Deployment**:
- **Platform**: Vercel (Unified Frontend + Backend).
- **Environment**: Managed via `vercel.json` routing.

**Evolution**:
- **Phase 4**: Voice-to-Task integration.
- **Phase 5**: Multi-agent collaboration for complex scheduling.
