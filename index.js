const express = require("express");
const chapter = require("./routes/chapter");
const app = express();

(() => {
  // routes
  const info = require("./routes/info");

  app.get("/info", info);
  app.get("/chapter", chapter);
  app.listen(3000);
})();
