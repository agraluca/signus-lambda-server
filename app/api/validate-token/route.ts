import { NextRequest, NextResponse } from "next/server";

const VALID_TOKEN = process.env.VALID_TOKEN;

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    if (token === VALID_TOKEN) {
      return NextResponse.json({ valid: true });
    } else {
      return NextResponse.json({ valid: false });
    }
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
