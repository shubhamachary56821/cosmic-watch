import { Link } from "react-router-dom";
import RiskMeter from "./RiskMeter";

export default function AsteroidCard({ asteroid }) {
  return (
    <Link to={`/asteroid/${asteroid.id}`}>
      <div className="bg-gradient-to-br from-gray-900 to-black 
                      border border-purple-500/30 
                      rounded-xl p-5 hover:scale-105 transition">
        
        <h2 className="text-xl font-semibold text-purple-300">
          {asteroid.name}
        </h2>

        <p className="text-sm text-gray-400">
          Close Approach: {asteroid.closeApproachDate}
        </p>

        <div className="mt-3 space-y-1 text-sm">
          <p>📏 Distance: {asteroid.distanceKm} km</p>
          <p>🚀 Velocity: {asteroid.velocityKps} km/s</p>
        </div>

        <span className={`inline-block mt-3 px-3 py-1 text-xs rounded-full
          ${asteroid.hazardous ? "bg-red-500" : "bg-green-500"}`}>
          {asteroid.hazardous ? "Hazardous" : "Safe"}
        </span>

        <RiskMeter score={asteroid.riskScore} />
      </div>
    </Link>
  );
}
