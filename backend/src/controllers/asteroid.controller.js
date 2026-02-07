import { fetchNeoFeed } from "../services/nasa.service.js";
import { calculateRiskScore } from "../services/risk.service.js";

export async function getAsteroidFeed(req, res) {
  try {
    const today = new Date().toISOString().split("T")[0];

    const data = await fetchNeoFeed(today, today);

    const asteroids = [];

    Object.values(data.near_earth_objects).forEach((dailyList) => {
      dailyList.forEach((asteroid) => {
        const approach = asteroid.close_approach_data[0];

        asteroids.push({
          id: asteroid.neo_reference_id,
          name: asteroid.name,
          diameter_km:
            asteroid.estimated_diameter.kilometers
              .estimated_diameter_max,
          close_approach_date: approach.close_approach_date,
          velocity_kmph:
            approach.relative_velocity.kilometers_per_hour,
          miss_distance_km:
            approach.miss_distance.kilometers,
          hazardous: asteroid.is_potentially_hazardous_asteroid,
          risk_score: calculateRiskScore(asteroid),
        });
      });
    });

    res.json({
      count: asteroids.length,
      asteroids,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}
