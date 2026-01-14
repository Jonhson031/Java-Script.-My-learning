'use strict';
// The call and apply Methods
// Both call() and apply() are methods that allow you to manually set the value of .this inside a function.
/*
| Method      | How to pass arguments       | Example                    |
| ----------- | --------------------------- | -------------------------- |
| **call()**  | Pass arguments individually | `fn.call(obj, a, b, c)`    |
| **apply()** | Pass arguments as an array  | `fn.apply(obj, [a, b, c])` |
*/

const lufthansa = {
    airline: 'Lufthansa',
    iatacode: 'LH',
    bookings: [],
    book(flignNum, passangerName) {
        console.log(`${passangerName} booked a seat on ${this.airline} flight ${this.iatacode}${flignNum}`);
        this.bookings.push({ flight: `${this.iatacode}${flignNum}` })
    }
}

lufthansa.book(234, 'Maksym Yaremko');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);
const eurowings = {
    airline: 'Eurowings',
    iatacode: 'EW',
    bookings: [],
}

// We can take function from an object and set it to new variable
const book = lufthansa.book;
// Doest not work. Because we have THIS in our function and JS doesn't understand where it goes from.
// book(23, 'Silenna Smith');

// To fix it we use Call Method and we tell from which object to take these arguments
// Call Method
book.call(eurowings, 23, 'Sarrah Smith');

const swissAirline = {
    airline: 'Swiss Airlines',
    iatacode: 'SW',
    bookings: [],
}
book.call(swissAirline, 165, 'Marry Cooper');


// Apply Method
// Pass arguments as an array
const flightData = [563, 'John Cooper'];
book.apply(swissAirline, flightData);
console.log(swissAirline);
book.call(swissAirline, ...flightData);


// Bind Method
// The bind() method does not immediately call the function as apply() and call()
// Instead, it creates a new function where this is permanently set (or bound) to the value you choose.
const bookEW = book.bind(eurowings);
bookEW(23, 'Millo Larrat');

// We can also pre defined arguments 
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Devon Larrat');

// Bind method can be also useful with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
lufthansa.buyPlane();

// When we put function on event listener, all 'this' got connected to that event listener and not directly to parent function elemenets
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
// To fix it, we use bind() method
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


const person = {
    name: 'Maksym',
    age: 19,
}
const greet = function(){
    return console.log(`Hello ${this.name}, you are ${this.age} years old!`)
}
// bind() creates a new function with "this" fixed to person
const greetMaksym = greet.bind(person);
greetMaksym();


// Challenge #1
