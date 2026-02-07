import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/asteroids/feed`)
      .then(res => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then(setData)
      .catch(err => setError(err.message));
  }, []);

  return (
    <div style={{ padding: "2rem", color: "white", background: "#000", minHeight: "100vh" }}>
      <h1>🌌 Cosmic Watch</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data ? (
        <pre style={{ fontSize: "12px" }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      ) : (
        <p>Loading asteroid data…</p>
      )}
    </div>
  );
}

export default App;
