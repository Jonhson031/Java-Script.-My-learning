// Short Circuiting (&& and ||)
// Logical operators can use:
// ANY data type, return ANY data type, Short Circuiting

// OR || operator returns true value
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
// all js values considering true values
// except: false, 0, Nan, undefined, ""(empty string), null
// EVERYTHING ELSE IS TRUE!
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    coctails: ['none', 'Vodka Lemon', 'Margarhita', 'Sex on the beach'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelievery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address, coctail = 0 }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}, ${this.coctails[coctail]} will be delievered to ${address} at ${time}`);
    }
};
// To check if this key exists in object we use if:
const numGuests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(numGuests);
restaurant.numGuests = 23;
// Or we can use Short Circuiting ||
const numGuests2 = restaurant.numGuests || 10;
console.log(numGuests2);

// AND && operator return falsy value
console.log('---- AND ----');
console.log(0 && 'Maks');
console.log(7 && 'Jonas');


// The Nullish Coalescing Operator (??)
restaurant.numGuests = 0; // When we use OR || it will skip zero and put another default value, because 0 is false;
// But ?? operator will still keep 0;
const numGuests3 = restaurant.numGuests ?? 10;



// For Of loop
for (let item of restaurant.mainMenu) {
    console.log(item);
}

//  Enhanced Object Literals
/* Enhanced Object Literals are improvements to how we define objects in JavaScript.
They make code more concise, readable, and powerful — especially when working with variables and functions.
*/

// Old way
const name = "Maksym";
const age = 22;
const person = {
    name: name,
    age: age
};
// After (enhanced way)
const person2 = {
    name, 
    age
};
console.log(person2); // { name: "Maksym", age: 22 }

// Before:
const user = {
    greet: function () {
        console.log("Hello!");
    }
};
// After:
const key = 'role';
// We can use expressions or variables as property names by wrapping them in [].
const user2 = {
    name,
    age,
    [key]: 'admin',
    greet() {
        console.log(`Hello ${this.name2}`);
    }
};
console.log(user2);
user2.greet(); // "Hello!"