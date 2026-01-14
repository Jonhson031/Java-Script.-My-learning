'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
// Reverse() method\
console.log(movements.toReversed()); // Same as reverse, but do not mutate original array

// toSorted(), toSpliced()
// movements(1) = 2000;
const newMovements = movements.with(1, 2000); // with() also do not mutate original array
console.log(newMovements);

// All this can be just replaced with slice() method
console.log(movements.slice().reverse());
console.log(movements);