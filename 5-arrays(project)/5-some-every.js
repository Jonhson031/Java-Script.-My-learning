'use strict';
// Some Method()
// Returns true if any element in an array satisfy condition
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// Every Method()
// Returns true if every element in an array satisfy condion
const everyDeposit = movements.every(mov => mov > 0);
console.log(everyDeposit);

// Flat() Method
// Transofrm nested arrays in normal arrays
const arr = [[1, 2], 3, 4, [[5], 6]];
console.log(arr.flat(2)); // Optional 2 — how deep to flatten (default is 1)

// FlatMap() Method
// Combines Flat and Map Methods



// Sort() Method
// By default sorts by ASC(lowest to highest, A to Z).
const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
console.log(owners.sort());
// sort() also mutates original array

// JS convert numbers to strings when using sort on numbers. 
// console.log(movements.sort()); // Not gonna work correctly
console.log(movements);
// Correct way: using call back function
// a - b -- ascending order
// b - a -- descending order
let sortAsc = [...movements].sort((a,b) => a - b); // we use spread operator to not mutate original array
let sortDesc = movements.slice().sort((a,b) => b - a); // we can also use slice() method
console.log(sortAsc);
console.log(sortDesc);
console.log(movements); // array hasn't mutated




// Coding Challenge #4
console.log('---Coding Challenge #4---');
const breeds = [
    {
        breed: 'German Shepherd',
        averageWeight: 32,
        activities: ['fetch', 'swimming'],
    },
    {
        breed: 'Dalmatian',
        averageWeight: 24,
        activities: ['running', 'fetch', 'agility'],
    },
    {
        breed: 'Labrador',
        averageWeight: 28,
        activities: ['swimming', 'fetch'],
    },
    {
        breed: 'Beagle',
        averageWeight: 12,
        activities: ['digging', 'fetch'],
    },
    {
        breed: 'Husky',
        averageWeight: 26,
        activities: ['running', 'agility', 'swimming'],
    },
    {
        breed: 'Bulldog',
        averageWeight: 36,
        activities: ['sleeping'],
    },
    {
        breed: 'Poodle',
        averageWeight: 18,
        activities: ['agility', 'fetch'],
    },
];
// 1.
const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log(huskyWeight);

// 2.
const dogBothActivities = breeds.find(breed => breed.activities.includes('running') && breed.activities.includes('fetch')).breed;
console.log(dogBothActivities);

// 3.
const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);

// 4.
const uniqueActivities = new Set(allActivities);
console.log(uniqueActivities);

// 5.
const swimmingAdjacent = [
    ...new Set(
        breeds
            .filter(breed => breed.activities.includes('swimming'))
            .flatMap(breed => breed.activities)
            .filter(activity => activity !== 'swimming')
    )
];
console.log(swimmingAdjacent);

// 6.
const averagewWeight = breeds.every(breed => breed.averageWeight >= 10);
console.log(averagewWeight);

// 7.
const activeBreeds = breeds.some(breed => breed.activities.length >= 3);
console.log(activeBreeds);

// Bonus 8.
const fetchWeights = breeds
  .filter(breed => breed.activities.includes('fetch'))
  .map(breed => breed.averageWeight);
const heaviestFetchBreed = Math.max(...fetchWeights);
console.log(fetchWeights, heaviestFetchBreed);