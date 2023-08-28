const express = require("express");
const app = express();

// Importing routes
const info = require("./routes/info");
const chapter = require("./routes/chapter");
const search = require("./routes/search");

// Defining routes and setting up the server
(() => {
  // Setting up the '/info' route
  app.get("/info", info);

  // Setting up the '/chapter' route
  app.get("/chapter", chapter);

  // Setting up the '/search' route
  app.get("/search", search);

  const port = 3000;
  app.listen(port, () => {
    console.log("Server is running on port: " + port);
  });
})();
