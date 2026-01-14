// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = prompt("Enter your first guess! (Type 'q' to quit)");
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     guess = parseInt(guess);
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:");
//         attempts++;
//     } else if (guess < targetNum) {
//         guess = prompt("Too low! Enter a new guess:");
//         attempts++;
//     } else {
//         guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
//     }
// }

// if (guess === 'q') {
//     console.log("OK, YOU QUIT!")
// } else {
//     console.log("CONGRATS YOU WIN!")
//     console.log(`You got it! It took you ${attempts} guesses`)
// }
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOUR CODE GOES HERE:
let text = document.querySelectorAll('span');
for (let i = 0; i < colors.length; i++){
    console.log(text);
}