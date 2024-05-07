'use strict';

// Selecting elements
const scorePlayer1 = document.getElementById('score--0');
const scorePlayer2 = document.getElementById('score--1');
let image = document.querySelector('.dice');

const btnNew = document.querySelector('btn--new');

const btnRoll = document.querySelector('btn--roll');

const btnHold = document.querySelector('btn--hold');

// ______________

scorePlayer1.textContent = 0;
scorePlayer2.textContent = 0;
image.classList.add('hidden');

const roleDice = function () {
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(diceNumber);
  showDiceImage(diceNumber);
};

const showDiceImage = function (diceNumber) {
  let image = document.querySelector('.dice');
  switch (diceNumber) {
    case 1:
      image.classList.remove('hidden');
      image.src = 'dice-1.png';
      break;
    case 2:
      image.classList.remove('hidden');
      image.src = 'dice-2.png';
      break;
    case 3:
      image.classList.remove('hidden');
      image.src = 'dice-3.png';
      break;
    case 4:
      image.classList.remove('hidden');
      image.src = 'dice-4.png';
      break;
    case 5:
      image.classList.remove('hidden');
      image.src = 'dice-5.png';
      break;
    case 6:
      image.classList.remove('hidden');
      image.src = 'dice-6.png';
      break;
    default:
      image.src = '';
      image.classList.add('hidden');
      break;
  }
};

document.querySelector('.btn--roll').addEventListener('click', roleDice);
