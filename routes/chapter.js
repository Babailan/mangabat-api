const { default: axios } = require("axios");

async function chapter(req, res) {
  try {
    const result = await axios.get(
      "https://readmangabat.com/read-ye359223-chap-90.5"
    );
    res.send(result.data);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
}

module.exports = chapter;
