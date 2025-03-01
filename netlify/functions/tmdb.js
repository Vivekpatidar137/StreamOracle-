const fetch = require("node-fetch");

exports.handler = async function (event) {
  // Handle OPTIONS request for CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://stream-oracle.web.app", // Allow requests my your Firebase domain
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "OK",
    };
  }

  try {
    const { endpoint, method = "GET" } = JSON.parse(event.body || "{}");

    if (!endpoint) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "https://stream-oracle.web.app",
        },
        body: JSON.stringify({ error: "Endpoint parameter is required" }),
      };
    }

    const API_OPTIONS = {
      method: method,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
    };

    // Make the request to TMDB API
    const response = await fetch(
      `https://api.themoviedb.org/3/${endpoint}`,
      API_OPTIONS
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("TMDB API error:", errorData); // Log the error details
      throw new Error(`TMDB API error: ${response.statusText}`);
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
    console.error("Error in tmdb function:", error); // Log the error
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "https://stream-oracle.web.app",
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
