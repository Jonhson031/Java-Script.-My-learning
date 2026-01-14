// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// == equality
// != not equal
// === strict equality
// !== strict non-equality


// ==, != doesn't care about type!
0 == '' // true
5 == "5" // true
null == undefined // true
0 == false // true
1 != "1" //false

// ===, !== does care about type!
0 == '' // false, because different type
1 === "1" // false
1 !== "1" // true

let userNumber = 0 // prompt("Put your number"); // let user input something
parseInt(userNumber) // transform this variable to integer!

if (userNumber >= 18 ){
    console.log("You're adult! Welcome!!!")
} else{
    console.log("Get out of my site, KIDDO!")
} 
console.log(userNumber + "323")


///// Find number is either odd or even
const num = prompt("Put your number")
parseInt(num)
if (num % 2 == 0){
    console.log(`Your number ${num} is even`)
} else if (num % 2 != 0 ){
    console.log(`Your number ${num} is odd`)
} else{
    console.log("Put number")
}


///////////////////////////////////////
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

// toFixed(digit)!!! rounds number to digit that you put!!!!!!!!!!
if (BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's! (${BMIJohn.toFixed(1)})!`)
} else{
    console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's! (${BMIMark.toFixed(1)})!`)
}

let phrase = prompt("Choose your phrase between 'Stop', 'Go', 'Slow' ")
phrase.toLowerCase()
if (phrase == "stop"){
    console.log("red")
} else if(phrase == "slow"){
    console.log("yellow")
} else if(phrase == "go"){
    console.log("green")
} else{
    console.log("purple")
}


// Nesting Conditionals!!!
const password = prompt("Create your password")
if (password.length > 6){
    if (password.indexOf(' ') === -1){
        console.log("Good job! long password")
    } else{
        console.log("Password cannot contain spaces")
    }
} else{
    console.log("Too short password!")
}


//////////////
const num1 = 102
if(num1 <= 100) {
    if(num1 >= 50) {
        console.log("HEY!");
    }
} else {
    if (num1 < 103) {
        if(num1 % 2 === 0){
            console.log("YOU GOT ME!");
        }
    }
}



//// TRUE OR FALSE /////////
// all js values considering true values
// except: false, 0, Nan, undefined, ""(empty string), null\
// EVERYTHING ELSE IS TRUE!
const userInput = prompt("Put your value");
if (userInput) {
    console.log("True")
    console.log(typeof(userInput))
} else{
    console.log("False")
}



// Logical Operators. && (AND);  || (OR); ! (NOT);
// Allows us to combine different operations
if (2 < 3 && 4 === 4){
    console.log(true)
}
const password1 = prompt("Create your password")
if (password1.length > 6 && password1.indexOf(' ' === -1) ){ 
    console.log("Good job! Valid password")
} else{
    console.log("Incorrect format for password!")
}

const mystery = 'Panda7'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE
// LEAVE THIS CODE ALONE! (pretty please)
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}

// || (OR)
5 === 4 || 10 === 10// true
// 0-4 or 65+ free
// 5-10 = $10
// 10-65 = $20
const userAge = 2;
if (userAge > 0 && userAge < 5 || userAge >= 65){
    console.log("FREE")
} else if(userAge >= 5 && userAge < 10){
    console.log("$10")
} else if(userAge >=10 && userAge <65){
    console.log("$20")
} else{
    console.log("Invalid age")
}


// ! (NOT)
const userName = prompt("Put your name!")
if (!userName){
    console.log("Put your name please!!!")
} else{
    console.log(`Welcome ${userName}!`)
}
// SwITCH STATEMENT

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }


// Conditional (Ternary) operator
const years = prompt("How old are you?")
years >= 18 ? console.log(`You're ${years}!, you are already adult`):
console.log("You are still a child")
// ? - if; : - else

let age = 21;
const drink = age >= 21 ? "You can drink alcohol" : "Drink water or juice";
console.log(drink);


const bill = 275;
const tip = bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill/100) * 20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`)



const random = Math.round(Math.random() * 5);
const guess = prompt("Guess the number between 0 and 5") == random ?  console.log("Good job, you got it!"):
console.log(`Next time... random number is ${random}`)
// if (guess == random){
//     console.log("Good job, you got it!")
// } else{
//     console.log(`Next time... random number is ${random}`)
// }