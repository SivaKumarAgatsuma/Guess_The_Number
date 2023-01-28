'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    if (!guess) {
        displayMessage("Please provide a value!")
    }
    else if (guess !== number) {
        if (score > 1) {
            displayMessage(guess > number ? "Too High⏫" : "Too Low⏬");
            score -= 1;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage("You Lost!");
            document.querySelector('.score').textContent = 0;
        }
    }
    else {
        displayMessage("You guessed it correct!✔");
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

})
document.querySelector('.again').addEventListener('click',
    function () {
        score = 20;
        number = Math.trunc(Math.random() * 20) + 1;
        displayMessage("Start guessing...");
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';

    })
