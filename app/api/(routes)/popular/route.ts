import { NextResponse } from "next/server";
import outputextfile from "utils/output";

export async function GET(req: Request) {
  try {
    // const { text } = await fetch("");
    outputextfile("https://h.mangabat.com/mangabat");
    return NextResponse.json({ name: "ronnel" });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
