const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./build"));

app.get("/*", function (request, response) {
  response.sendFile(path.join(__dirname, "/build/index.html"));
});

app.listen(process.env.PORT || 8080);
