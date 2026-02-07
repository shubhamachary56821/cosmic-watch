export function calculateRiskScore(asteroid) {
  const diameterKm =
    asteroid.estimated_diameter.kilometers.estimated_diameter_max;

  const closeApproach = asteroid.close_approach_data[0];

  const velocity =
    parseFloat(closeApproach.relative_velocity.kilometers_per_hour);

  const missDistanceKm =
    parseFloat(closeApproach.miss_distance.kilometers);

  let score = 0;

  if (asteroid.is_potentially_hazardous_asteroid) {
    score += 40;
  }

  score += Math.min(diameterKm * 20, 30);
  score += Math.min(velocity / 10000, 20);
  score += Math.min(1000000 / missDistanceKm, 30);

  return Math.round(score);
}
