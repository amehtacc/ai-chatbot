import { WebSocketServer } from "ws";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const wss = new WebSocketServer({ port: 8080 });
const ai = new GoogleGenAI({});

wss.on("connection", (ws) => {

  ws.on("message", async (message) => {
    try {
      const userMessage = message.toString();

      const prompt = `
        You are a helpful AI assistant.
        Follow these rules strictly:
        - Keep answers concise
        - Avoid long paragraphs
        - Use simple language
        
        User question:
        ${userMessage}
        `;

      const stream = await ai.models.generateContentStream({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      for await (const chunk of stream) {
        if (chunk.text) {
          ws.send(
            JSON.stringify({
              type: "chunk",
              content: chunk.text,
            }),
          );
        }
      }

      ws.send(JSON.stringify({ type: "done" }));
    } catch (err) {
      console.error("Gemini streaming error:", err);
      ws.send(
        JSON.stringify({
          type: "error",
          message: "AI connection failed!",
        }),
      );
    }
  });

  ws.on("close", () => {
    console.log("🔴 Client disconnected");
  });
});
