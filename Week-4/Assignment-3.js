var express = require("express");
var mysql = require("mysql");
var path = require("path");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "assignment",
  port: 3306,
});
connection.connect();

var app = express();
app.use(express.static("Week-4"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/user.html"));
});

app.get("/member", function (req, res) {
  res.send("Hello, member!");
});

app.post("/signup", jsonParser, function (req, res) {
  let email = req.body.email;
  let password = req.body.password;

  if (!email) {
    res.statusCode = 400;
    return res.end("Lack of email");
  }
  if (!password) {
    res.statusCode = 400;
    return res.end("Lack of password");
  }

  // check user registered
  checkUser(email, function (result) {
    if (result.length == 0) {
      // create user
      createUser(email, password);
      return res.end("register success");
    } else {
      res.statusCode = 500;
      return res.end("user registered");
    }
  });
});

app.post("/signin", jsonParser, function (req, res) {
  let email = req.body.email;
  let password = req.body.password;
  if (!email) {
    res.statusCode = 400;
    return res.end("Lack of email");
  }
  if (!password) {
    res.statusCode = 400;
    return res.end("Lack of password");
  }
  // check user registered
  getUser(email, password, function (result) {
    if (result.length == 1) {
      return res.end("login success");
    } else {
      res.statusCode = 400;
      return res.end("email or password is not correct");
    }
  });
});

app.listen(3000, () => {
  console.log("server.js web server at port 3000 is running.");
});

function checkUser(email, callback) {
  connection.query(
    "select * from user where email = ? limit 1",
    [email],
    function (err, row) {
      if (err) {
        console.log(err);
        return;
      }

      return callback(row);
    }
  );

  return;
}

function getUser(email, password, callback) {
  connection.query(
    "select * from user where email = ? and password = ? limit 1",
    [email, password],
    function (err, row) {
      if (err) {
        console.log(err);
      }
      return callback(row);
    }
  );

  return;
}

function createUser(email, password) {
  connection.query(
    "insert into user (email, password) values (?, ?)",
    [email, password],
    function (err) {
      if (err) {
        throw err;
      }
    }
  );

  return;
}
