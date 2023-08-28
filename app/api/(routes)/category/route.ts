// Get all available category for manga

import { NextResponse } from "next/server";
import fs from "fs";
import { text } from "stream/consumers";

export async function GET(req: Request) {
  try {
    const data = await fetch(`${process.env.manga_url}/mangabat`);
    fs.writeFileSync("helloworld.html", await data.text());
    return NextResponse.json({ name: "ronnel" });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
