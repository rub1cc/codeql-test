// create http server
// readFileSync from path from query params path


var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var path = url.parse(req.url).query;
    var content = fs.readFileSync(path);
    res.end(content);
}).listen(8080);