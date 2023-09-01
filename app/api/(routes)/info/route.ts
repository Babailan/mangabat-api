import { NextResponse } from "next/server";
import { load } from "cheerio";
import getInfo from "./_libs/getinfo";
import { getUrlByServerID } from "utils/hostname";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const server = searchParams.get("server");

    if (!id) {
      throw new Error("Please provide the 'id' parameter for the info.");
    }

    if (!server) {
      throw new Error(
        "Please provide the 'server' parameter for the hosting domain."
      );
    }

    const mangaUrl = `${getUrlByServerID(server)}/read-${id}`;
    const result = await fetch(mangaUrl);
    const pageContent = await result.text();
    const parseInfo = load(pageContent);
    const info = getInfo(parseInfo);

    return NextResponse.json({
      id,
      server: parseInt(server),
      ...info,
    });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An error occurred.";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
