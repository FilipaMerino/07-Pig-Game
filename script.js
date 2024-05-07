'use strict';

// Selecting elements
const scorePlayer1 = document.getElementById('score--0');
const scorePlayer2 = document.getElementById('score--1');
const currentPlayer1 = document.getElementById('current--0')
const currentPlayer2 = document.getElementById('current--1')

let image = document.querySelector('.dice');

const btnNew = document.querySelector('btn--new');

const btnRoll = document.querySelector('btn--roll');

const btnHold = document.querySelector('btn--hold');

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
  image.src = `dice-${diceNumber}.png`


if (diceNumber !== 1){
  currentScore += diceNumber;
  currentPlayer1.textContent = currentScore
} else {
  // switch player
}


};




// Roll Dice when click button
document.querySelector('.btn--roll').addEventListener('click', roleDice);
