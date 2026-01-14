'use strict';

// ? 1. Callstack
// The call stack is a mechanism JavaScript uses to keep track of which function is currently running, and what function to return to after it finishes.

function a() {
    b(); // 2 - b is called, added to stack
}

function b() {
    console.log("Hello"); // 3 - b runs 'hello', addedd to stack.
}

a(); // 1 - a is called, added to stack
/* Step by step:
After each finishes, it gets removed:
1- console.log removed
2- b removed
3- a removed.    
Stack becomes empty again. */


// ? 2. WEB APIs & Single Threaded
// Java Script is single threaded:
// Means it's running one line of code at a time. It's not multitasking!
console.log('I print first');
setTimeout(() => {
    console.log('I print after 3 seconds');
}, 3000); // The way it works: Java Script sends request to browser WEB api, and basically browser tells Java Script when to run this code
console.log('I print second');


// ? 3. Callback Hell
// It happens when you have many nested callbacks, making code hard to read, maintain, or debug.
// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }
// delayedColorChange('red', 100, () => {
//     delayedColorChange('orange', 100, () => {
//         delayedColorChange('yellow', 100, () => {
//             delayedColorChange('green', 100, () => {
//                 delayedColorChange('blue', 100, () => {
//                     delayedColorChange('white', 100, () => {
//                     })
//                 })
//             })
//         })
//     })
// });

// ? 4.Promises
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}
// delayedColorChange('red', 100)
//     .then(() => delayedColorChange('orange', 100))
//     .then(() => delayedColorChange('yellow', 100))
//     .then(() => delayedColorChange('green', 100))
//     .then(() => delayedColorChange('blue', 100))
//     .then(() => delayedColorChange('indigo', 100))
//     .then(() => delayedColorChange('violet', 100));


// ? 5. Async Keyword
// We can create using both declaration and exprassion functions
async function hello(params) { // if we put async in front of the function, it will automatically return new Promise
    return
}

const sing = async () => {
    return 'LA LA LA LA';
}
sing().then(data => {
    console.log(`Promose resolved with: ${data}`);
})

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'WELCOME!'
    throw 'Invalid Password'
}
login('akjsdhsa', 'corgifeetarecute')
    .then(msg => {
        console.log("LOGGED IN!")
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })

// ? 6. Await
// You can only use await insde async function
// Await allows you to write asynchronous code as if it was synchronous.
async function rainbow() {
    await delayedColorChange('red', 1000); // await pauses the function until the Promise finishes:
    await delayedColorChange('blue', 1000);
    await delayedColorChange('violet', 1000);
}
rainbow()