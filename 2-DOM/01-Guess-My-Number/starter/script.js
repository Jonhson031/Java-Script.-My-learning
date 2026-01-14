'use strict';


let randomNum = Math.trunc(Math.random() * 20) +1;
let secretNumber = document.querySelector('.number').textContent;
let score = 20;
let highScore = 0;


const displayMessage = function(message){
  return document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);
  console.log(randomNum);
  if (!guess){
    displayMessage('⛔️ No number!');
  } else if (guess === randomNum){
    displayMessage('🎉 Correct Number!;')
    document.querySelector('.number').textContent = randomNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != randomNum){
    if  (guess > randomNum){
      displayMessage('📈 Too high!');
      if (score > 0){
        score--;
        document.querySelector('.score').textContent = score;
      }
      else{
        displayMessage('😢 You lost the game!');
        document.querySelector('body').style.backgroundColor = '#d10c08';
      } 
    } 
    else if (guess < randomNum){
      displayMessage('📉 Too low!');
      if (score > 0){
        score--;
        document.querySelector('.score').textContent = score;
      }
      else{
        displayMessage('😢 You lost the game!');
        document.querySelector('body').style.backgroundColor = '#d10c08';
      } 
    }
  }
})


document.querySelector('.again').addEventListener('click', function(){
  randomNum = Math.trunc(Math.random() * 20) +1;
  console.log(randomNum);
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
})