
const http = require("http");
const datetime = require("./date.js");
let date = "La hora en colombia: " + datetime.myDateTime();
http.createServer(function(req, res) {
    res.writeHead(200,{'content-type': 'text/html'});
    res.write(date);
    res.end();
}).listen(8080);