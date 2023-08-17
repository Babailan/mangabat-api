// Interface defining the structure of each data object representing a search result
interface Data {
    id: string;
    url_story: string;
    name: string;
    nameunsigned: string;
    lastchapter: string;
    image: string;
    author: string;
  }
  
  // Type definition for an array of search results
  type SearchResults = Data[];
  