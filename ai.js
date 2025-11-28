import { GoogleGenAI } from "@google/genai";

const API_KEY = "YOUR_API_KEY"
const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_PROMPT = `
You are a chef with 40 years of experience. The user gives you a list of ingredients they have.Suggest a recipe using those ingredients (you should not add any other ingredient just give direct detailed recipe without giving any credits to any other chef just the name of the dish and Give me a full cooking guide for RECIPE NAME.It must include:Required utensils,Ingredient list with exact measurements.Step-by-step instructions in simple language.Final serving suggestion.simple that even a first time cooker can understand).Format your response in Markdown for display.
`;

export async function getRecipeFromChefOxzi(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      { text: SYSTEM_PROMPT },
      { text: `I have: ${ingredientsString}. Please give me a recipe.` },
    ],
  });
  return result.text;
}
