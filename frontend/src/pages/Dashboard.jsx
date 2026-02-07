import { useEffect, useState } from "react";
import { fetchAsteroids } from "../services/api";
import AsteroidCard from "../components/AsteroidCard";

export default function Dashboard() {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    fetchAsteroids().then(res => setAsteroids(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-purple-400 mb-6">
        ☄️ Cosmic Watch Dashboard
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {asteroids.map(ast => (
          <AsteroidCard key={ast.id} asteroid={ast} />
        ))}
      </div>
    </div>
  );
}
