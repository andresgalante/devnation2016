(function() {
  'use strict';
  var gameContainer = document.querySelector('.game-container'),
      scoreboard = document.querySelector('.scoreboard'),
      hitsElement = scoreboard.querySelector('h1 .number'),
      missesElement = scoreboard.querySelector('h2 .number'),
      hits = 0,
      misses = 0;
  hitsElement.innerText = hits,
  missesElement.innerText = misses;

  function addBall(line, container) {
    setTimeout(function() {
      var newLine = line.cloneNode(true);
      newLine.appendChild(container);
      line.parentElement.replaceChild(newLine, line);
    }, 1000)
  }

  gameContainer.addEventListener('click', function(event) {
    if (event.srcElement.classList.contains('ball')) {
      var container = event.srcElement.parentElement;
      var line = container.parentElement;
      hitsElement.innerText = ++hits;
      line.removeChild(container);
      addBall(line, container);
    } else {
      missesElement.innerText = ++misses;
    }
  });
}());
