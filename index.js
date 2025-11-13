import OpenAI from "openai";
import dotenv from "dotenv";
import { WeatherTool } from "./mcp/tools/weatherTool.js";
dotenv.config();

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function runConversation() {
  const messages = [
    { role: "user", content: "Hey, check weather for Colombo using MCP tool" },
  ];

  const tools = [
    {
      type: "function",
      function: WeatherTool,
    },
  ];

  const result = await WeatherTool.execute({ city: "Colombo" });
console.log("Tool Response:", result);


  const responseMessage = response.choices[0].message;

  const toolCalls = responseMessage.tool_calls;
  if (toolCalls) {
    messages.push(responseMessage);
    for (const toolCall of toolCalls) {
      const functionName = toolCall.function.name;
      const functionArgs = JSON.parse(toolCall.function.arguments);
      if (functionName === WeatherTool.name) {
        const functionResponse = await WeatherTool.execute(functionArgs);
        console.log("Tool Response:", functionResponse);
      }
    }
  } else {
    console.log(responseMessage.content);
  }
}

runConversation();
