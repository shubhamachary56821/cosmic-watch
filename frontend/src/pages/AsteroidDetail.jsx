import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAsteroidById } from "../services/api";
import ChartVelocity from "../components/ChartVelocity";

export default function AsteroidDetail() {
  const { id } = useParams();
  const [asteroid, setAsteroid] = useState(null);

  useEffect(() => {
    fetchAsteroidById(id).then(res => setAsteroid(res.data));
  }, [id]);

  if (!asteroid) return <p className="text-white">Loading...</p>;

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-3xl text-purple-400 mb-4">
        ☄️ {asteroid.name}
      </h1>

      <ChartVelocity data={asteroid.velocityHistory} />
    </div>
  );
}
