import { useState } from "react";

export default function ChatInput({ onSend, disabled }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    onSend(text);
    setText("");
  };

  return (
    <div className="flex gap-2 mb-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        disabled={disabled}
        className="flex-1 border p-2 rounded"
        placeholder="Type a message..."
      />
      <button
        onClick={handleSubmit}
        disabled={disabled}
        className="bg-blue-500 text-white px-4 rounded disabled:opacity-50 cursor-pointer"
      >
        Send
      </button>
    </div>
  );
}
