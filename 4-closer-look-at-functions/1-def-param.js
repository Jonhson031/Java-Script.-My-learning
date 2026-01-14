`use strict`;
// Default parameters
// Used to set paramers values inside the functon in case user doesn't put any value
const bookings = [];
const createBooking = function (flightNum, numPassangers = 1, Price = numPassangers * 199) { // we set default values
    const booking = {
        flightNum,
        numPassangers,
        Price
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking(); // without any entered parameters we get undefined
createBooking('LH253');
createBooking('LH253', 3);
// When user puit his own values, they just overides our default parameters
createBooking('LH253', 2, 299);



// How passing arguments works:
// Value vs Reference
console.log(' ');
console.log('---How passing arguments works---');

const flight = 'LH234';
const passangerInfo = {
    name: 'Maksym Yaremko',
    passport: '56945634',
}

const checkIn = function (flightNum, passanger) {
    flightNum = 'LH253';
    passanger.name = 'Mr ' + passangerInfo.name;
    if (passangerInfo.passport === 25652355) {
        console.log('Check In');
    } else {
        console.log('Wrong passport');
    }
}
checkIn(flight, passangerInfo);
console.log(flight);
console.log(passangerInfo);


// First-class and Higher-order functions
// Higher order functions is functions that takes another function as an argument or return that function

// Functions Accepting Callback Functions
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
    console.log('👋');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);


// Functions returning new functions
// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }
const greet = greeting => name => {console.log(`${greeting} ${name}`);}


const greetHey = greet('hey');
greetHey('Maks');
greetHey('Jonas');

greet('Hello')('Mia')

