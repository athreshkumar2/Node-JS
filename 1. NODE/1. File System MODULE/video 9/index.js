//Asynchronous CRUD Operations using File System(fs)

// Challenge Time
// 1: Create a folder named it Athresh.
// 2: Create a file in it named bio.txt and data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
//      file encoding.
// 5: Rename the file name to mybio.txt.
// 6: now delete both the file and the folder (use fs.unlink).

const fs = require("fs");

//1
// fs.mkdir("Athresh", (err) => {
//   console.log("Folder created");
// });

//2
// fs.writeFile("Athresh/bio.txt", "This is Asynchronous file", (err) => {
//   console.log("file created");
//   console.log(err);
// });

//3
// fs.appendFile("Athresh/bio.txt", "This is more data", (err) => {
//   console.log("Data Appended");
//   console.log(err);
// });

//4
// fs.readFile("Athresh/bio.txt", "utf-8", (err, data) => {
//   console.log(data);
//   console.log("file Read");
//   console.log(err);
// });

//5
// fs.rename("Athresh/bio.txt", "Athresh/mybio.txt", (err) => {
//   console.log("file renamed");
//   console.log(err);
// });
