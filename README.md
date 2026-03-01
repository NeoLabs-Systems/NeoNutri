<div align="center">

# NeoNutri

**Your nutrition. Your server. Your rules.**

[![Node](https://img.shields.io/badge/Node.js-18+-5fa04e?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![SQLite](https://img.shields.io/badge/SQLite-WAL-003b57?style=flat-square&logo=sqlite&logoColor=white)](https://sqlite.org)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ed?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com)
[![PWA](https://img.shields.io/badge/PWA-ready-6366f1?style=flat-square&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-MIT-a855f7?style=flat-square)](LICENSE)

A self-hosted AI-powered nutrition tracker that runs on your own hardware.  
Snap a photo of any meal — AI identifies the food and estimates calories, protein, carbs and fat in seconds.  
No cloud. No subscription. No tracking. Just your data.

---

[📖 Setup](#quick-start) · [🐳 Docker](#running-with-docker) · [🤖 AI Assistant](#connecting-an-ai-assistant)

---

*Made with ❤️ by [Neo](https://github.com/neooriginal) · [NeoLabs Systems](https://github.com/NeoLabs-Systems)*

</div>

---

## What it does

| Feature | Description |
|---|---|
| 📸 **Snap & track** | Point your camera at any meal — AI identifies food and estimates calories, protein, carbs and fat in seconds |
| 📊 **Daily dashboard** | Calorie ring and macro breakdown at a glance |
| ⚡ **AI daily coach** | One personalised action today, based on your actual eating history |
| ⏱️ **Fasting timer** | One-tap fasting with 16:8, 18:6, 20:4, 24h protocols and full history |
| ⚖️ **Weight goal** | Set a target weight and date, log daily, watch the progress bar |
| 📱 **PWA — works offline** | Add to your home screen and use it like a native app |
| 🤖 **MCP / AI assistant** | Connect Claude or any MCP-compatible AI directly to your food data |

---

## Quick start

### Requirements

- [Node.js 18+](https://nodejs.org)
- An [OpenAI API key](https://platform.openai.com/api-keys)

### 1 · Clone and install

```bash
git clone https://github.com/NeoLabs-Systems/NeoNutri
cd NeoNutri
npm install
```

### 2 · Configure

```bash
cp .env.example .env
```

Edit `.env`:

```env
OPENAI_API_KEY=sk-...
JWT_SECRET=any-long-random-string
```

### 3 · Start

```bash
npm start
```

Open **http://localhost:3000**, create an account, and you're in.

---

## Running with Docker

```bash
docker-compose up -d
```

The app is available at **http://localhost:3000**.

> Set `OPENAI_API_KEY` and `JWT_SECRET` in a `.env` file before starting.

---

## Connecting an AI assistant

NeoNutri has a built-in MCP server that lets AI assistants read your food log, check your fasting status, and log meals for you — just by asking.

**Step 1 — Generate your key**

Open the app → tap Settings (⚙) → **AI Access** → **Generate key**.

**Step 2 — Add to Claude Desktop**

```json
{
  "mcpServers": {
    "neonutri": {
      "url": "http://localhost:3001/sse",
      "headers": {
        "x-api-key": "nn_your_key_here"
      }
    }
  }
}
```

Restart Claude Desktop. You can now ask:
- *"What did I eat today and how many calories is that?"*
- *"Log 200g of chicken breast for lunch"*
- *"How is my fast going?"*
- *"Am I on track for my weight goal?"*

