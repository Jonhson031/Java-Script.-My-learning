'use strict';
// 1. Converting and Cheking Numbers
console.log(23 === 23.0); // true

// Base 10 
// Are numbers from 0 to 9

// Binary Base 2
// 0 and 1
console.log(0.1 + 0.2); // bugs in IS
console.log(0.1 + 0.2 === 0.3) // false (bug)

// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px'));
console.log(Number.parseFloat('30.5px'));


// isNaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20x')); // true
console.log(Number.isNaN(23 / 0)); // false (infinity)

// isFinite | Opposite of isNaN
// Checks if passed value is real Number
console.log('----isFinite---')
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20x')); // false
console.log(Number.isFinite(23 / 0)); // false (infinity)


// 2. Math and Rounding
console.log('----Moth and Rounding----')
console.log(Math.sqrt(25)) // square root (квадратний корінь) of 25
console.log(25 ** (1 / 2)); // Same as Math.sqrt()

console.log(Math.max(1, 5, 6, 9, 23, 1, 6, 12));
console.log(Math.min(1, 5, 6, 9, 23, 1, 6, 12));

// Random number generator
console.log(' ')
console.log(Math.trunc(Math.random() * 6) + 1);
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomInt(10, 20));
console.log(randomInt(0, 6));


// Rounding
console.log(Math.trunc(23.9)) // 23 // removes any decimal part
console.log(Math.round(23.49)) // 23 // rounds to nearest integer. Basically correct rounding in Math
console.log(Math.round(23.5)) // 25

console.log(Math.ceil(23.1)) // 24 // always rounds up
console.log(Math.ceil(23.9)) // 24

console.log(Math.floor(23.1)) // 23 // always rounds down
console.log(Math.floor('23.9')) // 23

// Main diffrence between floor and trunc is that floor also works with negative numbers
console.log(Math.floor(-5.5)); // -6
console.log(Math.trunc(-5.5)); // -5, removes decimal part


// Rounding Decimals
console.log(' ')
console.log((2.55435353535).toFixed(2)); // returns string

console.log(Number((2.55435353535).toFixed(2))); // returns integer (number)
