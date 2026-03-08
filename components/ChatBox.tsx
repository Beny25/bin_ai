import { useState } from "react";
import { queryHuggingFace } from "../lib/huggingface";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{role: string, text: string}[]>([]);

  const sendMessage = async () => {
    if (!input) return;
    setMessages([...messages, { role: "user", text: input }]);
    const response = await queryHuggingFace(input);
    setMessages([...messages, { role: "user", text: input }, { role: "ai", text: response }]);
    setInput("");
  };

  return (
    <div className="flex flex-col">
      <div className="mb-4 max-h-96 overflow-y-auto space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "ai" ? "text-yellow-400" : "text-white"}>
            <strong>{m.role === "ai" ? "BinAI: " : "You: "}</strong>{m.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="flex-1 p-2 rounded-l bg-slate-700 text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Binance..."
        />
        <button className="bg-yellow-400 px-4 rounded-r" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
