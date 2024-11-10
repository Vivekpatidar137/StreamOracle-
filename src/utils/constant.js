// constant.js
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_MOVIE_API_TOKEN}`,
  },
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "english", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "french", name: "French" },
  { identifier: "spanish", name: "Spanish" },
];

export const AI_STUDIO_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key="

// Access environment variable from .env
export const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
