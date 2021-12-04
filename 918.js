// import http and url
var http = require("http");
var url = require("url");

// simple http get request
// host is get from query params as target
http
  .createServer(function (req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var target = query.target;
    var options = {
      host: target,
      port: 80,
      path: "/",
    };
    http
      .get(options, function (response) {
        res.writeHead(200, { "Content-Type": "text/html" });
        response.on("data", function (chunk) {
          res.write(chunk);
        });
        response.on("end", function () {
          res.end();
        });
      })
      .on("error", function (e) {
        console.log("Got error: " + e.message);
      });
  })
  .listen(918);
