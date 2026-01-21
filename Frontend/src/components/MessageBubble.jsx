import ReactMarkdown from "react-markdown";
import { formatTime } from "../utils/formatTime";
import { toast } from "react-toastify";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function MessageBubble({ message }) {
  const isUser = message.role === "user";
  const [showCopyIcon, setShowCopyIcon] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    toast.success("Message copied");
  };

  return (
    <>
      <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
        <div
          className="flex gap-2"
          onMouseEnter={() => setShowCopyIcon(true)}
          onMouseLeave={() => setShowCopyIcon(false)}
        >
          {/* Copy Button for User */}
          {showCopyIcon && isUser && (
            <button
              onClick={handleCopy}
              title="Copy message"
              aria-label="Copy message"
            >
              <Copy className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer" />
            </button>
          )}

          {/* Message content and time */}
          <div
            className={`max-w-xs p-3 ${
              isUser
                ? "bg-blue-800 rounded-l-lg rounded-br-lg"
                : "bg-gray-800 rounded-r-lg rounded-bl-lg"
            }`}
          >
            <div className="prose prose-sm max-w-none prose-invert">
              <ReactMarkdown>{message.content}</ReactMarkdown>
            </div>

            <span className="text-xs opacity-70">
              {formatTime(message.timestamp)}
            </span>
          </div>

          {/* Copy Button for AI response */}
          {showCopyIcon && !isUser && (
            <button
              onClick={handleCopy}
              className="text-lg opacity-60 hover:opacity-100 cursor-pointer"
              title="Copy message"
              aria-label="Copy message"
            >
              <Copy className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
