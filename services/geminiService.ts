
import { GoogleGenAI } from "@google/genai";
import { TagResult } from "../types";

export const generateYouTubeTags = async (topic: string): Promise<TagResult> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Please ensure environment variables are configured.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const systemInstruction = "You are a professional YouTube SEO expert. Your goal is to generate high-ranking, relevant search tags to help videos go viral.";
  
  const userPrompt = `Generate exactly 100 SEO-optimized, comma-separated YouTube tags for the topic: [${topic}]. 

Requirements:
1. Provide exactly 100 tags.
2. Mix broad keywords, specific long-tail keywords, and trending phrases.
3. Format as a simple comma-separated list.
4. No numbering, no bullet points, and no introductory or extra text.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const text = response.text || "";
    if (!text) {
      throw new Error("Empty response from AI.");
    }

    // Split by comma and clean up
    const allTags = text
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    // Ensure we have exactly what we want
    const tags = allTags.slice(0, 100);
    
    // Pick first few as recommended
    const recommended = tags.slice(0, 8);

    return {
      tags,
      recommended,
      topic
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate tags. Please try again later.");
  }
};
