const extractChapterString = require("./extractChapterString");

function getInfo(cheerio_data, id) {
  // Extract the image source URL
  const img = cheerio_data("span.info-image > img").attr("src");

  // Extract the list of chapter strings
  const chapters = cheerio_data("div.panel-story-chapter-list > ul > li")
    .map((index, element) => extractChapterString(id, cheerio_data(element).find("a").attr("href")))
    .get();

  // Extract the manga title
  const title = cheerio_data("div.story-info-right > h1").text();

  // Remove the first element and extract the text
  cheerio_data("div.panel-story-info-description > h3").remove();
  const summary = cheerio_data("div.panel-story-info-description").text();

  // LeftInfo contains alternative,author,status,genre
  const mangaLeftInfo = cheerio_data("table > tbody .table-value");
  // RightInfo contains updateddate, views
  const mangaRightInfo = cheerio_data("div.story-info-right-extent .stre-value");
  const mangaInfo = {
    alternative: mangaLeftInfo.eq(0).text().split(";"),
    author: mangaLeftInfo.eq(1).text().split("-"),
    status: mangaLeftInfo.eq(2).text().toLowerCase(),
    genre: mangaLeftInfo.eq(3).text().split("-"),
    updatedAt: mangaRightInfo.eq(0).text(),
    view: mangaRightInfo.eq(1).text(),
  };
 

  return { img, chapters, title, summary, ...mangaInfo };
}

module.exports = getInfo;
