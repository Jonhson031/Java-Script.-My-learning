'use strict';
// Array grouping
// Lets you to group elements of an array based on some property or condition
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const groupedMovements = Object.groupBy(movements, mov => mov > 0 ? 'deposit' : 'withdrawal');
console.log(groupedMovements);

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    type: 'premium',
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 1, 75, 99, -1000],
    interestRate: 1.5,
    pin: 2222,
    type: 'premium',
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [],
    interestRate: 0.7,
    pin: 3333,
    type: 'standard',
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
    type: 'gold',
};

const accounts = [account1, account2, account3, account4];

const gropedByActivity = Object.groupBy(accounts, acc => {
    const movementAccount = acc.movements.length;
    if (movementAccount > 8) return 'very active';
    if (movementAccount > 4) return 'active';
    if (movementAccount > 1) return 'moderate';
    return 'inactive';
})
console.log(gropedByActivity);

const groupedByType = Object.groupBy(accounts, acc => acc.type);
console.log(groupedByType);


// More ways of creating and filling arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
const x = new Array(7);

// Fill() method
x.map(() => 5) // map not gonna work for this array
console.log(x);
// x.fill(1); 
// fill() used to fill an array. It also mutates original array
x.fill(1, 3, 5)
console.log(x);

arr.fill(0, 2, 4); // fill array with 0, from index 2 to 4
console.log(arr);

// Array.from
const y = Array.from({length: 5}, () => 2);
console.log(y);

const z = Array.from({length: 6}, (curr, i) => i + 1); // works simillalry as map() method;
console.log(z);

const random = Array.from({length: 100}, (curr, i) => i + Math.trunc(Math.random() * 100) + 1);
console.log(random);

// Create array movements from DOM
const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
console.log(movementsUI)

