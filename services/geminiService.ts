import { GoogleGenAI, Type } from "@google/genai";
import { ProjectScope } from "../types";

const apiKey = process.env.API_KEY || '';
// Initialize AI only if key is present to avoid immediate crash on load, handled in calls
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const analyzeProjectIdea = async (idea: string): Promise<ProjectScope> => {
  if (!ai) {
    throw new Error("API Key not found. Please configure the environment.");
  }

  const prompt = `
    You are a senior solutions architect at SYS Studios. 
    Analyze the following project idea and provide a technical scope.
    Idea: "${idea}"
    
    Return a JSON object containing:
    - complexity: A number between 0 and 100 representing technical difficulty.
    - estimatedWeeks: Estimated number of weeks to build an MVP.
    - costEstimate: A string range in USD (e.g., "$5,000 - $8,000").
    - techStack: An array of recommended technologies (e.g., React, Node.js).
    - features: An array of 3-5 core features required for MVP.
    - summary: A professional 2-sentence summary of the project for a proposal.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            complexity: { type: Type.NUMBER },
            estimatedWeeks: { type: Type.NUMBER },
            costEstimate: { type: Type.STRING },
            techStack: { type: Type.ARRAY, items: { type: Type.STRING } },
            features: { type: Type.ARRAY, items: { type: Type.STRING } },
            summary: { type: Type.STRING },
          },
          required: ["complexity", "estimatedWeeks", "costEstimate", "techStack", "features", "summary"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as ProjectScope;
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    // Fallback for demo purposes if AI fails or quota exceeded
    return {
      complexity: 50,
      estimatedWeeks: 4,
      costEstimate: "Contact for Quote",
      techStack: ["React", "TypeScript", "Node.js"],
      features: ["User Authentication", "Dashboard", "Responsive Design"],
      summary: "We encountered an issue analyzing your specific request, but we'd love to discuss it manually."
    };
  }
};
