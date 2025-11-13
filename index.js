import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Imagine the AI can call your MCP tool later here
const response = await client.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    { role: "user", content: "Hey, check weather for Colombo using MCP tool" }
  ]
});

console.log(response.choices[0].message);
