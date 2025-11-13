import { MCPServer } from "mcp-server";
import { WeatherTool } from "./tools/weatherTool.js";

const server = new MCPServer({
  tools: [WeatherTool],
  port: 8080,
});

server.start();
