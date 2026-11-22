import nodemailer from "nodemailer";
import { CONTACT_EMAIL, FORM_FROM_EMAIL, SITE_NAME } from "@/lib/site";

export type ContactPayload = {
  mode: "kontakt" | "termin";
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  preferredSlot: string;
};

function requireEnv(name: string): string | null {
  const value = process.env[name]?.trim();
  return value ? value : null;
}

export function isMailConfigured(): boolean {
  return Boolean(requireEnv("SMTP_HOST"));
}

export async function sendContactMail(payload: ContactPayload): Promise<void> {
  const host = requireEnv("SMTP_HOST");
  if (!host) {
    throw new Error("SMTP_HOST is not configured");
  }

  const port = Number(process.env.SMTP_PORT || "587");
  const secure =
    process.env.SMTP_SECURE === "true" ||
    process.env.SMTP_SECURE === "1" ||
    port === 465;

  const user = requireEnv("SMTP_USER");
  const pass = requireEnv("SMTP_PASS");
  const to = requireEnv("CONTACT_TO") || CONTACT_EMAIL;
  const from =
    requireEnv("SMTP_FROM") ||
    `"${SITE_NAME}" <${FORM_FROM_EMAIL}>`;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: user && pass ? { user, pass } : undefined,
  });

  const kind = payload.mode === "termin" ? "Terminanfrage" : "Kontaktanfrage";
  const subject = `[${SITE_NAME}] ${kind} von ${payload.name}`;

  const lines = [
    `${kind} über it-nws.ch`,
    "",
    `Name: ${payload.name}`,
    payload.company ? `Firma / Verein: ${payload.company}` : null,
    `E-Mail: ${payload.email}`,
    payload.phone ? `Telefon: ${payload.phone}` : null,
    payload.mode === "termin" && payload.preferredSlot
      ? `Bevorzugter Zeitraum: ${payload.preferredSlot}`
      : null,
    "",
    "Nachricht:",
    payload.message,
  ].filter((line): line is string => line !== null);

  await transporter.sendMail({
    from,
    to,
    replyTo: `"${payload.name}" <${payload.email}>`,
    subject,
    text: lines.join("\n"),
  });
}
