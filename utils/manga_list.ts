import { load } from "cheerio";

export default function manga_list(html_data: string) {
  const $ = load(html_data);
  const items = $("div.panel-list-story > .list-story-item");
  items.each((i, e) => {
    const $element = $(e);
    // Extract information using selectors within this div
    const itemTitle = $element.find(".item-title").text();
    const chapterLinks = $element
      .find(".item-chapter")
      .map((index, el) => $(el).attr("href"))
      .get();
    const author = $element.find(".item-author").text();
    const updateTime = $element.find(".item-time").eq(0).text();
    const viewCount = $element.find(".item-time").eq(1).text();
  });
}
