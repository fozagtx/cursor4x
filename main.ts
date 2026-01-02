import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import "dotenv/config";

const model = openai("gpt-5.2-chat");


export async function askQuestion(prompt) {
  const { text } = await generateText({
  model,
  prompt,
});
return text;
}

const answer = await askQuestion("what is prompt engineering")
console.log(answer);
                                        
