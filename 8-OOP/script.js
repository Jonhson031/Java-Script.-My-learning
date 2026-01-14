'use strict';

// ? Object-oriented Programming (OOP)
// ? is a programming style based on the concepts of objects!

/* 
 -  Object-oriented programming (OOP) is a programming paradigm based on the
    concept of objects; 

 -  We use objects to model (describe) real-world or abstract features; E.g. HTML

 -  Objects may contain data (properties) and code (methods). By using objects, we
    pack data and the corresponding behavior into one block;

 -  // ? In OOP, objects are self-contained pieces/blocks of code;
    Objects are building blocks of applications, and interact with one another;
    Interactions happen through a public interface (API): methods that the code
    outside of the object can access and use to communicate with the object;
*/

/* 
? Abstraction: Ignoring or hiding details that don't matter, allowing us to
 get an overview perspective of the thing we're implementing, instead of
 messing with details that don't really matter to our implementation.

? Encapsulation: Keeping properties and methods private inside the class,
so they are not accessible from outside the class. Some methods can
be exposed as a public interface (API).

? Inheritance: Making all properties and methods of a certain class available
to a child class, forming a hierarchical relationship between classes. This
allows us to reuse common logic and to model real-world relationships.

? Polymorphism: A child class can overwrite a method it inherited from a
parent class [it's more complex that that, but enough for our purposes].

? Instance: Is a object created from a class
*/

// ? Prototypal inheritance // Works simillary to DOM three
// In JavaScript, every object has a hidden internal link to another object called its prototype.
// That prototype object can have its own prototype, and so on — forming a prototype chain.

const animal = {
   eat() {
      console.log("Animal is eating");
   }
};

const dog = Object.create(animal); // creates a new object linked to 'animal'
dog.bark = function () {
   console.log("Woof!");
};

dog.bark(); // Woof!
dog.eat();  // Animal is eating (inherited!)



// ?? 1. Constructor functions and the new operator
const Person = function (firstName, birthYear) {
   this.firstName = firstName;
   this.birthYear = birthYear

   // Never do this
   // this.calcAge = function () {
   //    console.log(2055 - birthYear);
   // }
}
const jack = new Person('Jack', 2006);
console.log(jack);
// 1. New {} (object) is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matt = new Person('Matt', 2001);
const john = new Person('John', 2004);
console.log(matt, john);

// ? 2. Prototypes
/* A prototype is a special hidden object that other objects inherit properties and methods from.
Every JavaScript object has an internal link (called [[Prototype]]) that points to another object — its prototype.
If a property or method isn’t found on the object itself, JavaScript looks for it in the prototype. */

console.log(Person.prototype);
Person.prototype.calcAge = function () {
   console.log(2055 - this.birthYear);
}
jack.calcAge();

// to check prototype 
console.log(jack.__proto__);
console.log(jack.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(jack)); // true
john.calcAge();

Person.prototype.race = 'European';
console.log(john, jack);
console.log(matt.race);
console.log(john.hasOwnProperty('firstName')); // true
console.log(john.hasOwnProperty('race')); // false

// ? 3. Prototypal Inheritance on Built-In Objects
console.log(john.__proto__);
console.log(john.__proto__.__proto__);
console.log(john.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 5, 612, 45, 5, 1, 612];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true

// In practice don't do this
Array.prototype.unique = function(){
   return [...new Set(this)];
}
console.log(arr.unique());


// ? Coding Challenge #1
const Car = function(make, speed){
   this.make = make;
   this.speed = speed;
   console.log(`${this.make} going at ${this.speed} km/h`)
}
Car.prototype.accelarate = function(){
   console.log(`${this.make} going at ${this.speed += 10} km/h`)
}
Car.prototype.brake = function(){
   console.log(`${this.make} going at ${this.speed -= 5} km/h`)
}
const bmw = new Car('BMW', 90);
const mercedes = new Car('Mercedes', 90);
// bmw.accelarate()
// bmw.accelarate()
// bmw.accelarate()
// bmw.accelarate()
// bmw.accelarate()
// bmw.brake()
// bmw.brake()
// bmw.brake()
// bmw.brake()


// ? Inheritance Between "Classes": Constructor Functions
const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear); // calls the parent constructor to set properties.
    this.course = course;
}

Student.prototype = Object.create(Person.prototype); // clear the prototypes, sets up prototype inheritance.
Student.prototype.constructor = Student; // restores the constructor reference.

Student.prototype.introduce = function(){
   console.log(`My name is ${this.firstName}. I study ${this.course}`)
}

const mike = new Student('Mike', 2002, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

// Student.prototype = Object.create(Person.prototype);
// console.log(Student.prototype)
console.log(mike.__proto__.__proto__);


// ? Coding Challenge #3
const EW = function(make, speed, charge){
   Car.call(this, make, speed);
   this.charge = charge;
   console.log(`${this.make} going at ${this.speed} km/h. With a charge of ${this.charge}%`)
}

EW.prototype = Object.create(Car.prototype);
EW.prototype.constructor = EW;

EW.prototype.chargeTo = function(chargeTo){
   this.charge = chargeTo;
   console.log(`${this.make} going at ${this.speed} km/h. With a charge of ${this.charge}%`)
}

EW.prototype.accelarate = function(){
   this.speed += 20;
   this.charge -= 1;
   console.log(`${this.make} going at ${this.speed} km/h. With a charge of ${this.charge}%`)
}
const tesla = new EW('Tesla', 90, 56);
tesla.chargeTo(94);
tesla.accelarate();
tesla.accelarate();
tesla.accelarate();