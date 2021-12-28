//OS Module To Get Operating System Info

const os = require("os");

console.log(os.arch());
console.log(os.type());
console.log(os.platform());
console.log(os.hostname());

// Tells Available free space in ram.
const freeman = os.freemem();
console.log(`${freeman / 1024 / 1024 / 1024}`);

// Tells Available Total Memory in ram.
const totalmem = os.totalmem();
console.log(`${totalmem / 1024 / 1024 / 1024}`);
