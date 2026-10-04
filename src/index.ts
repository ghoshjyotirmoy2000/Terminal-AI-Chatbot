import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
import { sendMessage } from "./chat";

const rl = readline.createInterface({
  input,
  output,
});

async function main() {
  console.log("🤖 AI Chatbot");
  console.log("Type 'exit' to quit.\n");

  while (true) {
    const userInput = await rl.question("You: ");

    if (userInput.toLowerCase() === "exit") {
      break;
    }

    if (!userInput.trim()) {
      continue;
    }

    const response = await sendMessage(userInput);

    if (response) {
      console.log("AI:", response);
    }
  }

  rl.close();
}

main();