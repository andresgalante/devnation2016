'use strict';

var gameContainer = document.querySelector('.game-container');
var scoreboard = document.querySelector('.scoreboard');
var hitsElement = scoreboard.querySelector('h1 .number');
var missesElement = scoreboard.querySelector('h2 .number');
var hits = 0;
var misses = 0;
hitsElement.innerText = hits;
missesElement.innerText = misses;

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
    hitsElement.innerText = ++hits;
    ball.parentElement.removeChild(ball);
    addBall(line, ball);
  } else {
    missesElement.innerText = ++ misses;
  }
});
