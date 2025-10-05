const fetch = require("node-fetch");

exports.handler = async function (event) {
  // Handle OPTIONS request for CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://stream-oracle.web.app", // Allow requests from my Firebase domain
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "OK",
    };
  }

  try {
    // Parse the request body
    const requestBody = JSON.parse(event.body || "{}");
    const { contents } = requestBody;

    if (!contents) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "https://stream-oracle.web.app",
        },
        body: JSON.stringify({ error: "Contents parameter is required" }),
      };
    }

    const AI_STUDIO_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(AI_STUDIO_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contents }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Gemini API error:", errorData);
      throw new Error(
        `Gemini API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://stream-oracle.web.app",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error in gemini function:", error); // Log the error
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "https://stream-oracle.web.app",
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
