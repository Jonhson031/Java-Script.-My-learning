'use strict';
// Simple Array Methods
// Array Methods is a function that attached to all arrays in Java Script

let arr = ['a', 'b', 'c', 'd', 'e']
console.log(arr);

// 1: Slice method
// We can extract part of an array, but without chaning the original array
console.log(arr.slice(2)); // start array at 2
console.log(arr.slice(2, 4)); // returns array with starting index at 2 and ending at 4
console.log(arr.slice(-1)); // To get last element from an array
console.log(arr.slice(-2)); // To get two last elements from an array
console.log(arr.slice(0, -2));


// 2: Splice method
// Works the same as slice method. But change the original array
console.log('Splice'.padStart(15, '-').padEnd(30, '-'));
const fruits = ['Apple', 'Banana', 'Pineapple', 'Blueberry', 'Starwberry'];
console.log(fruits);
const fruitSpliced = fruits.splice(1, 3) // 1 - starting index, 3 - how elements many to delete
console.log(fruitSpliced);
console.log(fruits);

// 3: Reverse method
// Reverse array
const arr2 = arr.reverse()
console.log(arr2); // reverse also changes an original array
console.log(arr);

// 4: Concat
// Combanies two arrays 
const combinedArray = arr2.reverse().concat(arr);
console.log(combinedArray);
console.log(...arr, ...arr2);

// 5: Join
console.log(combinedArray.join(' - '));

