const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mult = (a, b) => {
  return a * b;
};

module.exports.addition = add;
module.exports.subtraction = sub;
module.exports.multiplication = mult;

//Method 2 of calling passing function
//  module.exports = { add, sub , mult };
