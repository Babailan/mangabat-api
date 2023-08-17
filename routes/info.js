const axios = require("axios").default;
const cheerio = require("cheerio");
const getInfo = require("../libs/cheerio/info");

async function info(req, res) {
  try {
    const { id } = req.query;

    // Check if the 'id' query parameter is provided
    if (id == undefined) {
      throw new Error("Please provide an ID.");
    }

    // Fetch the manga page using Axios
    const result = await axios.get(
      "https://readmangabat.com/read-" + id.toString()
    );

    // Load the fetched page content with Cheerio
    const parseInfo = cheerio.load(result.data);

    // Extract manga information using the 'getInfo' function
    const data = getInfo(parseInfo, id);

    // Send the extracted manga information as JSON response
    res.json(data).end();
  } catch (err) {
    // Handle errors and send an appropriate response
    res.status(500).send(err.message);
  }
}

module.exports = info;
