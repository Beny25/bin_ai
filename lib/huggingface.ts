export async function queryHuggingFace(prompt: string): Promise<string> {
  const token = localStorage.getItem("HUGGINGFACE_API_KEY") || process.env.HUGGINGFACE_API_KEY;
  const model = process.env.HF_MODEL || "mistralai/Mistral-7B-Instruct-v0.2";

  const res = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: prompt }),
  });

  const data = await res.json();
  return data?.[0]?.generated_text || "No response";
}
