import { NextRequest, NextResponse } from "next/server";

const MAX_MESSAGE_LENGTH = 2000;

type ContactRequestBody = {
  message?: unknown;
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

  const message = typeof body.message === "string" ? body.message.trim() : "";

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

  let insertResponse: Response;

  try {
    insertResponse = await fetch(`${supabaseUrl}/rest/v1/messages`, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ message }),
    });
  } catch {
    return jsonResponse(500, {
      ok: false,
      error: "Failed to save message.",
    });
  }

  if (!insertResponse.ok) {
    return jsonResponse(500, {
      ok: false,
      error: "Failed to save message.",
    });
  }

  return jsonResponse(200, { ok: true });
}
