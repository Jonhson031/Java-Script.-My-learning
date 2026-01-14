// Set Timeout
// setTimeout(() => {
//     console.log('Hellooo')
// }, 3000)

// Set Interval 
// It's calling function every set time
const id = setInterval(() => {
    console.log(Math.random())
}, 2000)
clearInterval(id);

// Filter 
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
const badMovies = movies.filter(movie => movie.score < 70);
console.log(badMovies);
// const goodMovies = movies.filter(movie => movie.score > 70);
// const goodTitles = goodMovies.map(title => title.title);
const goodMovies = movies.filter(movie => movie.score > 70).map(movie => `${movie.title} - ${movie.score}`);
const badMovies2 = movies.filter(movie => movie.score < 70).map(movie => movie.title);
console.log(goodMovies);
console.log(badMovies2);

// Every and Some
// Boolean methods, returns true or false
const exams = [77, 83, 76, 90, 95, 98, 93, 100, 60, 78];
const exams2 = exams.every(exam => exam >= 70); // returns true if each score is greater 50
console.log(exams2); // false

const exams3 = exams.some(exam => exam >= 70); // returns true if any score is greater than 70
console.log(exams3); // true

movies.some(movie => console.log(movie.year >= 2015));

const allEvens = function (num) {
    return num.every(number => number % 2 === 0)
}
allEvens([2, 4, 6, 8]);

// Reduce
const prices = [3, 5, 7, 9, 11, 25, 0.5, 2];
// let total = 0;
// for (let price of prices){
//     total += price;
// }
// console.log(total);

// To calculate all numbers in array using Reduce function
const total = prices.reduce((total, price) => {
    return total + price
})
console.log(total);

// To find the smallet number in array
const minPrice = prices.reduce((min, price) => {
    if (min > price) {
        return price;
    }
    return min;
})
console.log(minPrice);

// To find highest rated movie
const highestRated = movies.reduce((bestMovie, currentMovie) => {
    if (currentMovie.score > bestMovie.score) {
        return currentMovie;
    }
    return bestMovie;
})
console.log(highestRated);





///////////
const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];
totalVoters = 0;
// for (let i = 0; i < voters.length; i++){
//     if(voters[i].voted === true){
//         console.log(`${voters[i].name} is voted`)
//         totalVoters++;
//     }
    
// }
console.log(totalVoters);
