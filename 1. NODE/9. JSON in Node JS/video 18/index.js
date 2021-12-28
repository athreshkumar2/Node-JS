// JSON(JavaScript Object Notation)
//      JSON.stringify (To convert from object to JSON)
//      JSON.parse (To convert from JSON to object)

const biodata = {
  name: "Athresh",
  age: 21,
  college: "SRM",
};

const jsondata = JSON.stringify(biodata); //Converts to JSON from object
console.log(jsondata); // Prints JSON {"name":"Athresh","age":21,"college":"SRM"}

const objdata = JSON.parse(jsondata); //Converts to Object from JSON
console.log(objdata.name); // Prints as object (Athresh)
console.log(objdata.age); //21

// Challenge
//1: Convert to JSON
//2: Dusre file me add krdena
//3: readFile
//4: again convert back to js obj
//5: console.log

const fs = require("fs");
const resume = {
  name: "Athresh Kumar",
  age: 21,
  school: "kv2",
};

//1
const jsonData = JSON.stringify(resume);
//2
fs.writeFile("json1.json", jsonData, (err) => {
  console.log("Done");
});

//3,4,5
fs.readFile("json1.json", "utf-8", (err, data) => {
  const orgData = JSON.parse(data);
  console.log(data);
  console.log(orgData);
});
