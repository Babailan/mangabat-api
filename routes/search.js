const axios = require("axios").default;
const qs = require("querystring");

async function search(req, res) {
  try {
    const { q } = req.query;

    if (q === undefined) {
      throw new Error("Please provide the 'q' parameter for the search.");
    }

    const data = qs.stringify({
      searchword: q, // Prepare data for the search query
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://h.mangabat.com/getstorysearchjson",
      headers: {
        Referer: "https://h.mangabat.com/",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    const result = (await axios(config)).data; // Make POST request for search

    res.json(result.searchlist); // Send search results as JSON
  } catch (err) {
    res.status(500).send(err.message); // Handle errors with a 500 response
  }
}

module.exports = search;
