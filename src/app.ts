import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/api", contactRoutes);

  app.use((_req, res) => res.status(404).json({ ok: false, error: "Not found" }));

  return app;
}