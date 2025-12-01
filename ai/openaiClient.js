import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

export const openaiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function runOpenAIAgent(messages, tools) {
  const response = await openaiClient.chat.completions.create({
    model: "gpt-4.1-mini",
    messages,
    tools,
    tool_choice: "auto",
  });

  return response;
}
