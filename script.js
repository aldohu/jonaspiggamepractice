'use strict';

let player1 = document.querySelector('.player--0');
let p1Score = document.getElementById('score--0');
let p1CurrentScore = document.getElementById('current--0');
let p2Score = document.getElementById('score--1');
let p2CurrentScore = document.getElementById('current--1');
let player2 = document.querySelector('.player--1');
let newGame = document.querySelector('.btn--new');
let rollDice = document.querySelector('.btn--roll');
let holdScore = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const winner = document.querySelector('.player--winner');

let randomNumber = () => Math.floor(Math.random() * 6) + 1;
const startGame = function () {
  console.log(
    (p1Score.textContent = '0'),
    (p1CurrentScore.textContent = '0'),
    (p2Score.textContent = '0'),
    (p2CurrentScore.textContent = '0')
  );
  rollDice.disabled = false;
  holdScore.disabled = false;
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  p1Score.textContent = '0';
  p1CurrentScore.textContent = '0';
  p2Score.textContent = '0';
  p2CurrentScore.textContent = '0';

  console.log(
    (p1Score.textContent = '0'),
    (p1CurrentScore.textContent = '0'),
    (p2Score.textContent = '0'),
    (p2CurrentScore.textContent = '0')
  );
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
};
startGame();

holdScore.addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    p1Score.textContent = +p1Score.textContent + +p1CurrentScore.textContent;

    if (p1Score.textContent >= 15) {
      rollDice.disabled = 'true';
      holdScore.disabled = 'true';
      player1.classList.add('player--winner');
      p1CurrentScore.textContent = '0';
    } else {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
      p1CurrentScore.textContent = '0';
    }
  } else {
    p2Score.textContent = +p2Score.textContent + +p2CurrentScore.textContent;
    if (p2Score.textContent >= 15) {
      rollDice.disabled = 'true';
      holdScore.disabled = 'true';
      player2.classList.add('player--winner');
      p2CurrentScore.textContent = '0';
    } else {
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
      p2CurrentScore.textContent = '0';
    }
  }
});
rollDice.addEventListener('click', function () {
  let randomNum = randomNumber();
  console.log(randomNum);
  if (player1.classList.contains('player--active')) {
    if (randomNum == 1) {
      p1CurrentScore.textContent = '0';

      player1.classList.remove('player--active');
      player2.classList.add('player--active');
      console.log(
        p1Score.textContent,
        p1CurrentScore.textContent,
        p2Score.textContent,
        p2CurrentScore.textContent
      );
    } else {
      dice.src = `dice-${randomNum}.png`;
      p1CurrentScore.textContent = +p1CurrentScore.textContent + randomNum;
      console.log(
        p1Score.textContent,
        p1CurrentScore.textContent,
        p2Score.textContent,
        p2CurrentScore.textContent
      );
    }
  } else {
    if (randomNum == 1) {
      p2CurrentScore.textContent = '0';

      player2.classList.remove('player--active');
      player1.classList.add('player--active');
      console.log(
        p1Score.textContent,
        p1CurrentScore.textContent,
        p2Score.textContent,
        p2CurrentScore.textContent
      );
    } else {
      p2CurrentScore.textContent = +p2CurrentScore.textContent + randomNum;
      dice.src = `dice-${randomNum}.png`;
      console.log(
        p1Score.textContent,
        p1CurrentScore.textContent,
        p2Score.textContent,
        p2CurrentScore.textContent
      );
    }
  }
});
newGame.addEventListener('click', startGame);
