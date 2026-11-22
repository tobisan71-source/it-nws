import { NextRequest, NextResponse } from "next/server";
import { isMailConfigured, sendContactMail } from "@/lib/mail";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD = 500;
const MAX_MESSAGE = 5000;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;

type Body = {
  mode?: unknown;
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  preferredSlot?: unknown;
  /** Honeypot — must stay empty */
  website?: unknown;
};

function asString(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function clientKey(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Ungültige Anfrage." },
      { status: 400 },
    );
  }

  // Honeypot: bots fill hidden fields — pretend success, do not mail.
  if (asString(body.website, MAX_FIELD)) {
    return NextResponse.json({ ok: true });
  }

  const rate = checkRateLimit(
    `contact:${clientKey(req)}`,
    RATE_LIMIT,
    RATE_WINDOW_MS,
  );
  if (!rate.ok) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Zu viele Anfragen. Bitte in einigen Minuten erneut versuchen oder direkt per E-Mail schreiben.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(rate.retryAfterSec) },
      },
    );
  }

  const mode = asString(body.mode, 20);
  if (mode !== "kontakt" && mode !== "termin") {
    return NextResponse.json(
      { ok: false, error: "Ungültige Anfrageart." },
      { status: 400 },
    );
  }

  const name = asString(body.name, MAX_FIELD);
  const company = asString(body.company, MAX_FIELD);
  const email = asString(body.email, MAX_FIELD);
  const phone = asString(body.phone, MAX_FIELD);
  const message = asString(body.message, MAX_MESSAGE);
  const preferredSlot = asString(body.preferredSlot, MAX_FIELD);

  if (!name) {
    return NextResponse.json(
      { ok: false, error: "Bitte Namen angeben." },
      { status: 400 },
    );
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Bitte gültige E-Mail angeben." },
      { status: 400 },
    );
  }
  if (!message) {
    return NextResponse.json(
      {
        ok: false,
        error:
          mode === "termin"
            ? "Kurz beschreiben, worum es beim Termin gehen soll."
            : "Bitte Nachricht eingeben.",
      },
      { status: 400 },
    );
  }
  if (mode === "termin" && !phone) {
    return NextResponse.json(
      { ok: false, error: "Für Termine bitte Telefonnummer angeben." },
      { status: 400 },
    );
  }

  if (!isMailConfigured()) {
    console.error("Contact form: SMTP_HOST missing");
    return NextResponse.json(
      {
        ok: false,
        error:
          "E-Mail-Versand ist auf dem Server noch nicht konfiguriert. Bitte schreiben Sie direkt an info@it-nws.ch.",
      },
      { status: 503 },
    );
  }

  try {
    await sendContactMail({
      mode,
      name,
      company,
      email,
      phone,
      message,
      preferredSlot,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form mail failed:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder schreiben Sie direkt an info@it-nws.ch.",
      },
      { status: 502 },
    );
  }
}
