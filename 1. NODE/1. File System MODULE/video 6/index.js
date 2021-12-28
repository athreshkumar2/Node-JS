//Challenge #1: CRUD Operations using FS Module

// 1. Create a folder named it Athresh
// 2. Create a file in it named bio. txt and data into it.
// 3. Add more data into the file at toe end of the existing data.
// 4. Read the data without getting the buffer data at first.
// 5. Rename the file name to mybio.txt
// 6. Now delete both the file and the folder (use fs.unlinkSync("Athresh/mybio.txt");)

const fs = require("fs");

//1
// fs.mkdirSync("Athresh");

//2
// fs.writeFileSync("Athresh/bio.txt", "My name is Athresh");

//3
// fs.appendFileSync("Athresh/bio.txt", "This is Appended text");

//4
// const read_data = fs.readFileSync("Athresh/bio.txt");
// data = read_data.toString();
// console.log(data);

//5
// fs.renameSync("Athresh/bio.txt", "Athresh/mybio.txt");
