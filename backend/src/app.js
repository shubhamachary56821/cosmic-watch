import express from "express";
import asteroidRoutes from "./routes/asteroid.routes.js";

const app = express();

app.use(express.json());

app.use("/api/asteroids", asteroidRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Cosmic Watch Backend Running");
});

export default app;
