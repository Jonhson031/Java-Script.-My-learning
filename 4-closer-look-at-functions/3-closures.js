'use strict';
// Immediately Invoked Function Expressions (IIFE)
// is a function that runs immediately after it’s defined.
const runOnce = function () {
    return console.log('This will never run again');
}
runOnce();

// All data define inside the scope is private
(function () {
    return console.log('This will never run again');
    const isPrivate = 23;
})();
// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

// We can also create scope without functions.
{
    const isPrivate = 23;
    var isNotPrivate = 19; // var doesn't work as private, and you can still call it outside a scope
}
// console.log(isPrivate);
console.log(isNotPrivate);


// Closures
// A closure is created when a function “remembers” the variables from the place where it was created,
// even after that outer function has finished running.
const secureBooking = function () {
    let passangerCount = 0;
    return function () {
        passangerCount++;
        console.log(`${passangerCount} passangers`);
    }
}
const booker = secureBooking();
booker();
booker();
booker();
// A closure is like a backpack that function carries around wherever it goes.
// This backpack has all variables that were present in the environment where the function was created

// Example 1
let f;
const g = function () {
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
}
const h = function(){
    const b = 56;
    f = function(){
        console.log(b * 2);
    }
}
g();
f();
console.log(f);

// Re assigning f function
h();
f();
console.log(f);
console.dir(f);

// Example 2. Timer
const boardPassangers = function(num, wait){
    const perGroup = Math.trunc(num / 3);
    setTimeout(function(){
        console.log(`We are now boarding ${num} passangers`);
        console.log(`There are three groups. Each with ${perGroup} passangers`);
    }, wait * 1000)
    console.log(`Will start boarding in ${wait} seconds`);
}
boardPassangers(180, 3);

// Coding Challenge
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.addEventListener('click', function(){
        header.style.color = 'blue'
    });
})();