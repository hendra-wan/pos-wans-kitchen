import axios from "axios";

export const API = axios.create({
  baseURL: (import.meta.env.VITE_API_BASE ? import.meta.env.VITE_API_BASE : "") + "/api",
  timeout: 10000,
});
