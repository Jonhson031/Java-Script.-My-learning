'use strict';
// Map Method
// creates a new array by applying a function to each element of the original array. 
// commonly used for Creating new arrays or transformations

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUSD = movements.map(movement => Math.trunc(movement * eurToUsd));
console.log(movements);
console.log(movementsUSD);


// Filter Method
// Used to filter elemets to satisfy certain conditions
const deposits = movements.filter(movement => movement > 0);
console.log(`All deposits are ${deposits}`);
const withdrawals = movements.filter(movement => movement < 0);
console.log(`All withdrawals are ${withdrawals}`);


// Reduce Method
// Used to combine all elements in the array to one single value
const balance = movements.reduce((acc, curr) => acc + curr, 0);
console.log(balance);
/*
accumulator (acc) → keeps track of the ongoing result. It's like a snowball

currentValue (curr) → the current element in the loop.

initialValue (0) → the starting value (required for safety).

arr > (used rarely) Reference to the whole array (if needed for calculations)
*/

// To find max value
const maxValue = movements.reduce((acc, curr) => {
    if (curr > acc) {
        return curr;
    }
    return acc;
})
console.log(maxValue)
console.log(Math.max(...movements)); // much easier just with spread

// Coding Challenge 2
const calcAverageHumanAge = function (ages = []) {
    // humanAge = []
    // ages.forEach(function (dog) {
    //     if (dog <= 2) {
    //         humanAge.push(2 * dog);
    //     } else if (dog > 2) {
    //         humanAge.push(16 + dog * 4);
    //     }
    // })
    const humanAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
    const adultsDogs = humanAge.filter(dog => dog >= 18);
    // const averageAge = adultsDogs.reduce((acc, curr, i, arr) => {
    //     acc += curr;
    //     if (i === arr.length - 1) {
    //         // if we're at the last element
    //         return acc / arr.length; // divide total sum by number of elements
    //     }
    //     return acc; // otherwise, just return the running total
    // }, 0);
    const averageAge = adultsDogs.reduce((acc, curr) => acc + curr, 0) / adultsDogs.length;
    console.log(averageAge)
}
calcAverageHumanAge([5, 2, 1, 4, 15, 8, 3]);


// Chaining Methods
// we can use all these methods together
const totalDepositsUsd = movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, curr) => acc + curr);
console.log(Math.round(totalDepositsUsd * 100) / 100);
// Chaining only works if each method returns something (like map, filter, slice, etc.).

// Coding Challenge 3
const calcAverageHumanAgeChaining = function (ages = []) { // same exercise, but rewrite in Chaining methods
    // const humanAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
    // const adultsDogs = humanAge.filter(dog => dog >= 18);
    const averageAge = ages
        .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
        .filter(dog => dog >= 18)
        .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
    console.log(averageAge)
}
calcAverageHumanAgeChaining([5, 2, 1, 4, 15, 8, 3]);