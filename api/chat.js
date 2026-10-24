// Vercel serverless function. Store XAI_API_KEY in Vercel Environment Variables.
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.XAI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "AI service is not configured" });

  const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";
  if (!message || message.length > 4000) {
    return res.status(400).json({ error: "Message must contain 1–4000 characters" });
  }

  try {
    const upstream = await fetch("https://api.x.ai/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "grok-4.7",
        instructions: "You are Karina AI, a helpful assistant. Answer in the language used by the user. For cybersecurity, focus on defensive, legal learning and authorized labs. Never ask for secrets, passwords, or API keys.",
        input: message
      })
    });

    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      // Do not send provider details or secrets back to the browser.
      console.error("xAI request failed with status", upstream.status);
      return res.status(502).json({ error: "AI provider request failed" });
    }
    if (typeof data.output_text !== "string") {
      return res.status(502).json({ error: "No text response returned" });
    }
    return res.status(200).json({ reply: data.output_text });
  } catch {
    console.error("Karina AI upstream request failed");
    return res.status(502).json({ error: "Unable to reach AI service" });
  }
}
