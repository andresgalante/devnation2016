(function() {
  'use strict';
  var gameContainer = document.querySelector('.game-container'),
      scoreboard = document.querySelector('.scoreboard'),
      hitsElement = scoreboard.querySelector('h1 .number'),
      missesElement = scoreboard.querySelectorAll('h2 .number').item(0),
      escapesElement = scoreboard.querySelectorAll('h2 .number').item(1),
      hits = 0,
      misses = 0,
      escapes = 0;
  hitsElement.innerText = hits,
  missesElement.innerText = misses;
  escapesElement.innerText = escapes;

  function addBall(line, container, delay) {
    setTimeout(function() {
      line.classList.remove('anim');
      line.appendChild(container);
      var animationDuration = 0.75 * parseFloat(line.style.animationDuration);
      animationDuration = Math.max(animationDuration, 0.5);
      line.style.animationDuration = animationDuration + 's';
      requestAnimationFrame(function() {
        line.classList.add('anim');
      }, 0);
    }, delay)
  }

  function removeBall(line) {
    var container = line.querySelector('.ball-container');
    line.removeChild(container);
    line.classList.remove('anim');
    return container;
  }

  gameContainer.addEventListener('click', function(event) {
    if (event.srcElement.classList.contains('ball')) {
      var line = event.srcElement.parentElement.parentElement;
      var container = removeBall(line);
      hitsElement.innerText = ++hits;
      addBall(line, container, 100);
    } else {
      missesElement.innerText = ++misses;
    }
  });

  gameContainer.addEventListener('animationiteration', function(event) {
    if (event.target.classList.contains('line')) {
      var line = event.target;
      var container = removeBall(line);
      escapesElement.innerText = ++escapes;
      addBall(line, container, 1000);
    }
  });

  Array.from(gameContainer.querySelectorAll('.line')).forEach(function(line) {
    line.classList.add('anim');
  })
}());
