function extractChapterString(url: string) {
  const urlObject = new URL(url);
  const pathnameSegments = urlObject.pathname.split("-");
  return pathnameSegments[pathnameSegments.length - 1];
}

export default extractChapterString;
