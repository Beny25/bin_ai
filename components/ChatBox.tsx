"use client";

import { useState } from "react";
import { queryHuggingFace } from "../lib/huggingface";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;

    setMessages([...messages, { role: "user", text: input }]);
    setLoading(true);

    try {
      const response = await queryHuggingFace(input);
      setMessages((prev) => [...prev, { role: "ai", text: response }]);
    } catch (err) {
      console.error("ChatBox error:", err);
      setMessages((prev) => [...prev, { role: "ai", text: "Error: Failed to get AI response" }]);
    } finally {
      setLoading(false);
    }

    setInput("");
  };

  return (
    <div className="flex flex-col">
      <div className="mb-4 max-h-96 overflow-y-auto space-y-2 p-2 border border-slate-600 rounded">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "ai" ? "text-yellow-400" : "text-white"}>
            <strong>{m.role === "ai" ? "BinAI: " : "You: "}</strong>
            {m.text}
          </div>
        ))}
        {loading && <div className="text-gray-400">BinAI is thinking...</div>}
      </div>
      <div className="flex mt-2">
        <input
          className="flex-1 p-2 rounded-l bg-slate-700 text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Binance..."
        />
        <button
          className="bg-yellow-400 px-4 rounded-r"
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
          }
