'use strict';

var gameContainer = document.querySelector('.game-container');
var scoreboard = document.querySelector('.scoreboard');
var scoreElement = scoreboard.querySelector('h1');
var score = 0;
scoreElement.innerText = score;

function addBall(line, ball) {
  setTimeout(function() {
    var newLine = line.cloneNode(true);
    newLine.querySelector('.ball-container').appendChild(ball);
    line.parentElement.replaceChild(newLine, line);
  }, 1000)
}

gameContainer.addEventListener('click', function(event) {
  if (event.srcElement.classList.contains('ball')) {
    var ball = event.srcElement;
    var line = ball.parentElement.parentElement;
    scoreElement.innerText = ++score;
    ball.parentElement.removeChild(ball);
    addBall(line, ball);
  }
});
