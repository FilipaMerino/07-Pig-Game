'use strict';

// Selecting elements
const scorePlayer1 = document.getElementById('score--0');
const scorePlayer2 = document.getElementById('score--1');
const currentPlayer1 = document.getElementById('current--0');
const currentPlayer2 = document.getElementById('current--1');
const player1 = document.querySelector(`.player--0`)
const player2 = document.querySelector(`.player--1`)


let image = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0, 0];
let activePlayer = 0;
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

  activePlayer === 0
    ? (scorePlayer1.textContent = diceNumber)
    : (scorePlayer2.textContent = diceNumber);

  if (diceNumber !== 1) {
    currentScore += diceNumber;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Reset score if rolls a 1
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    // switch player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    document.getElementById(`score--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle("player--active")
    player2.classList.toggle("player--active")
    // currentScore = 0;
  }
};

// Roll Dice when click button
document.querySelector('.btn--roll').addEventListener('click', roleDice);



const holdScore = function(){
// 1. Add current Score to active player's Score

//2. Check if player's score is => 100;
//Finish the game

//3. Switch to Nex player

  activePlayer === 0 ? 1 : 0;


}
//Clicking on Hold Button
btnHold.addEventListener("click, holdScore")
