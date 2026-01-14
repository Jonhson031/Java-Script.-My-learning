// ARRAYS is ordered collection of values. 

// to make an empty array:
let students = [];

// An array of strings:
let colors = ['red', 'green', 'blue'];

// An array of numbers: 
let numbers = [-5, 0, 10, 25];

// A mixed array:
let mixedArray = [0, "John", null, true ]

console.log(colors[0]) // access to red

colors[3] = "yellow"; // add or change something in array
console.log(colors)


// Arrays methods
// Push - add to end
// Pop - remove from end
// Shift - remove from start
// Unshift - add to start
colors.push("purple", "black") // adds two colors to the end of array
console.log(colors)
colors.pop() // removes one color from the end
console.log(colors)

colors.shift() // removes one color from the start
console.log(colors) 
colors.unshift("white", "pink") // adds colors to the start
console.log(colors)

///////////
const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; 
planets.shift();
planets.push("Saturn")
planets.unshift("Mercury")
console.log(planets)
//////////////

// More arrays methods
// concat - merge arrays
// includes - look for a value
// indexOf - the same as for string
// join - creates the string from an array
// reverse - reverse the array
// slice - copies a portion of an array
// splice - removes/replaces elements
// sort - sorts an array
console.log(numbers)
console.log(numbers.reverse()) // reversed 

const colorsAndNumbers = colors.concat(numbers)
console.log(colorsAndNumbers) // combined two arrays together

console.log(colors.includes("red")) // search if we have this color in array, if we do - true, if don't -false
console.log(colors.indexOf('white')) // the same as sting, if can't find the value, shows -1;


// SLICE 
// string.slice(startingIndex, endingIndex);

let coolColors = colors.slice(2) // it cuts first two colors 
console.log(coolColors)
coolColors = colors.slice(1, 3) // takes colors between indexes
console.log(coolColors)
console.log(colors.slice(-2)); // negative numbers shows only last colors

// To capitalize first letter of string
const capitalize = (str) => {
    let capitalLetter = str[0].toUpperCase() + str.slice(1);
    return capitalLetter;
}
console.log(capitalize("fvfv"))

// SPLICE
console.log(numbers)
numbers.splice(0, 0, 3)   // (starting point, how much to Delete, insertedItem)
console.log(numbers)
numbers.splice(1, 2, -11134, 233, "number") // we can also add multiply items!
console.log(numbers)


// Nested Arrays
// We can store arrays inside the arrays
const bigList = [
    ["Maksym, Solomiia"],
    ["Anastasiia, Yuliana"],
    ["Svitlana, Vitalii"],
]
console.log(bigList[0]);
bigList.push(["Nataliia", "Yevhen"]);
console.log(bigList[3]);

//////////////
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];
// Replace null with "Hugo"

airplaneSeats[3].splice(1, 1, "Hugo")
console.log(airplaneSeats)


// Return last element of an array
function lastElement(arr) {
    if (arr.length === 0) {
      return null;
    } else {
      return arr[arr.length - 1];
    }
  }
  console.log(lastElement([1, 2, 3]));