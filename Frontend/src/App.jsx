import ChatWindow from "./components/ChatWindow";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div className="bg-[#080e17] text-white min-h-screen">
      <ChatWindow />
      <ToastContainer />
    </div>
  );
}
