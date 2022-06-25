var express = require("express");
var cookieParser = require("cookie-parser");
var path = require("path");
var app = express();
app.use(cookieParser());

app.get("/", function (req, res) {
  res.send("Hello, Server!");
});

app.get("/data", function (req, res) {
  let numberStr = req.query.number;
  if (!numberStr) {
    res.end("Lack of Parameter");
  } else {
    let number = Number(numberStr);
    if (!Number.isInteger(number) || number < 0) {
      res.end("Wrong Parameter");
    } else {
      res.end(String(sum(number)));
    }
  }
});

app.get("/myName", function (req, res) {
  let name = req.cookies.userName;

  if (!name) {
    res.sendFile(path.join(__dirname + "/name.html"));
  } else {
    res.end(name);
  }
});

app.get("/trackName", function (req, res) {
  let name = req.query.name;
  res.cookie("userName", name);
  res.redirect("/myName");
});

app.use(express.static("Week-3"));

app.listen(3000, () => {
  console.log("server.js web server at port 3000 is running.");
});

function sum(number) {
  ((1 + number) * number) / 2;
  return ((1 + number) * number) / 2;
}
