var http = require('http');

console.log( "hello rajat" );

console.log( "hello rajat this is for pull request" );

 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end('Hello World!  rajat');
 }).listen(8080);