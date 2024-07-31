let http = require('http');
let url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = "2024 July<br>Name: Pawis Kitsanawan<br>Login Date: July 31, 2024";
    res.end(txt);
}).listen(9999);