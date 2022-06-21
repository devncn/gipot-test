var http = require('http');

console.log( "hello rajat" );

console.log( "hello rajat this is for pull request" );

console.log( "hello rajat this is for pull request rakesh sir" );

 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end('Hello World!  rakesh sir ');
 }).listen(8080);