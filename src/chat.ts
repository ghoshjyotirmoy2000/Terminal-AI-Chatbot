import { ai } from "./gemini";

let previousInteractionId: string | undefined;

export async function sendMessage(userInput: string) {
  try {
    let response;

    if (!previousInteractionId) {
      response = await ai.interactions.create({
        model: "gemini-3.5-flash-lite",
        system_instruction:
          "You are a helpful assistant. Keep your answers clear and concise.",
        input: userInput,
      });
    } else {
      response = await ai.interactions.create({
        model: "gemini-3.5-flash-lite",
        input: userInput,
        previous_interaction_id: previousInteractionId,
      });
    }

    previousInteractionId = response.id;

    return response.output_text;
  } catch (error) {
    console.error(" Error communicating with Gemini:", error);
  }
}