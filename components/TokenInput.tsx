import { useState } from "react";

export default function TokenInput() {
  const [token, setToken] = useState("");

  const saveToken = () => {
    localStorage.setItem("HUGGINGFACE_API_KEY", token);
    alert("Token saved locally!");
  };

  return (
    <div className="flex flex-col space-y-2">
      <input
        className="p-2 rounded bg-slate-700 text-white"
        placeholder="Enter Hugging Face Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <button className="bg-yellow-400 p-2 rounded" onClick={saveToken}>Save Token</button>
    </div>
  );
}
