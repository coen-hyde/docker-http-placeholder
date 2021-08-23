'use strict'

const http = require('http');

const host = process.env.PLACEHOLDER_HOST_BIND || '0.0.0.0';
const port = process.env.PLACEHOLDER_PORT_BIND || 3000;
const responseCode = process.env.PLACEHOLDER_RESPONSE_CODE || 200;
const msg = process.env.PLACEHOLDER_MSG || "Dr. Crane isn't here right now, but if you'd like to make an appointment..."

const server = http.createServer((req, res) => {
  res.statusCode = responseCode;
  res.setHeader('Content-Type', 'text/plain');
  res.end(msg);
});

server.listen(port, host, () => {
  console.log('HTTP server running on %s', port);
});