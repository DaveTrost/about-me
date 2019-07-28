import testGuess from './testGuess.js';

const guessSlider = document.getElementById('guess-range');
const userGuessEle = document.getElementById('user-guess');
const guessButtonEle = document.getElementById('guess-button');
const attemptsRemainingEle = document.getElementById('remaining');
const statusMsgEle = document.getElementById('status-message');
const replayButtonEle = document.getElementById('play-again');

let attemptsRemaining = 4;
let correctNumber = Math.floor(Math.random() * 20) + 1;
let gameWon = false;
const defaultMsg = 'Make a Guess';
const defaultStyle = 'default-status';
const tooLowMsg = 'Too Low';
const tooLowStyle = 'too-low-status';
const tooHighMsg = 'Too High';
const tooHighStyle = 'too-high-status';
let loseMsg = `You Lose! The number is ${correctNumber}`;
const loserStyle = 'loser-status';
let winMsg = `You Win! The number is ${correctNumber}`;
const winnerStyle = 'winner-status';
statusMsgEle.textContent = defaultMsg;
statusMsgEle.className = defaultStyle;
userGuessEle.value = guessSlider.value;

guessSlider.addEventListener('change', () => userGuessEle.value = guessSlider.value);
guessButtonEle.addEventListener('click', () => {
    if(userGuessEle.value < 1) {
        userGuessEle.value = 1;
    } else if(userGuessEle.value > 20) {
        userGuessEle.value = 20;
    }
    guessSlider.value = userGuessEle.value;
    switch(testGuess(userGuessEle.value, correctNumber)) {
        case 1:
            statusMsgEle.textContent = tooHighMsg;
            statusMsgEle.className = tooHighStyle;
            attemptsRemainingEle.textContent = --attemptsRemaining;
            break;
        case -1:
            statusMsgEle.textContent = tooLowMsg;
            statusMsgEle.className = tooLowStyle;
            attemptsRemainingEle.textContent = --attemptsRemaining;
            break;
        case 0:
            statusMsgEle.textContent = winMsg;
            statusMsgEle.className = winnerStyle;
            userGuessEle.disabled = true;
            gameWon = true;
            guessButtonEle.disabled = true;
            guessSlider.disabled = true;
            break;
        default:
            break;
    }
    if(!gameWon && attemptsRemaining < 1) {
        statusMsgEle.textContent = loseMsg;
        statusMsgEle.className = loserStyle;
        userGuessEle.disabled = true;
        guessButtonEle.disabled = true;
        guessSlider.disabled = true;
    }
});

replayButtonEle.addEventListener('click', () => {
    statusMsgEle.textContent = defaultMsg;
    statusMsgEle.className = defaultStyle;
    userGuessEle.disabled = false;
    userGuessEle.value = '';
    guessButtonEle.disabled = false;
    guessSlider.disabled = false;
    gameWon = false;
    attemptsRemainingEle.textContent = attemptsRemaining = 4;
    correctNumber = Math.ceil(Math.random() * 20);
    loseMsg = `You Lose! The number is ${correctNumber}`;
    winMsg = `You Win! The number is ${correctNumber}`;
    userGuessEle.value = guessSlider.value;
});
