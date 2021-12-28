// Chalk Module
import chalk from "chalk";

console.log(chalk.blue.inverse("HEllo workd"));
console.log(chalk.greenBright.underline("Hello world"));

// Validator Module
import validator from "validator";

const res = validator.isEmail("athresh@gmail.com");
console.log(res);
const ress = validator.isEmail("athresh");
console.log(ress);
