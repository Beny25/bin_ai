// lib/huggingface.ts
"use client";

export async function queryHuggingFace(userInput: string): Promise<string> {
  // Ambil token dari env, kosong aja kalau free-tier
  const token = process.env.HUGGINGFACE_API_KEY || "";

  const model = process.env.HF_MODEL || "google/flan-t5-small";

  const basePrompt = `
You are BinAI, an AI assistant specialized in educating users about Binance products and crypto trading. 

Your role is to: 
1. Explain Binance features clearly and safely. 
2. Provide simple guidance on staking, DCA, trading pairs, and portfolio tracking.
3. Answer questions about Binance campaigns, airdrops, and rewards accurately. 
4. Stay neutral; never give financial advice, only educational info.
5. Format your answers in short, readable paragraphs or bullet points.
6. Use examples only from Binance ecosystem (BNB, BTC/BNB, staking pools, etc.).
7. Always reference Binance products when explaining crypto concepts.

User question: ${userInput}
`;

  try {
    const res = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
      method: "POST",
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: basePrompt }),
    });

    const data = await res.json();
    console.log("Hugging Face response:", data);

    if (data?.error) return `Error: ${data.error}`;

    return data?.[0]?.generated_text || data?.generated_text || "No response from AI";
  } catch (e) {
    console.error("Hugging Face fetch failed:", e);
    return "Error: AI response failed. Check console for details.";
  }
}
