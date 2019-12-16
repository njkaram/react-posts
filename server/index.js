var Express = require("express");
var BodyParser = require("body-parser");
var requestify = require("requestify");

var app = Express();

app.use(BodyParser.json({ limit: "4mb" }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/getPosts", (req, res) => {
  requestify
    .get("http://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
      res.send(response.body);
    });
});

app.listen(3070, () => {
  console.log("Listening to port 3070 ...");
});
