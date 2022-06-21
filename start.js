var http = require('http');

console.log( "hello rajat" );

 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end('Hello World!  rajat');
 }).listen(8080);