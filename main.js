'use strict';

var gameContainer = document.querySelector('.game-container');
var scoreboard = document.querySelector('.scoreboard');
var scoreElement = scoreboard.querySelector('h1');
var score = 0;
scoreElement.innerText = score;

gameContainer.addEventListener('click', function(event) {
  if (event.srcElement.classList.contains('ball')) {
    var ball = event.srcElement;
    scoreElement.innerText = ++score;
    ball.parentElement.removeChild(ball);
  }
});
