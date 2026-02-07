import axios from "axios";

const API = axios.create({
  baseURL: "https://api.cosmicwatch.com", // assume exists
});

export const loginUser = (data) => API.post("/auth/login", data);
export const registerUser = (data) => API.post("/auth/register", data);

export const fetchAsteroids = () => API.get("/asteroids");
export const fetchAsteroidById = (id) => API.get(`/asteroids/${id}`);
