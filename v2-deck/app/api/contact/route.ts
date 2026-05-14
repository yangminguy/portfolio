import { NextRequest, NextResponse } from "next/server";

const MAX_MESSAGE_LENGTH = 2000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactRequestBody = {
  email?: unknown;
  message?: unknown;
  website?: unknown;
  honeypot?: unknown;
};

function jsonResponse(status: number, body: { ok: boolean; error?: string }) {
  return NextResponse.json(body, { status });
}

function getEnv() {
  return {
    supabaseUrl: process.env.SUPABASE_URL,
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  };
}

export async function POST(request: NextRequest) {
  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return jsonResponse(400, { ok: false, error: "Invalid JSON body." });
  }

  const honeypot = body.website ?? body.honeypot;
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return jsonResponse(200, { ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!email) {
    return jsonResponse(400, { ok: false, error: "Email is required." });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return jsonResponse(400, { ok: false, error: "Email format is invalid." });
  }

  if (!message) {
    return jsonResponse(400, { ok: false, error: "Message is required." });
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return jsonResponse(400, {
      ok: false,
      error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`,
    });
  }

  const { supabaseUrl, serviceRoleKey } = getEnv();

  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse(500, {
      ok: false,
      error: "Supabase environment variables are not configured.",
    });
  }

  // TODO: Add a lightweight IP-based rate limiter here before insert.
  // A deploy-safe option is a small Redis/Vercel KV counter keyed by IP + time window.
  // const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  let insertResponse: Response;

  try {
    insertResponse = await fetch(`${supabaseUrl}/rest/v1/contacts`, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email, message }),
    });
  } catch {
    return jsonResponse(500, {
      ok: false,
      error: "Failed to save contact message.",
    });
  }

  if (!insertResponse.ok) {
    return jsonResponse(500, {
      ok: false,
      error: "Failed to save contact message.",
    });
  }

  return jsonResponse(200, { ok: true });
}
