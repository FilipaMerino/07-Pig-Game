'use strict';

// Selecting elements
const scorePlayer1 = document.getElementById('score--0');
const scorePlayer2 = document.getElementById('score--1');
const currentPlayer1 = document.getElementById('current--0');
const currentPlayer2 = document.getElementById('current--1');

let image = document.querySelector('.dice');

const btnNew = document.querySelector('btn--new');

const btnRoll = document.querySelector('btn--roll');

const btnHold = document.querySelector('btn--hold');

const scores = [0, 0];
let activePlayer = 0;

// ______________

let currentScore = 0;
scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;
image.classList.add('hidden');

//Rolling dice Functionality
const roleDice = function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);
  image.classList.remove('hidden');
  image.src = `dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    currentScore += diceNumber;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch player

    // Reset score if rolls a 1
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    //Change background color on Active Player
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    activePlayer = activePlayer === 0 ? 1 : 0;

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
  }
};

// Roll Dice when click button
document.querySelector('.btn--roll').addEventListener('click', roleDice);
