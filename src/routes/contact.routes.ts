import { Router } from "express";
import { createContactMessage } from "../controllers/contact.controller.js";

const router = Router();

router.get("/health", (_req, res) => res.json({ ok: true }));
router.post("/contact", createContactMessage);

export default router;