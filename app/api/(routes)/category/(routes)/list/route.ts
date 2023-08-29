// Import necessary modules
import { NextResponse } from "next/server";
import { load } from "cheerio";

// Handler for the GET request
export async function GET(req: Request) {
  try {
    // Fetch the HTML data from the provided manga URL
    const data = await fetch(`${process.env.manga_url}/mangabat`);
    const textHtml = await data.text();
    const htmlData = load(textHtml);

    // Query the HTML data to get the list of manga categories
    const query = htmlData("p.pn-category-row > a");
    const category = {};

    // Iterate through each category element
    query.each((v, e) => {
      const titleAttrib = e.attribs.title;

      // Check if the title attribute exists
      if (titleAttrib != undefined) {
        // Extract the value from the 'href' attribute
        const href = e.attribs.href.split("-");
        const value = href[href.length - 1];

        // Split the title and remove the last word (usually "Manga")
        const title = titleAttrib.split(" ");
        title.pop();

        // Convert the title to lowercase and use it as a key in the category object
        category[title.join("-").toLowerCase()] = value;
      }
    });

    // Return the extracted manga categories as a JSON response
    return NextResponse.json(category);
  } catch (err) {
    // If an error occurs, return an error message with a 500 status
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
