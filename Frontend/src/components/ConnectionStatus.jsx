import { useEffect } from "react";
import { toast } from "react-toastify";

export default function ConnectionStatus({ status, error, onClearChat  }) {
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="border-b-2 border-x-2 py-3 px-2 border-gray-600 flex items-center justify-between">
      <div className="text-sm">
        {status === "connected" && "🟢 Connected"}
        {status === "connecting" && "🟡 Connecting"}
        {status === "disconnected" && "🔴 Disconnected"}
        {status === "error" && "❌ Error"}
      </div>

      <h2 className="text-xl font-semibold">🤖AI-Chatbot</h2>

      <button
        onClick={onClearChat}
        className="text-xs px-3 py-2 border rounded hover:bg-gray-900 cursor-pointer"
      >
        Clear Chat
      </button>
    </div>
  );
}
