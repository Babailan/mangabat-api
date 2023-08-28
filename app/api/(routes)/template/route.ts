// This is a template for making a new route.

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    return NextResponse.json({ name: "ronnel" });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
