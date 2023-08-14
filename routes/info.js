const axios = require("axios").default;
const cheerio = require("cheerio");
const getInfo = require("../cheerio/info");
const { pipe_data } = require("../libs");

async function info(req, res) {
  try {
    const { id } = req.query;

    if (id == undefined) {
      throw Error("please provide id.");
    }
    const result = await axios.get(
      "https://readmangabat.com/read-" + id.toString()
    );
    const parseInfo = cheerio.load(result.data);
    const data = getInfo(parseInfo);
    res.json(data).end();
  } catch (err) {
    res.status(500);
    res.send(err.message);
    res.end();
  }
}

module.exports = info;
