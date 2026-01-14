'use strict';
// Remainder operator

//Modulo sign % (Remainder operater) - how many times we can put number in the number
const number1 = 5 % 2 // result = 1. WE USE THIS IN JAVA SCRIPT TO DERERMINE IF NUMBER IS ODD OR EVEN
console.log(number1);
console.log(6 % 2) // 0 

const isEven = num => num % 2 === 0 ? 'even' : 'odd';
console.log(isEven(2))
console.log(isEven(5))
console.log(isEven(21))
console.log(isEven(22))


// Numeric Separators
// Makes large numbers easier to read by using underscores (_) as visual separators — similar to commas in regular numbers.
let diameter = 28000000000;
diameter = 28_000_000_000 // easier to read
console.log(diameter);

// ❌ Invalid examples:
// let bad1 = _1000;      // error
// let bad2 = 1000_;      // error
// let bad3 = 10_.5;      // error
// let bad4 = 1__000;     // error


// BigInt
// Let's store really big numbers
let big = 123456789012345678901234567890; // JavaScript round big numbers by default and lose accuracy;
console.log(big);
big = 123456789012345678901234567890n; // shows big number as it is
console.log(big)

// Can combine with Numeric Separators
let population = 7_888_123_456n;       // easier to read
let huge = 123_456_789_012_345_678_901n;

// ❌ invalid
// ! let wrong = 9_223_372_036_854_775_807_n; // error (can't end with _)

// You can use some Math operators with BigInt numbers, but can't combine them with regular numbers
console.log(population * huge);
let small = 23;
// ! console.log(24242424242434556466n * small) // error
console.log(huge * BigInt(small)); // ? to use them together, we need to convert small number using BigInt()

// ? Exceptions
console.log(20n > 15);
console.log(20n == 20);
console.log(typeof 20n);
console.log(20n === '20');
console.log(huge + ' is REALLY big!!!');
// Divisions
console.log(11n / 3n);
console.log(10 / 3);



