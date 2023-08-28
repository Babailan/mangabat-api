import { load } from "cheerio";
import { NextResponse } from "next/server";
import qs from "querystring";
import { SearchItems } from "./_types/SearchItem";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q");
    if (!q) {
      throw new Error("Please provide the 'q' parameter for the search.");
    }

    const data = qs.stringify({
      searchword: q, // Prepare data for the search query
    });

    const getData = await fetch(`${process.env.manga_url}/getstorysearchjson`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Referer: process.env.manga_url,
      },
      body: data,
    });

    if (!getData.ok) {
      throw new Error("Failed to fetch data from the server.");
    }

    const jsonData = (await getData.json()) as { searchlist: SearchItems[] };
    const cleanedData = jsonData.searchlist.map((item) => ({
      ...item,
      name: load(item.name).text(),
    }));

    return NextResponse.json(cleanedData);
  } catch (err) {
    // Handle errors and return an error response
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
