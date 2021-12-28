const path = require("path");

console.log(
  path.dirname("C:/Users/athre/Desktop/NodeJS/3. Path MODULE/video 11/index.js")
);
console.log(
  path.extname("C:/Users/athre/Desktop/NodeJS/3. Path MODULE/video 11/index.js")
);
console.log(
  path.basename(
    "C:/Users/athre/Desktop/NodeJS/3. Path MODULE/video 11/index.js"
  )
);

const myPath = path.parse(
  "C:/Users/athre/Desktop/NodeJS/3. Path MODULE/video 11/index.js"
);
console.log(myPath.name);
console.log(myPath.root);
