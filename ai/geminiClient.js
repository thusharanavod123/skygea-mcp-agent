import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function runGeminiAgent(messages, tools) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const response = await model.generateContent({
    contents: messages,
    tools: tools,
  });

  return response;
}
