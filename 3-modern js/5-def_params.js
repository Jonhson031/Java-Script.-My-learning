'use strict';
// Default Parametrs

// function rollDie(numSides){
//     if (numSides === undefined){
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }
function rollDie(numSides = 6) { // We can set default parametrs in case user doesn't put in any argument
    return Math.floor(Math.random() * numSides) + 1;
}
const greet = function (person, message = "Hiii") { // you can't put parameters infront, always put in back
    return (`${message} ${person}!`);
}



// Spread operator
const numbers = [77, 83, 76, 90, 95, 98, 93, 100, 60, 78];
console.log(Math.min(numbers)); // - NaN, when trying to find min number without Spread operator
console.log(Math.min(...numbers));

// Spread operator split every individual charachter
console.log(..."Hello");

// Spread arrays
const cats = ["Tom", "Jerry", "Luis"];
const dogs = ["Nika", "Bim", "Ponchik"];
const allPets = [...cats, ...dogs];
console.log(...allPets);

// Spread objects
const myDog = {
    name: 'Nika',
    legs: 4,
    color: 'black',
    age: 8,
}
const myCat = {
    name: 'Tom',
    legs: 4,
    color: 'grey',
    age: 3,
}
const myPets = { ...myCat, ...myDog }; // When spearding objects, it just copy from one to another
console.log(myPets);

const user = {
    name: 'Josh',
    age: 23,
    sex: 'Make',
}
const newUser = { ...user, id: 2365, admin: false, }; // We can add new info using Spread
console.log(newUser);


// Rest
// Rest looks like spread but diffrent
const sum = function () {
    console.log(arguments); // argumets - saves arguments in array
}
// arguments - looks and acts like array, but we can't use it as an array
sum(numbers);

const sum2 = function (...num) {
    return num.reduce((total, num) => num + total)
}
console.log(sum2(1, 5, 5, 52, 78));

// Rest parameter allows to collect multiple arguments into a single array. 
// It’s useful when you don’t know how many arguments will be passed to a function.

const movies = [
    {
        title: "Amadeus",
        score: 99,
        year: 1996,
    },
    {
        title: "Stand By Me",
        score: 85,
        year: 2016,
    },
    {
        title: "Parasite",
        score: 93,
        year: 1999,
    },
    {
        title: "Alien",
        score: 87,
        year: 2000,
    },
    {
        title: "Avengers",
        score: 85,
        year: 2012,
    },
    {
        title: "Sinners",
        score: 51,
        year: 2025,
    },
    {
        title: "Marvels",
        score: 46,
        year: 2024,
    }
]
const newMovies = [...movies, { title: "Avengers: Endgame", score: 88, year: 2019 }];

function sumTwo(...numbers) {
    return numbers.reduce((a, b) => a + b);
}

console.log(sumTwo(1, 2, 3, 4)); // 10
