export default function TypingIndicator() {
  return (
    <div className="flex items-center space-x-1 text-gray-400 text-sm px-2">
      <span>AI is typing</span>
      <span className="animate-bounce delay-300 duration-300">.</span>
      <span className="animate-bounce delay-500 duration-300">.</span>
      <span className="animate-bounce delay-300 duration-300">.</span>
    </div>
  );
}
