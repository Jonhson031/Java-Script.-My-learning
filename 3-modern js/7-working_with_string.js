'use strict';
const airline = 'TAP Air Portugal';
const plane = 'A320';


console.log(plane[1]);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Air')); // case sensetive

console.log(airline.slice(4)); // 4 - begin parameter
console.log(airline.slice(4, 7)); // 4 - begin parameter, 7 - end parameter

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(1, -1)); // negative parameter, starts at the end


const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') {
        console.log('You got the middle seat(((')
    } else {
        console.log('You got lucky');
    }
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


//// 
console.log('------')
console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

const passanger = 'MakSyM';
const passangerToLower = passanger.toLowerCase();
const passangerCorrect = passangerToLower[0].toUpperCase() + passangerToLower.slice(1);
console.log(passangerCorrect);


// Comparing Emails | trim()
const email = 'hello@jonas.io';
let loginEmail = '    Hello@Jonas.IO';
loginEmail = loginEmail.toLowerCase().trim(); // trim() removes white space
console.log(loginEmail);


// Replace
/*
| Method                       | What it does                           |
| ---------------------------- | -------------------------------------- |
| `trim()`                     | Removes whitespace from both ends      |
| `trimStart()` / `trimLeft()` | Removes whitespace only from the start |
| `trimEnd()` / `trimRight()`  | Removes whitespace only from the end   |
*/
const whiteSpaceName = 'Maks       Hello';
console.log(whiteSpaceName.replace(/\s+/g, " "));
/*
/\s+/g meaning:
/ and /	Marks the start and end of a regular expression
\s	Matches any whitespace character (space, tab, newline, etc.)
+	Means “one or more” of the previous thing (\s)
g	Global flag → replace all matches, not just the first one
*/
const priceGB = '288&';
const priceUS = priceGB.replace('&', '$').replace(',', '.');
console.log(priceUS);

const announcment = 'All passangers come to boarding door 23. Boarding door 23';
console.log(announcment.replaceAll('door', 'gate')); // to replace every word, and not only the first one


// Booleans
const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.startsWith('A320'));

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) {
    console.log('Part of the new Airbus family');
}

const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('gun') || baggage.includes('knife')) {
        console.log(`You're not allowed on the plane!`);
    } else {
        console.log('You have a good flight');
    }
}
checkBaggage('I have a laptop, Banana and pocket knife');
checkBaggage('I got some snacks and gun for protection');
checkBaggage('Socks and camera');

// Part 3
// Split
// Divide items, words by something, like space or any characther
console.log('a+very+nice+string'.split('+'));
const myName = 'Maksym Yaremko'; // split by the space
console.log(myName.split(' '));
const [firstName, lastName] = myName.split(' ');
console.log(firstName, lastName);

// Join
// Opposite of split, combine items
const newName = ['Mr', firstName, lastName].join(' ');
console.log(newName);


// Padding string
// Add spaces / charachters into the string
// String padding means adding extra characters (like spaces or zeros) to the start or end of a string until it reaches a desired length.
const message = 'Go to the gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+')); // here 20 and 10 is desired length

// To cover credit card, show only last 4 digits
const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}
console.log(maskCreditCard(35369976743));

// Repeat
// Allows us to repeat the same string multiple times
console.log(message.repeat(5));



// To capitalize first letter of string
// console.log('---To capitalize first letter of string---');
// const capitalize = (str) => {
//     let capitalLetter = str[0].toUpperCase() + str.slice(1);
//     return capitalLetter;
// }
// console.log(capitalize("maksym"))






// Pratice
// convert maks_yaremko into maksYaremko
let myName2 = 'maks_yaremko';
const indexOfName = myName2.indexOf('_') + 1;
const newName2 = myName2[indexOfName].toUpperCase();
console.log(myName2, indexOfName, newName2);
myName2 = myName2.replace(myName2[indexOfName], newName2).replace('_', '');
console.log(myName2);


const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const getCode = str => str.slice(0,3).toUpperCase();
for(const flight1 of flights.split('+')){
    const [type, from, to, time] = flight1.split(';');
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} ${time.replace(':', 'h')}`.padStart(40, ' ');
    console.log(output);
}
