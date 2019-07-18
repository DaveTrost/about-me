import { getThrow, ROCK, PAPER, SCISSORS } from './get-throw.js';

const rockButtonEle = document.getElementById('throw-rock');
const computerThrowEle = document.getElementById('computer-throw');
const userWinsTextEle = document.getElementById('human-wins-text');
const tieGameTextEle = document.getElementById('tie-game-text');
const computerWinsTextEle = document.getElementById('computer-wins-text');
let thrown;

userWinsTextEle.classList.add('invisible');
tieGameTextEle.classList.add('invisible'); 
computerWinsTextEle.classList.add('invisible');
resetGame();
rockButtonEle.addEventListener('click', () => computerThrow());
computerThrowEle.addEventListener('transitionend', () => restartGame());

function computerThrow() {
    rockButtonEle.disabled = true;
    computerThrowEle.classList.remove('computer-spin');
    computerThrowEle.src = '../assets/' + ROCK + '.jpg';
    computerThrowEle.classList.add('computer-spin');
    thrown = getThrow();
    console.log(thrown);
    
    setTimeout(() => setImg(ROCK), 0);
    setTimeout(() => setImg(PAPER), 1500);
    setTimeout(() => setImg(SCISSORS), 3000);
    setTimeout(() => setImg(thrown), 4500);
    // setTimeout(() => computerThrowEle.src = '../assets/' + thrown + '.jpg', 4500);
    
}

function restartGame() {
    resetGame();
    computerThrowEle.classList.add('computer-new-game');
}

function resetGame() {
    rockButtonEle.disabled = false;
    computerThrowEle.classList.remove('computer-spin');
}

const setImg = (item) => computerThrowEle.src = '../assets/' + item + '.jpg';

