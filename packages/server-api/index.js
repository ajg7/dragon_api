const express = require("express");
const port = process.env.port || 5000;
const app = express();
const dragons = require("./dragons");

app.get("/", (request, response) => {
  response.send(dragons);
});

app.listen(port, (error) => {
  if (error) {
    console.log(`Error: ${error.message}`);
  } else {
    console.log(`Listening on port ${port}`);
  }
});
