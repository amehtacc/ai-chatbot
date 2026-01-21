# Real-Time AI Chatbot with Streaming

A real-time AI chatbot built using **React**, **WebSockets**, and the **Google Gemini API**, featuring streaming AI responses, connection handling, error states, and a clean, responsive chat interface.

This project focuses on core real-time functionality over heavy UI polish, demonstrating practical frontend engineering skills.

<br>

## 🎥 Demo Video
📌 Demo Video Link: [Link](https://drive.google.com/file/d/1zyOOByXc-FpsL0zLPP0mC3Dm3ggEQmaZ/view?usp=drive_link)

<br>

## 🚀 Features

- ✅ Real-time chat using WebSockets
- ✅ Streaming AI responses (chunk-by-chunk)
- ✅ Clear distinction between user and AI messages
- ✅ Markdown rendering in AI responses
- ✅ Auto-scroll to latest message
- ✅ Typing indicator animation while AI responds
- ✅ Connection status indicator (connected / disconnected / error)
- ✅ Basic reconnection logic
- ✅ Error handling with user-friendly notifications
- ✅ Clear chat functionality
- ✅ Copy message to clipboard
- ✅ Responsive UI (mobile-friendly)
- ✅ Built with modern React hooks and Tailwind CSS

<br>

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- Tailwind CSS
- Native WebSocket API
- react-toastify (for notifications)

### Backend
- Node.js
- WebSocket (`ws`)
- Google Gemini API (`@google/genai`)
- dotenv

<br>

## 📁 Project Structure

```text
frontend/
 ├─ src/
 │  ├─ components/
 │  │  ├─ ChatWindow.jsx
 │  │  ├─ MessageList.jsx
 │  │  ├─ MessageBubble.jsx
 │  │  ├─ ChatInput.jsx
 │  │  ├─ ConnectionStatus.jsx
 │  │  └─ TypingIndicator.jsx
 │  ├─ hooks/
 │  │  └─ useWebSocket.js
 │  ├─ utils/
 │  │  └─ formatTime.js
 │  ├─ App.jsx
 │  ├─ index.css
 │  └─ main.jsx
 │
backend/
 ├─ server.js
 ├─ package.json
 └─ .env
```
<br>

## ⚙️ Setup Instructions
### Prerequisites
- Node.js 18+ or 20+
- npm or yarn
- Google Gemini API key

### 1️⃣ Clone the Repository
```
git clone https://github.com/amehtacc/ai-chatbot.git
cd ai-chatbot
```
### 2️⃣ Backend Setup
```
cd backend
npm install
```
Create a .env file:
```
GEMINI_API_KEY=your_gemini_api_key
```
Run the backend server:
```
node server.js
```
Backend will start on:
```
ws://localhost:8080
```
### 3️⃣ Frontend Setup
```
cd frontend
npm install
npm run dev
```
Frontend will run on:
```
http://localhost:5173
```

<br>

## 📡 How It Works
1. User sends a message from the React UI

2. Message is sent to the backend via WebSocket

3. Backend forwards the prompt to Gemini using streaming

4. Gemini returns response chunks

5. Chunks are streamed back to the frontend in real time

6. UI updates live with a typing animation

<br>

## ⏱️ Time Spent

Approx. 8–10 hours, including:
- Architecture planning
- WebSocket + streaming integration
- Debugging Gemini API issues
- UI state management
- Creating reusable components
- Error handling & reconnection logic
- Bonus features

<br>

## 🧑‍💻 Developer
Aryan Mehta
Frontend focused Fullstack Developer passionate about building beautiful, high-performance web experiences.