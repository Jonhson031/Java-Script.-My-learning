// The new at() method
const arr = [23, 64, 256];
console.log(arr[0]); // by default
console.log(arr.at(0)); // with at method

// To get the last element of an array
console.log(arr[arr.length - 1]);
console.log(arr.at(-1)); // to get last element with at() much easier

// Also works with string
console.log('Maksym'.at(-1));


// forEach loop
// Main diffrence between forEach and for of is that you can't break out forEach loop.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i}: You withdrew ${Math.abs(movement)}`);
    }
}

console.log('----forEach----');
movements.forEach(function (movement, index, arr) {
    if (movement > 0) {
        console.log(`Movement ${index + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
    }
});


// forEach with Maps and Sets
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
})
// for (let [key, value] of personMap){
//     console.log(key, value);
// }

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
})

// Coding Challenge 1
console.log('---Coding Challenge---');
const dogs1 = [1, 13, 3, 2, 8];
const dogs2 = [9, 1, 5, 6, 2];

const checkDogs = function (dogsJulia = [], dogsKate = []) {
    console.log(dogsJulia, dogsKate);
    const dogsFixed = dogsJulia.slice(1, -2);
    console.log(dogsFixed);
    const dogs = dogsFixed.concat(dogsJulia);
    console.log(dogs);
    dogs.forEach(function (dog, i) {
        if (dog > 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy`);
        }
    })
    // dogsKate.forEach(function(dog, i){
    //     if (dog >= 3){
    //         console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    //     } else{
    //         console.log(`Dog number ${i + 1} is still a puppy`);
    //     }
    // })
}
checkDogs(dogs1, dogs2)
// checkDogs([0.5, 6, 3, 9, 5, 1, 5, 7, 8, 5, 2, 6], [1, 5, 3, 4, 8, 7, 4]);

