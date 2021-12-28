const fs = require("fs");

//Creating new file using fs module
fs.writeFileSync("read.txt", "Hello this will create and write this matter");

//Appending the file
fs.appendFileSync("read.txt", "This is the append text");

//Reading the file
const buff_data = fs.readFileSync("read.txt");
org_data = buff_data.toString();
console.log(org_data);

//Rename the file
fs.renameSync("read.txt", "newRead.txt");
