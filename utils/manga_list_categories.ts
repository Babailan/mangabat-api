import { load } from "cheerio";
import { split_first, split_last } from "./split";

export default function manga_list_categories(html_data: string) {
  const $ = load(html_data);
  const items = $("div.panel-list-story > .list-story-item");
  return items
    .map((i, e) => {
      const $element = $(e);
      // Extract information using selectors within this div
      const itemimage = $element.find("a.item-img")[0].attribs.href;
      console.log(itemimage);
      const lastestchapters = $element
        .find(".item-chapter")
        .map((index, el) => split_last($(el).attr("href"), "-"))
        .get();
      const author = $element.find(".item-author").text();
      const updatetime = $element.find(".item-time").eq(0).text();
      const viewcount = $element.find(".item-time").eq(1).text();
      return {
        // itemtitle,
        lastestchapters,
        author,
        updatetime: split_first(updatetime, ":"),
        viewcount: split_first(viewcount, ":"),
      };
    })
    .toArray();
}
