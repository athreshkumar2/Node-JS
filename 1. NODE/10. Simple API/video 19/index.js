// For server it resquests something and returns the response.
// Here we will listen the port so that it will request to that port and return response.
// Client is requesting multiple pages and we are returning requests by listening at the port.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("HELLO ATHRESH KUMAR THIS IS THE RESPONSE I AM GIVING");
  } else if (req.url == "/about") {
    res.end("This is About US Page");
  } else if (req.url == "/contact") {
    res.end("This is Contact US Page");
  } else if (req.url == "/main") {
    res.end("This is Main Page");
  } else if (req.url == "/APIcall") {
    fs.readFile(`${__dirname}/userAPI.json`, "utf-8", (err, data) => {
      console.log(data);
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 Erroe page. Page Doesn't exist</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to port no 8000");
});
