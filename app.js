const http = require('http');
const hostname = 'localhost';
const port = 8080;
const server = http.createServer((req, res) => {
 console.log(req.headers);
 res.statusCode = 200;
 res.end('<h1>Hello World from Node.js</h1>\n');
})
; server.listen(port, 'localhost');
server.listen(port, '0.0.0.0');
