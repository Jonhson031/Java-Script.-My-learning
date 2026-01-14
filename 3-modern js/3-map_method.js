let numbers = [1, 2, 4, 8];
let numberDoubled = numbers.map(function (num) {
    return num * 2;
})
let numberThripled = numbers.map(function (num) {
    return num * 3;
})
console.log(numberDoubled);
console.log(numberThripled);
// map() is used to transform arrays — it takes an array, applies a function to each item, and gives you back a new array. 
let users = [
    { name: 'Curt', age: 19 },
    { name: 'John', age: 35 },
    { name: 'Ned', age: 54 },
]
let names = users.map(function (user) {
    return `${user.name} is ${user.age} years old`
})
console.log(names);

const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' },
{ first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];
const firstNames = fullNames.map(fullNames => fullNames.first);
const lastNmaes = fullNames.map(fullNames => fullNames.last);
const [name1, name2] = fullNames;
console.log(firstNames);
console.log(lastNmaes);
console.log(name1, name2);

const movies = [
    {
        title: "Amadeus",
        score: 99,
    },
    {
        title: "Stand By Me",
        score: 85,
    },
    {
        title: "Parasite",
        score: 93,
    },
    {
        title: "Alien",
        score: 87,
    },

]
const newMovies = movies.map(function (movie) {
    return console.log(`${movie.title} - ${movie.score / 10}`);
})
// Writing with arrow function
const movies2 = movies.map(movie =>
    `${movie.title} - ${movie.score / 10}`
)