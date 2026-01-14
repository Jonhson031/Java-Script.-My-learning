'use strict';
// ? ES6 OOP

// ? 1. ES6 Clasess
// under the hood, JavaScript classes are just syntactic sugar over the older prototype-based system — they don’t change how JS works internally.

// Clasess are work same way as functions, so we have both expression and declaration classess

// ? Instance: Is a object created from a class

// Class Expression:
// const Person = class{}

// Class Declaration
class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Methods will be addedd to prototype property
    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear);
    }

    get age() {
        return new Date().getFullYear() - this.birthYear;
    }
    static greet() {
        console.log(`Hello there`);
    }
}
const maks = new Person('Maks', 2006); // here maks is an instance
console.log(maks);
maks.calcAge();
console.log(maks.__proto__ === Person.prototype) // true

// Works just fine
Person.prototype.greet = function () {
    console.log(`Hello ${this.firstName}!`);
}
maks.greet();

// ? 1. Clasess are not hoisted. Although function declarations can be used anywhere in the code, classes can only be used after they are declared.
// ? 2. Class are first-class citizens. You can pass them into the functions, and return them from the functions.
// ? 3. Classess are executed in strict mode.



// ? 2. Setters and Getters
// Getters and Setters are special methods that control access to object properties.
// A getter allows you to read a property’s value.
// A setter allows you to control or validate how a property’s value is changed.

const account = {
    name: 'Jonas',
    movements: [15, -14, 100, 67, 146],
    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        return this.movements.push(mov);
    },

}
console.log(account.latest);
account.latest = 50;
console.log(account.movements)
console.log(maks.age);


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set area(value) {
        // Automatically adjust width for given height
        this.width = value / this.height;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // ✅ Calls getter → 50

rect.area = 100; // ✅ Calls setter
console.log(rect.width); // 20


// ? 2. Static Methods
Person.hey = function () { // this method only connect to class itself not objects
    console.log('Hey there!');
}
Person.hey();
// maks.hey(); // not gonna work

// ? Coding Challenge #2
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelarate() {
        console.log(`${this.make} going at ${this.speed += 10} km/h`)
    }
    brake() {
        console.log(`${this.make} going at ${this.speed -= 5} km/h`)
    }

    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new Car('Ford', 110);
ford.accelarate();
ford.accelarate();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 100;
ford.accelarate();



// ? 3. Inheritance Between "Classes": ES6 Classes
class Student extends Person {
    constructor(firstName, birthYear, course) {
        // Always needs to happen first
        super(firstName, birthYear);
        this.course = course;
    }
    calcAge() { // Here is the Polymorphism: A child class overwrites a method it inherited from a parent class.
        console.log(new Date().getFullYear() - this.birthYear + 10);
    }
}

const jonas = new Student('Jonas', 1998, 'Computer Science');
console.log(jonas);
Student.greet(); // Also inheriting static methods
jonas.calcAge();


// ? Another Class Example
// ? Private fields and methods start with a # and can only be accessed inside the class.
class Account {
    locale = navigator.language;
    bank = 'Bankist';
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this.movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${this.owner}`);
    }

    deposit(value) {
        this.#movements.push(value);
        return this;
    }
    withdraw(value) {
        this.deposit(-value);
        return this;
    }
    #approveLoan(value) {
        // Fake Method
        return true;
    }
    requetLoan(value) {
        if (this.#approveLoan(value)) {
            this.deposit(value);
            console.log('Loan approved');
        }
        return this;
    }
}
const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(150);
acc1.withdraw(140);
// acc1.movements = []; // We do not want someone to manipulate it
acc1.requetLoan(300);
console.log(acc1);


// ? Encapsulation: Private Class Fields and Methods
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// STATIC version of these 4

// ? Chaining methods
// Let us call methods in one line. To do so, we need to call an object in each method
acc1.deposit(300).deposit(100).withdraw(105).requetLoan(1000);
console.log(acc1);


// ? Coding Challenge #4
class EW extends Car {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`${this.make} going at ${this.speed} km/h. With a charge of ${this.#charge}%`);
        return this;
    }
    accelarate() {
        this.speed += 20;
        this.#charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h. With a charge of ${this.#charge}%`)
        return this;
    }
    brake() {
        console.log(`${this.make} going at ${this.speed -= 5} km/h`)
        return this;
    }
}
const rivilian = new EW('Rivilian', 120, 23);
console.log(rivilian)
rivilian.accelarate().brake().chargeBattery(55).brake().accelarate();

class Shape {
    name;
    sides;
    sideLength;
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sideLength = sideLength;
        this.sides = sides;
    }
    calcPerimeter() {
        console.log(this.sides * this.sideLength);
        return this;
    }
}
