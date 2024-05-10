'use strict';

// Selecting elements
const player1 = document.querySelector(`.player--0`);
const player2 = document.querySelector(`.player--1`);
const scorePlayer1 = document.getElementById('score--0');
const scorePlayer2 = document.getElementById('score--1');
const currentPlayer1 = document.getElementById('current--0');
const currentPlayer2 = document.getElementById('current--1');

let image = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//STARTING CONDITIONS

image.classList.add('hidden');

//Create init function - with state of app
const init = function () {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentPlayer1.textContent = 0;
  currentPlayer2.textContent = 0;
  //reset dice
  image.classList.add('hidden');
  // Resetting Winner class
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  // Show Buttons
  image.classList.add('hidden');
  btnHold.classList.remove('hidden');
  btnRoll.classList.remove('hidden');
};
init();

//SWITCH PLAYER FUNCTION
const switchPlayer = function () {
  // switch player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  changeActivePlayerBackground();
  currentScore = 0;
};

//CHANGE BACKGROUND ON ACTIVE PLAYWER FUNCTION
const changeActivePlayerBackground = function () {
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

//Rolling dice Functionality
const roleDice = function () {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    image.classList.remove('hidden');
    image.src = `dice-${diceNumber}.png`;

    // activePlayer === 0
    //   ? (scorePlayer1.textContent = diceNumber)
    //   : (scorePlayer2.textContent = diceNumber);

    if (diceNumber !== 1) {
      //Add Dice to current score
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch player
      switchPlayer();
    }
  }
};
//Holding dice Functionality

const holdScore = function () {
  if (playing) {
    // 1. Add current Score to active player's Score
    scores[activePlayer] += currentScore;
    // scores[1] = scores [1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. Check if player's score is => 100;

    if (scores[activePlayer] >= 100) {
      //Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      image.classList.add('hidden');
      btnHold.classList.add('hidden');
      btnRoll.classList.add('hidden');
    } else {
      //3. Switch to Next player
      switchPlayer();
    }
  }
};

//Clicking on Hold Button
btnHold.addEventListener('click', holdScore);

// Roll Dice when click button
btnRoll.addEventListener('click', roleDice);

//Resetting the game
btnNew.addEventListener('click', init);
