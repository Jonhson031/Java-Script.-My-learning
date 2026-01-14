// Strings is basically text, we must write it inside the quotes "" or ''
let text1 = "User Name";
let text2 = 'User Age';

// we can access each letter in the string
text1[0] // we access to letter U

// We can also check the length of the string. it counts all characters, doesn't count 0
text1.length // the length is 9 

// We can also add strings together
let userInfo = text1 + text2 // result is "User NameUser Age"



// There are a lot of diffrent methods
thing.method() // this a syntance
text1.toUpperCase() // all letters in this string will become capitalized
// We can also combine methods:
text1.toUpperCase().trim()

text1.indexOf('f') // will find which index has this letter. If not will display -1 
// Also checks if the latter is capitalized or not!

// there also slice and replace method:
const word = "skateboard"; 
let facialHair = word.slice(5, 11).replace("o", "e")  // slice method takes letter between chosen index and replace method just replacing letters



// Template Literals !!!
// For this we need to use back-ticks characters, located just above the tab `
let dollars = `you have $${5 + 3} ` // output: 'you have $8 ' 

//  We can also access MATH objects
Math.PI // this will return PI value of 3.14....
Math.floor(12.99) // = 12, this method just clear everything after dot, always round down!
Math.ceil(12.01) // = 13, always round up!
Math.random() // gives random number between 0 and 1!
Math.floor(Math.random() * 10) + 1;

const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`
console.log(roll)


// To capitalize first letter of string
// string.slice(startingIndex, endingIndex);
const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalize("fvfv"))

