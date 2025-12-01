import { runOpenAIAgent } from "./openaiClient.js";
import { runClaudeAgent } from "./claudeClient.js";
import { runGeminiAgent } from "./geminiClient.js";

export async function runAgent(model, messages, tools) {
  switch (model) {
    case "openai":
      return await runOpenAIAgent(messages, tools);
    case "claude":
      return await runClaudeAgent(messages, tools);
    case "gemini":
      return await runGeminiAgent(messages, tools);
    default:
      throw new Error("Invalid model type");
  }
}
