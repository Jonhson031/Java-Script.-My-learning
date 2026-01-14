"use strict";

function myName(){
    console.log("My name is Maksym");
}

// calling / running / invoking function
myName();


// parameters are like variables, we call them inside the () of function!
function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice; // return is returning value, so we can later use this juice later in the code;
}
fruitProcessor(5, 0);
const appleJuice  = fruitProcessor(5, 0); // to use juice, we need put our function in new variable!
console.log(appleJuice);
console.log(fruitProcessor(5,0));
const appleOrangeJuice = fruitProcessor(2, 3);
console.log(appleOrangeJuice);

/////////////////// 
// Function Declarations vs. Expressions

// Function Declaration
function calcAge1(birthYear){
    return 2025 - birthYear;
}
const age1 = calcAge1(2006);
console.log(age1);

// Function Expression
const calcAge2 = function(birthYear){
    return 2025 - birthYear;
}
const age2 = calcAge2(2008);

console.log(age1, age2);

////////////////////
// Arrow Functions
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(2004);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} you have ${retirement} years left until retirement.`
}
const retirementYears = yearsUntilRetirement(2006, "Maksym");
console.log(retirementYears);

/////////////////
// Functions Calling Other Functions
function fruitCutter(fruit){
    return fruit * 4;
}
function fruitProcessor1(apples, oranges){
    const applePieces = fruitCutter(apples); // apples replaces fruit parameter in function!!
    const orangePieces = fruitCutter(oranges);

    const juice = `Juice with ${applePieces} apple's pieces and ${orangePieces} orange's pieces`;
    return juice; 
}
console.log(fruitProcessor1(2, 4))

///////// 
const calcAverage = (score1, score2, score3) => {
    const averageScore = (score1 + score2 + score3) / 3
    return averageScore;
}
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreKoalas);
console.log(scoreDolphins);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else{
        console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`)
    }
}
checkWinner(scoreDolphins, scoreKoalas);
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);


// Return last element of an array
function lastElement(arr) {
    if (arr.length === 0) {
      return null;
    } else {
      return arr[arr.length - 1];
    }
  }
  console.log(lastElement([1, 2, 3]));


// To calculate all numbers from an array
const sumArray = function(array){
    let sum = 0;
    for (let i = 0; i < array.length ; i++){
        sum += array[i]
    }
    return sum;
}
console.log(sumArray([1, 5, 6, 5]));
