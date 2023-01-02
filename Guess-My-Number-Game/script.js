'use strict';
let secretNum = Math.trunc(Math.random() * 20) + 1;
let scoreMain = 20;
let highScore = 0;

const getMessage = function (message) {
  return (document.querySelector('.message').innerHTML = message);
};

document.querySelector('.check').addEventListener('click', () => {
  const num = +document.querySelector('.guess').value;
  console.log(typeof num);
  if (scoreMain <= 1) {
    getMessage('😭You Lost The Game');
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.score').innerHTML = 0;
  } else {
    if (!num) {
      getMessage('❗ No Number');
    } else if (secretNum === num) {
      document.querySelector('.number').innerHTML = secretNum;
      getMessage('✔ Correct Number');
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      console.log(scoreMain > highScore);
      if (scoreMain > highScore) {
        highScore = scoreMain;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else {
      getMessage(secretNum > num ? '⬇Too low' : '⬆Too high');
      scoreMain--;
      document.querySelector('.score').innerHTML = scoreMain;
    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  secretNum = Math.trunc(Math.random() * 20) + 1;
  scoreMain = 20;
  document.querySelector('.score').innerHTML = scoreMain;
  getMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.guess').value = '';
});
