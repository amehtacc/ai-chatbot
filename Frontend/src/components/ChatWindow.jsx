import { useState } from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import ConnectionStatus from "./ConnectionStatus";
import { useWebSocket } from "../hooks/useWebSocket";

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);

  const handleChunk = (chunk) => {
    setMessages((prev) => {
      const updated = [...prev];
      updated[updated.length - 1].content += chunk;
      return updated;
    });
  };

  const handleDone = () => {
    setIsTyping(false);
  };

  const handleError = (message) => {
    setIsTyping(false);
    setError(message || "Something went wrong");
  };

  const { sendMessage, status } = useWebSocket(
    handleChunk,
    handleDone,
    handleError,
  );

  const handleSend = (text) => {
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    const aiMsg = {
      id: Date.now() + 1,
      role: "ai",
      content: "",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setIsTyping(true);
    sendMessage(text);
    setError(null);
  };

  const handleClearChat = () => {    
    setMessages([]);
    setIsTyping(false);
    setError(null);
  };

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto">
      <ConnectionStatus status={status} error={error} onClearChat={handleClearChat} />
      <MessageList messages={messages} isTyping={isTyping} />
      <ChatInput
        onSend={handleSend}
        disabled={isTyping || status !== "connected"}
      />
    </div>
  );
}
