'use strict';

// for loop
for (let rep = 1; rep <= 10; rep++) { // for loop keeps running while condition is true
    // console.log(`Lifting weights, rep: ${rep}`);
}

// Loop through Arrays
const jonasArray = [
    'Jonas',
    "Smith",
    2025 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
]
for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof (jonasArray[i]));
}


const years = [2012, 2006, 1991, 1994];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2025 - years[i]);
}
console.log(ages);


// continue and break
console.log("----Only String----")
// continue is skip to next element
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== "string") continue; // if element of this array is not string skip to next string!!!

    console.log(jonasArray[i], typeof (jonasArray[i]));
}

console.log("----Break with number---")
// break is stops loop
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === "number") break; // stops when see number element!!!

    console.log(jonasArray[i], typeof (jonasArray[i]));
}



// Backwards looping
console.log("---Backwards looping---");
for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i]);
}
// Loops in Loops
console.log("---Loops in Loops---");
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---Starting Exercise ${exercise}`);

    for (let rep = 0; rep < 9; rep++) {
        console.log(`Lifting weight, rep ${rep}`)
    }
    if (exercise >= 3) {
        console.log(`Good workout, you done ${exercise} sets of exercises!!!`)
    }
}


// While loops
console.log("While loops")
let rep = 0;
while (rep < 9) {
    console.log(`Lifting weight, rep ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(dice);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log("You rolled 6");
    }
}


// For..of loop
console.log("For..off loop");
// for (variable of iterable){
//     statement
// }
for (let sub of jonasArray){
    console.log(sub);
}




///// Practice

console.log("---Practice---");

// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0
for (let i = 25; i >= 0; i = i - 5) {
    console.log(i);
}
////////////
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase())
}



/////////////////// Tip calculator
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}
console.log(tips);
console.log(totals);


// To calculate all numbers from an array
const sumArray = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum;
}
console.log(sumArray([1, 5, 6, 5]));
