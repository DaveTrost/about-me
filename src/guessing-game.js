// import functions
import testGuess from './testGuess.js';

// Get DOM elements
const userGuessEle = document.getElementById('user-guess');
const guessButtonEle = document.getElementById('guess-button');
const attemptsRemainingEle = document.getElementById('remaining');
const statusMsgEle = document.getElementById('status');
const replayBoxEle = document.getElementById('play-again-box');
const replayButtonEle = document.getElementById('play-again');

// Set states and initialize variables
let attemptsRemaining = 4;
let correctNumber = Math.floor(Math.random() * 20) + 1;
let gameWon = false;
const tooLowMsg = 'That number is too low';
const tooHighMsg = 'That number is too high';
const loseMsg = 'Sorry, you ran out of attempts. You Lose.';
const winMsg = 'That is the correct number. You Win!';
const defaultMsg = 'Waiting for a new guess';
replayBoxEle.classList.add('hidden');
statusMsgEle.textContent = defaultMsg;

// event handlers
guessButtonEle.addEventListener('click', () => {
    switch(testGuess(userGuessEle.value, correctNumber)) {
        case 1:
            statusMsgEle.textContent = tooHighMsg;
            attemptsRemainingEle.textContent = --attemptsRemaining;
            break;
        case -1:
            statusMsgEle.textContent = tooLowMsg;
            attemptsRemainingEle.textContent = --attemptsRemaining;
            break;
        case 0:
            statusMsgEle.textContent = winMsg;
            userGuessEle.disabled = true;
            gameWon = true;
            replayBoxEle.classList.remove('hidden');
            guessButtonEle.disabled = true;
            break;
        default:
            break;
    }
    if(!gameWon && attemptsRemaining < 1) {
        statusMsgEle.textContent = loseMsg + '. The correct number was ' + correctNumber;
        userGuessEle.disabled = true;
        replayBoxEle.classList.remove('hidden');
        guessButtonEle.disabled = true;
    }
});

replayButtonEle.addEventListener('click', () => {
    replayBoxEle.classList.add('hidden');
    statusMsgEle.textContent = defaultMsg;    
    userGuessEle.disabled = false;
    userGuessEle.value = '';
    guessButtonEle.disabled = false;
    gameWon = false;
    attemptsRemainingEle.textContent = attemptsRemaining = 4;
    correctNumber = Math.ceil(Math.random() * 20);
});
