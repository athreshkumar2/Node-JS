//Asynchronous File System

// we pass them a function as an argument — a callback —
// that gets called when that task completes.
// The callback has an argument that tells you whether
// the operation completed successfully.
// Now we need to say what to do when fs.writeFile
// has completed (even if it's nothing), and start
// checking for errors.

const fs = require("fs");

fs.writeFile("new.txt", "This is Asynchronous file system", (err) => {
  console.log("File is Created");
  console.log(err);
});
