import axios from "axios";

const NASA_BASE_URL = "https://api.nasa.gov/neo/rest/v1";

export async function fetchNeoFeed(startDate, endDate) {
  const apiKey = process.env.NASA_API_KEY || "DEMO_KEY";

  const url = `${NASA_BASE_URL}/feed`;

  try {
    const response = await axios.get(url, {
      params: {
        start_date: startDate,
        end_date: endDate,
        api_key: apiKey,
      },
    });

    return response.data;
  } catch (error) {
    console.error("NASA API Error:", error.message);
    throw new Error("Failed to fetch data from NASA NeoWs API");
  }
}
