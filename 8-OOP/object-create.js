'use strict';

// ? Object.create
// Object.create(proto) creates a new object and sets its prototype to another existing object (proto).
const PersonProto = {
    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear)
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}
const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2001;
console.log(steven);
steven.calcAge();
console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1999);
console.log(sarah)


// ? Inheritance Between "Classes": Object.create
const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course){
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}
const jay = Object.create(StudentProto);
jay.init('Jay', 2000, 'Arts');
console.log(jay);



