'use strict';

let secretNumber = Math.trunc(Math.random()* 20) + 1;

let score = 20;
let highscore = 0;

const displayMesssage = function(message){
    document.querySelector('.message').textContent = message;
} 

document.querySelector('.check').addEventListener('click', function(){
    const guess = document.querySelector('.guess').value;

    //No Number
    if(!guess){
        displayMesssage("⛔ No Number!");
    } 

    //Correct Number
    else if(guess == secretNumber) {
        displayMesssage ("👌 Correct Number!");

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = 'green';

        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } 
    //Wrong Number
    else if(guess !== secretNumber){
        // document.querySelector('.message').textContent = guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
        displayMesssage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
        score--;
        document.querySelector('.score').textContent = score;
        } else{
        displayMesssage("😶You lost the game!");
        document.querySelector('.score').textContent = 0;
    }
}
)


document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()* 20) + 1;

    document.querySelector('.score').textContent = score;
    displayMesssage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})  