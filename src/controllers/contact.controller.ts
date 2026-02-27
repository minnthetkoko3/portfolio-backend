import type { Request, Response } from "express";
import { Message } from "../models/Message.js";

type ContactBody = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

export async function createContactMessage(
  req: Request<{}, {}, Partial<ContactBody>>,
  res: Response
) {
  try {
    const { name, email, subject = "", message } = req.body ?? {};

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "name, email, message are required." });
    }

    const saved = await Message.create({ name, email, subject, message });
    return res.status(201).json({ ok: true, id: saved._id });
  } catch {
    return res.status(500).json({ ok: false, error: "Server error." });
  }
}