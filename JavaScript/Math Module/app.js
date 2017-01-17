const math = require("./mathlib");
let a = 1, b = 35;
console.log(math);
console.log(`Sum of ${a} and ${b} is: ${math.add(a, b)}`);
console.log(`Product of ${a} and ${b} is: ${math.multiply(a, b)}`);
console.log(`Square of ${a} is: ${math.square(a, b)}`);
console.log(`Random number between ${a} and ${b} is: ${math.random(a, b)}`);
