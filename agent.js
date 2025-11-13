import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/run-agent", async (req, res) => {
  const { prompt } = req.body;

  try {
    // Step 1: extract city name from prompt (simple demo)
    const cityMatch = prompt.match(/in\s+(\w+)/i);
    const city = cityMatch ? cityMatch[1] : "Colombo";

    // Step 2: call your MCP tool
    const response = await fetch("http://localhost:8080/run-tool", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ city }),
    });

    const data = await response.json();

    // Step 3: create a simple AI-like answer
    const aiReply = `You asked about ${city}. ${data.result}`;

    res.json({ aiReply });
  } catch (err) {
    console.error("Agent error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(9090, () => {
  console.log("🤖 AI Agent running on http://localhost:9090");
});
