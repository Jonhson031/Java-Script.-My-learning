'use strict';
// Find() method
// Retrieve one element from an array based on condition

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWidthdrawal = movements.find(mov => mov < 0); // Returns first elelemnt from an array, that satisfy this condition
console.log(firstWidthdrawal);

// findIndex() method
// Returns first index of element based on condition
console.log(movements);
const index = movements.findIndex(mov => mov >= 3000);
console.log(index);
movements.splice(index, 1);
console.log(movements);

// findLast and findIndexLast
// Search starts from the end of an array
const lastDeposit = movements.findLast(mov => mov > 0);
console.log(lastDeposit);

const lastDepositIndex = movements.findLastIndex(mov => mov > 0);
console.log(lastDepositIndex);

// Find largest latest movement
const latestMove = movements.findLastIndex(mov => mov > 1000);
console.log(`Your latest largest movement was ${latestMove} movements ago`);