// Sets
// Set is collection of unique values
// Set can never have duplicates
const menu = [
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza'
]
const orderSets = new Set(menu); // Set gonna remove all duplicates in the array
console.log(orderSets);
console.log(new Set('Maks'));
console.log(orderSets.size); // we can get size of the set

// has() method
// is the same as includes, but works only for Maps and Sets
console.log(orderSets.has('Pizza')); // true
console.log(orderSets.has('Bread')); // false

// To add new elemets to the Set
orderSets.add('Garlic Bread');
console.log(orderSets);

// To remove element from the Set
orderSets.delete('Pizza');
console.log(orderSets);

// To delete all elements from the set
// orderSets.clear();

// To loop over the set
for (let order of orderSets){
    console.log(order);
}


// Example
const staff = ['Waiter', 'Maganeger', 'Schef', 'Waiter', 'Schef'];
let staffUnique = new Set(staff);
staffUnique = [...new Set(staff)]; // to delete all duplicates from an array but leave elements in the array we can use Spread(...) operator
console.log(staffUnique);

// Maps
// We can use Map to map values to keys 
// Map is like an object but with more flexibility
const restaurant = new Map();
restaurant.set('name', 'Classico Italiano') // to add data into map
restaurant.set(1, 'Firenze, Italy'); // we can add keys using numbers
restaurant.set(2, 'Lisabon, Portugal')
console.log(restaurant);
// We can also add set in the same row
restaurant.set('Categories', ['Italian', 'Pizzeria', 'Vegeterian', 'Organic']).set('open', 11).set('close', 23);
console.log(restaurant);

// To read Data from the Map()
console.log(restaurant.get('name')); // we use get()\

// To delete key from the Map
restaurant.delete(2)
console.log(restaurant);


// We can use for of on maps, but can't use on objects
for (let key of restaurant){
    console.log(key);
}

const person = {
    name: 'Maks',
    age: 19,
}

// To convert object into Map
const personMap = new Map(Object.entries(person));
console.log(personMap);
// And then we can loop over it
for (let [key, value] of personMap){
    console.log(key, value);
}
// The Object.entries() method takes an object and returns an array of key-value pairs (each pair is a small array of two elements).
// it's like “turning” an object into an array of mini arrays (each mini array = one key-value pair).