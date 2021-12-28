// For server it resquests something and returns the response.
// here we will listen the port so that it will request to that port and return response.

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("HELLO ATHRESH KUMAR THIS IS THE RESPONSE I AM GIVING");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to port no 8000");
});
