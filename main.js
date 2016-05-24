'use strict';

var balls = document.querySelectorAll('.ball');
var scoreboard = document.querySelector('.scoreboard');
var scoreElement = scoreboard.querySelector('h1');
var score = 0;
scoreElement.innerText = score;

Array.from(balls).forEach(ball => {
  ball.addEventListener('click', function(event) {
    scoreElement.innerText = ++score;
    ball.parentElement.removeChild(ball);
  });
});
