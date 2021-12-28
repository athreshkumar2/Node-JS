
const path = require("path");
const express = require("express");
const app = express();

const staticPath = path.join(__dirname, "../public");

//builtin middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/Contact", (req, res) => {
  res.send("This is Contact Page");
});
// Serving JSON (express send() function converts it into JSON and serves in the server)
app.get("/temp", (req, res) => {
  res.send({
    // We can also use res.json()
    id: 1,
    name: "Athresh",
    age: "20",
  });
});
app.get("/About", (req, res) => {
  res.status(200).send("This is About Us page");
});

app.listen(8000, () => {
  console.log("Listening the port at 8000");
});
