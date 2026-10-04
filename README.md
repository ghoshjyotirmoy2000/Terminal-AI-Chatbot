# Terminal AI Chatbot

A simple terminal-based AI chatbot built with **TypeScript** and the **Google Gemini API**.

### Features

* Chat with Gemini from the terminal
* Maintains conversation context
* Handles basic API errors
* Exit using `exit`

### Setup

Clone the repository and install dependencies:

```bash
npm install
```

### Get Gemini API Key

1. Go to **Google AI Studio**: https://aistudio.google.com/
2. Sign in with your Google account.
3. Create or generate an API key.
4. Copy the API key.

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_api_key
```

> ⚠️ Never share or commit your API key.

### Run

```bash
npx tsx src/index.ts
```

### Example

```text
You: My name is Jyotirmoy
AI: Nice to meet you, Jyotirmoy!

You: What is my name?
AI: Your name is Jyotirmoy.
```

### Tech Stack

* TypeScript
* Node.js
* Google Gemini API
