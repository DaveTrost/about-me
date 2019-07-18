import { getThrow, ROCK, PAPER, SCISSORS, getWinner, TIE, USER_WINS, COMPUTER_WINS } from './get-throw.js';

const rockButtonEle = document.getElementById('throw-rock');
const paperButtonEle = document.getElementById('throw-paper');
const scissorsButtonEle = document.getElementById('throw-scissors');
const computerThrowEle = document.getElementById('computer-throw');
const userWinsTextEle = document.getElementById('human-wins-text');
const tieGameTextEle = document.getElementById('tie-game-text');
const computerWinsTextEle = document.getElementById('computer-wins-text');
let userThrown;
let computerThrown;

userWinsTextEle.classList.add('invisible');
tieGameTextEle.classList.add('invisible'); 
computerWinsTextEle.classList.add('invisible');
resetGame();

rockButtonEle.addEventListener('click', () => {
    rockButtonEle.classList.add('user-button-chosen');
    userThrown = ROCK;
    computerMakeThrow();
});
paperButtonEle.addEventListener('click', () => {
    paperButtonEle.classList.add('user-button-chosen');
    userThrown = PAPER;
    computerMakeThrow();
});
scissorsButtonEle.addEventListener('click', () => {
    scissorsButtonEle.classList.add('user-button-chosen');
    userThrown = SCISSORS;
    computerMakeThrow();
});
computerThrowEle.addEventListener('transitionend', () => endGame());


function computerMakeThrow() {
    rockButtonEle.disabled = true;
    paperButtonEle.disabled = true;
    scissorsButtonEle.disabled = true;
    userWinsTextEle.classList.add('invisible');
    tieGameTextEle.classList.add('invisible');
    computerWinsTextEle.classList.add('invisible');
    // rockButtonEle.classList.remove('user-button:hover');
    // paperButtonEle.classList.remove('user-button:hover');
    // scissorsButtonEle.classList.remove('user-button:hover');
    computerThrowEle.classList.remove('computer-spin');
    computerThrowEle.classList.add('computer-spin');
    computerThrown = getThrow();
    console.log(computerThrown);
    
    setTimeout(() => setImg(ROCK), 0);
    setTimeout(() => setImg(PAPER), 1500);
    setTimeout(() => setImg(SCISSORS), 3000);
    setTimeout(() => setImg(computerThrown), 4500);
}

function endGame() {
    switch(getWinner(userThrown, computerThrown)) {
        case TIE:
            tieGameTextEle.classList.remove('invisible');
            break;
        case USER_WINS:
            userWinsTextEle.classList.remove('invisible');
            break;
        case COMPUTER_WINS:
            computerWinsTextEle.classList.remove('invisible');
            break;
    }
    computerThrowEle.classList.add('computer-new-game');
    setTimeout(() => resetGame(), 1500);
}

function resetGame() {
    rockButtonEle.disabled = false;
    paperButtonEle.disabled = false;
    scissorsButtonEle.disabled = false;
    rockButtonEle.classList.remove('user-button-chosen');
    paperButtonEle.classList.remove('user-button-chosen');
    scissorsButtonEle.classList.remove('user-button-chosen');
    rockButtonEle.classList.add('user-button:hover');
    paperButtonEle.classList.add('user-button:hover');
    scissorsButtonEle.classList.add('user-button:hover');

    computerThrowEle.classList.remove('computer-spin');
}

const setImg = (item) => computerThrowEle.src = '../assets/' + item + '.jpg';

