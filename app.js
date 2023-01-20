const http = require('http');
const hostname = 'localhost';
const port = 8080;
const server = http.createServer((req, res) => {
 console.log(req.headers);
 res.statusCode = 200;
 res.end('<html><body><h1>Hello World from Node.js</h1></body></html>');
})
server.listen(port, hostname);
