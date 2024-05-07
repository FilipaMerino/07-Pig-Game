'use strict';

let diceNumber = Math.trunc(Math.random() * 6) + 1;
console.log(diceNumber);

let image = document.querySelector('.dice');
console.log(image.src);

switch (diceNumber) {
  case 1:
    image.src = 'dice-1.png';
    break;
  case 2:
    image.src = 'dice-2.png';
    break;
  case 3:
    image.src = 'dice-3.png';
    break;
  case 4:
    image.src = 'dice-4.png';
    break;
  case 5:
    image.src = 'dice-5.png';
    break;
  case 6:
    image.src = 'dice-6.png';
    break;
  default:
    image.src = 'dice-4.png';
    break;
}
