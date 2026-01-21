import { useEffect, useRef, useState } from "react";

export function useWebSocket(onChunk, onDone, onError) {
  const socketRef = useRef(null);
  const reconnectAttempts = useRef(0);
  const reconnectTimeout = useRef(null);

  const [status, setStatus] = useState("connecting");

  const connect = () => {
    setStatus("connecting");

    const socket = new WebSocket("ws://localhost:8080");
    socketRef.current = socket;

    socket.onopen = () => {
      reconnectAttempts.current = 0;
      setStatus("connected");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "chunk") onChunk(data.content);
      if (data.type === "done") onDone();
      if (data.type === "error") onError(data.message);
    };

    socket.onerror = () => {
      setStatus("error");
    };

    socket.onclose = () => {
      setStatus("disconnected");

      if (reconnectAttempts.current < 3) {
        reconnectAttempts.current += 1;

        reconnectTimeout.current = setTimeout(() => {
          connect();
        }, 2000);
      }
    };
  };

  useEffect(() => {
    connect();

    return () => {
      clearTimeout(reconnectTimeout.current);
      socketRef.current?.close();
    };
  }, []);

  const sendMessage = (message) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(message);
    } else {
      onError("Connection not available");
    }
  };

  return { sendMessage, status };
}
