import express from "express";
import { getAsteroidFeed } from "../controllers/asteroid.controller.js";

const router = express.Router();

router.get("/feed", getAsteroidFeed);

export default router;
