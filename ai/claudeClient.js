import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";

dotenv.config();

export const claude = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

export async function runClaudeAgent(messages, tools) {
  const response = await claude.messages.create({
    model: "claude-3-5-sonnet-latest",
    messages,
    tools,
  });

  return response;
}
