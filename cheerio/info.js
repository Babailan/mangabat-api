const cheerio = require("cheerio");

function getInfo(cheerio_data) {
  // src = image source url
  const src = cheerio_data(
    "body > div.body-site > div.container.container-main > div.container-main-left > div.panel-story-info > div.story-info-left > span.info-image > img"
  ).attr().src;
  // lengthofchapters = it's a number of how many chapters are there
  let lengthofchapters = cheerio_data(
    "body > div.body-site > div.container.container-main > div.container-main-left > div.panel-story-chapter-list > ul"
  ).children();

  console.log(lengthofchapters);
  return { src };
}

module.exports = getInfo;
