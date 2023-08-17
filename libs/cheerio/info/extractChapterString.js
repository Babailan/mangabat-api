function extractChapterString(id, url) {
  const prefixLength = `https://readmangabat.com/read-${id}-chap-`.length;
  return url.slice(prefixLength);
}


module.exports = extractChapterString;
