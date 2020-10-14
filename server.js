const http = require('http');
const driver = require('./driver');

const port = process.env.PORT || 3000;

const server = http.createServer(driver);

server.listen(port)