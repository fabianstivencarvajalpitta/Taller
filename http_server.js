const http =require("http");

http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    res-end('hello node.js');
}).listen(8080);