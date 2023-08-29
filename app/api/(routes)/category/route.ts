import { NextResponse } from "next/server";
import filter from "./_libs/filter";
import manga_list from "utils/manga_list";

export async function GET(req: Request) {
  try {
    // Extract the 'id' parameter from the URL
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    // Check if 'id' parameter is missing and throw an error if so
    if (!id) {
      throw new Error("Please provide the 'id' parameter for the search.");
    }

    // Construct the manga URL based on the 'id' parameter
    const manga_url = `${process.env.manga_url}/manga-list${
      id ? `-${id}` : "-all"
    }`;

    // Apply filtering based on search parameters
    const filteredURL = filter(manga_url, searchParams);

    const rawHtml = await (await fetch(filteredURL)).text();
    manga_list(rawHtml);
    // Return a JSON response with a sample data
    return NextResponse.json({ name: "ronnel" });
  } catch (err) {
    // Return an error response if an exception occurs
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
