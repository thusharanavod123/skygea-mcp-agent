import http from "http";
import { WeatherTool } from "./tools/weatherTool.js";

const PORT = 8080;

const server = http.createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/run-tool") {
    let body = "";
    req.on("data", chunk => (body += chunk.toString()));
    req.on("end", async () => {
      const { city } = JSON.parse(body);
      const output = await WeatherTool.execute({ city });
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ result: output }));
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("✅ Skygea MCP Server is running!");
  }
});

server.listen(PORT, () =>
  console.log(`🚀 MCP-like server running on http://localhost:${PORT}`)
);
