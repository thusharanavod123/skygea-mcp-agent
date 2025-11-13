# 🧠 MCP Agent Starter Kit

> 🚀 A complete starter kit for building custom AI agents using the **Model Context Protocol (MCP)** and **OpenAI**.  
> Learn how to create, run, and extend intelligent agents that can connect real-world tools with LLMs.

![GitHub stars](https://img.shields.io/github/stars/thusharanavod123/mcp-agent-starter-kit?style=social)
![GitHub forks](https://img.shields.io/github/forks/thusharanavod123/mcp-agent-starter-kit?style=social)
![License](https://img.shields.io/github/license/thusharanavod123/mcp-agent-starter-kit)
![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![OpenAI](https://img.shields.io/badge/OpenAI-API-blue)

---

## 🧩 What is This?

This project is a **minimal yet powerful template** that helps developers understand and build AI agents using the **Model Context Protocol (MCP)** — a new standard for enabling structured interactions between tools and large language models (LLMs).

It comes with:
- ✅ A basic **MCP server**
- ✅ A sample **AI Tool (`WeatherTool`)**
- ✅ Integration with **OpenAI API**
- ✅ A working **client example** that demonstrates tool calls

---

## 🏗️ Project Structure

mcp-agent-starter-kit/
│
├── index.js # Main client entry point (OpenAI + MCP)
├── mcp/
│ ├── server.js # MCP server setup
│ └── tools/
│ └── weatherTool.js # Example custom tool
│
├── .env # OpenAI API key
├── package.json
└── README.md



---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/thusharanavod123/mcp-agent-starter-kit.git
cd mcp-agent-starter-kit

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory:

OPENAI_API_KEY=your_openai_api_key_here

4️⃣ Run the MCP Server
node mcp/server.js


✅ You should see:

MCP-like server running on http://localhost:8080

5️⃣ Test Your MCP Agent

If you’re using PowerShell (Windows):

Invoke-WebRequest -Uri "http://localhost:8080/run-tool" -Method POST -Body '{"city":"Colombo"}' -ContentType "application/json"


If you’re using Mac/Linux terminal:

curl -X POST http://localhost:8080/run-tool \
  -H "Content-Type: application/json" \
  -d '{"city":"Colombo"}'


✅ You’ll get a JSON response like:

{"result": "Weather in Colombo is 28°C and sunny."}

🧠 How It Works

MCP Server (mcp/server.js)

Hosts your custom AI tools (e.g., WeatherTool).

Listens on a local port (default: 8080).

MCP Tools (mcp/tools/)

Define real-world functions (e.g., fetching weather, sending emails, running commands).

Each tool can expose name, description, and execute().

OpenAI Client (index.js)

Connects your LLM with your MCP server.

Sends user queries → triggers MCP tools → returns intelligent responses.

🧩 Example Custom Tool

Example: mcp/tools/weatherTool.js

export const WeatherTool = {
  name: "WeatherTool",
  description: "Fetches current weather for a given city",
  async execute({ city }) {
    return { result: `Weather in ${city} is 28°C and sunny.` };
  },
};
You can replace this with any tool (e.g., file searcher, calendar integration, API fetcher).

🧭 Branch Structure
Branch	Purpose
main	Stable version ready for production
dev	Experimental branch for testing new tools and features
agent-core	MCP core logic improvements
tool-plugins	For building and testing modular tools (e.g., calculator, email sender)
docs	Documentation, examples, and tutorials
🌍 Topics
mcp ai-agent model-context-protocol openai nodejs ai-framework ai-tools llm mcp-server developer-tools

🤝 Contributing

Contributions are welcome!
Fork the repo, make your changes, and submit a PR.
If you build an awesome custom tool, feel free to add it under /mcp/tools/ and share it with the community.

📜 License

This project is licensed under the MIT License
.

⭐ Support

If this repo helps you, please star ⭐ it and share it on:

LinkedIn

X (Twitter)

Dev.to

Every star helps inspire new developers to explore MCP and AI tools. 🌱



---

Would you like me to also create a **`CONTRIBUTING.md`** and **GitHub banner idea (header image prompt)** so your repo looks visually stunning and professional on GitHub?
