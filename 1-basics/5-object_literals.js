// Objects
// Objects are collections of properties
// Properties are a key-value pair


// Using an object
const objectData = {
    totalSteps: 30002.45,
    totalMiles: 105.3,
    avgSleep: 8.3,
};
console.log(objectData);
// To access data from object:
console.log(objectData["avgSleep"]); 
// or we can use:
console.log(objectData.totalMiles)

// Valid keys are all keys that converted to the string!!! So, if we use numbers for key-value it gonna convert to string

const midTerm = {
    daniel: 96,
    john: 83,
};
console.log(midTerm);

midTerm.john = "78/100",
console.log(midTerm) // to change property
console.log(typeof(midTerm.john))


midTerm.maks = 93; // to add new key value
console.log(midTerm)



//////// We can store objects in arrays and arrays in objects
const objectInArray = [
    {
        firstName: "Lay",
        lastName: "Smith",
        age: 34,
    },
    {
        firstName: "Nolan",
        lastName: "Ven",
        age: 34,
    },
]
console.log(objectInArray)
console.log(objectInArray[1].firstName)


const student = {
    firstName: "Ally",
    lastName: "Cooper",
    strength: ["Math", "Programming"], // store array in object
    exams: {
        midTerm: "93/100",
        finalExam: "89/100"
    }, // store object in object
}
console.log(student)
console.log(student.strength[1])
console.log(student.exams.midTerm)

console.log(student?.grades?.math); // to check if we have this object property, without '?', we'd get error

if("firstName" in student){
    console.log(`We have this student, the student is really good in ${student.strength[0]}`)
}


/////////////////////////////
// Object Methods
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
   
  const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };
   
  mark.calcBMI();
  john.calcBMI();
   
  if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
  }