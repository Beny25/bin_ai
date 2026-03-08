// lib/huggingface.ts
"use client"; // client side wajib biar fetch & state jalan

export async function queryHuggingFace(userInput: string): Promise<string> {
  const token = localStorage.getItem("HUGGINGFACE_API_KEY") || process.env.HUGGINGFACE_API_KEY;
  const model = process.env.HF_MODEL || "mistralai/Mistral-7B-Instruct-v0.2";

  if (!token) {
    console.error("Hugging Face token not found!");
    return "Error: Hugging Face token not set. Please go to Settings and save your token.";
  }

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
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: basePrompt }),
    });

    const data = await res.json();
    console.log("Hugging Face response:", data);

    if (data?.error) {
      console.error("Hugging Face API Error:", data.error);
      return `Error: ${data.error}`;
    }

    return data?.[0]?.generated_text || "No response from AI";
  } catch (e) {
    console.error("Hugging Face fetch failed:", e);
    return "Error: AI response failed. Check console for details.";
  }
      }
