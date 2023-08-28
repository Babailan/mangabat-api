import { NextResponse } from "next/server";
import { load } from "cheerio";
import getInfo from "./_libs/getinfo";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      throw new Error("Please provide the 'id' parameter for the info.");
    }
    const result = await fetch(
      `${process.env.manga_url}/read-${id.toString()}`
    );

    const parseInfo = load(await result.text());
    const info = getInfo(parseInfo);
    return NextResponse.json({ ...info, id });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
