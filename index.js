let num1 = 31;
let num2 = 2;
let multiply = num1 * num2;

console.log(multiply); // Output: 62

let random = Math.floor(Math.random() * 100) + 1;

let num3 = 14;
let num4 = 10;
let mod = num3 % num4;

console.log(mod); // Output: 4

let numbers = [10, 5, 20, 15]; 
let max = Math.max(...numbers);
expect(max).to.equal(20);
