const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

posts = [];

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('Hello World\n');
});

server.get((req, res))

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});