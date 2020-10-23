const express = require("express");

const app = express();

var path = require("path");

app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
