// Get all available category for manga
import { NextResponse } from "next/server";
import { load } from "cheerio";

export async function GET(req: Request) {
  try {
    const data = await fetch(`${process.env.manga_url}/mangabat`);
    const textHtml = await data.text();
    const htmlData = load(textHtml);
    const query = htmlData("p.pn-category-row > a");
    const category = {};
    query.each((v, e) => {
      const title = e.attribs.title;
      if (title != undefined) {
        const href = e.attribs.href.split("-");
        const value = href[href.length - 1];
        category[title.toLowerCase()] = value;
      }
    });
    return NextResponse.json(category);
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
