import { UserProfile, Scheme } from "../types";
import { ALL_SCHEMES } from "../data/schemes";

export const findSchemes = async (profile: UserProfile): Promise<{ schemes: Scheme[], sources: any[] }> => {
  // Simulate a small delay for a better user experience
  await new Promise(resolve => setTimeout(resolve, 800));

  // Simple local filtering logic
  const filteredSchemes = ALL_SCHEMES.filter(scheme => {
    const title = scheme.title.toLowerCase();
    const desc = scheme.description.toLowerCase();
    const elig = scheme.eligibilitySummary.toLowerCase();
    
    // Basic keyword matching based on profile
    const profileKeywords = [
      profile.occupation.toLowerCase(),
      profile.caste.toLowerCase(),
      profile.location.toLowerCase()
    ];

    // Check if any profile keyword matches scheme details
    const matchesProfile = profileKeywords.some(kw => 
      title.includes(kw) || desc.includes(kw) || elig.includes(kw)
    );

    // Income-based filtering (simplified)
    const incomeValue = parseInt(profile.income.replace(/[^0-9]/g, "")) || 0;
    const isLowIncome = incomeValue < 500000;
    const needsLowIncome = elig.includes("low income") || elig.includes("bpl") || elig.includes("ews");

    if (needsLowIncome && !isLowIncome) return false;

    // Age-based filtering (simplified)
    const age = profile.age;
    if (title.includes("sukanya") && age > 10) return false;
    if (title.includes("atal pension") && (age < 18 || age > 40)) return false;

    // If it's a general scheme or matches profile, include it
    return matchesProfile || scheme.relevanceScore > 80;
  });

  // Sort by relevance and return top 6
  const sortedSchemes = filteredSchemes
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 6);

  return { 
    schemes: sortedSchemes, 
    sources: [] 
  };
};

export const chatWithAssistant = async (history: { role: string, content: string }[], userMessage: string, profile: UserProfile) => {
  return "I'm sorry, the AI Assistant is currently unavailable in the offline version of SchemeSnap. Please refer to the official scheme links for more information.";
};