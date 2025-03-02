const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://incomparable-malasada-5f1901.netlify.app/.netlify/functions" // Use my Netlify site URL
    : "http://localhost:8888/.netlify/functions"; // Use local URL for development

// For TMDB API calls
export async function fetchFromTMDB(endpoint, method = "GET") {
  try {
    const response = await fetch(`${API_BASE_URL}/tmdb`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ endpoint, method }),
    });

    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching from TMDB:", error);
    throw error;
  }
}

// For Gemini API calls
export async function fetchFromGemini(contents) {
  try {
    const response = await fetch(`${API_BASE_URL}/gemini`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contents }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching from Gemini:", error);
    throw error;
  }
}
