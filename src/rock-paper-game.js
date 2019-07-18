import { getThrow, ROCK, PAPER, SCISSORS, getWinner, TIE, USER_WINS, COMPUTER_WINS } from './get-throw.js';

const rockButtonEle = document.getElementById('throw-rock');
const paperButtonEle = document.getElementById('throw-paper');
const scissorsButtonEle = document.getElementById('throw-scissors');
const computerThrowEle = document.getElementById('computer-throw');
const userWinsTextEle = document.getElementById('human-wins-text');
const tieGameTextEle = document.getElementById('tie-game-text');
const computerWinsTextEle = document.getElementById('computer-wins-text');
const userTallyEle = document.getElementById('human-wins-counter');
const tiesTallyEle = document.getElementById('tie-games-counter');
const computerTallyEle = document.getElementById('computer-wins-counter');
const bettingCheckboxEle = document.getElementById('betting-checkbox');
const bettingBoxEle = document.getElementById('bet-input');
const betAmountEle = document.getElementById('bet-amount');
const humanStackHeaderEle = document.getElementById('human-stack-message');
const emptyStackHeaderEle = document.getElementById('blank-stack-message');
const computerStackHeaderEle = document.getElementById('computer-stack-message');
const humanStackEle = document.getElementById('human-stack-count');
const emptyStackEle = document.getElementById('blank-stack-count');
const computerStackEle = document.getElementById('computer-stack-count');
let userThrown;
let computerThrown;
let userTally = 0;
let tiesTally = 0;
let computerTally = 0;
let humanChips = 10;
let computerChips = 10;
let betAmount = 0;
betAmountEle.value = '' + betAmount;

userWinsTextEle.classList.add('invisible');
tieGameTextEle.classList.add('invisible'); 
computerWinsTextEle.classList.add('invisible');
userTallyEle.textContent = userTally;
tiesTallyEle.textContent = tiesTally;
computerTallyEle.textContent = computerTally;
resetGame();

rockButtonEle.addEventListener('click', () => {
    playGame(ROCK, rockButtonEle);
});
paperButtonEle.addEventListener('click', () => {
    playGame(PAPER, paperButtonEle);
});
scissorsButtonEle.addEventListener('click', () => {
    playGame(SCISSORS, scissorsButtonEle);
});
computerThrowEle.addEventListener('transitionend', () => endGame());
bettingCheckboxEle.addEventListener('click', () => setupBetting());

function playGame(userThrow, throwButton) {
    takeBets();
    throwButton.classList.add('user-button-chosen');
    userThrown = userThrow;
    computerMakeThrow();
}

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
    
    setTimeout(() => setImg(ROCK), 0);
    setTimeout(() => setImg(PAPER), 600);
    setTimeout(() => setImg(SCISSORS), 1200);
    setTimeout(() => setImg(computerThrown), 1800);
}

function endGame() {
    switch(getWinner(userThrown, computerThrown)) {
        case TIE:
            tieGameTextEle.classList.remove('invisible');
            tiesTallyEle.textContent = ++tiesTally;
            break;
        case USER_WINS:
            userWinsTextEle.classList.remove('invisible');
            userTallyEle.textContent = ++userTally;
            humanChips += betAmount;
            computerChips -= betAmount;
            break;
        case COMPUTER_WINS:
            computerWinsTextEle.classList.remove('invisible');
            computerTallyEle.textContent = ++computerTally;
            humanChips -= betAmount;
            computerChips += betAmount;
            break;
    }
    computerThrowEle.classList.add('computer-new-game');
    setupBetting();
    setTimeout(() => resetGame(), 1000);
}

function resetGame() {
    setupBetting();
    if(humanChips <= 0) {
        rockButtonEle.disabled = true;
        paperButtonEle.disabled = true;
        scissorsButtonEle.disabled = true;
        betAmountEle.disabled = true;
        bettingCheckboxEle.disabled = true;
        computerWinsTextEle.classList.remove('invisible');
        tieGameTextEle.textContent = 'GAME OVER';
        tieGameTextEle.classList.remove('invisible');
        return;
    }
    else if(computerChips <= 0) {
        rockButtonEle.disabled = true;
        paperButtonEle.disabled = true;
        scissorsButtonEle.disabled = true;
        betAmountEle.disabled = true;
        bettingCheckboxEle.disabled = true;
        userWinsTextEle.classList.remove('invisible');
        tieGameTextEle.textContent = 'GAME OVER';
        tieGameTextEle.classList.remove('invisible');
        return;
    }
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

function setupBetting() {
    if(bettingCheckboxEle.checked) {
        bettingBoxEle.classList.remove('hidden');
        humanStackHeaderEle.classList.remove('hidden');
        emptyStackHeaderEle.classList.remove('hidden');
        computerStackHeaderEle.classList.remove('hidden');
        humanStackEle.classList.remove('hidden');
        emptyStackEle.classList.remove('hidden');
        computerStackEle.classList.remove('hidden');
        humanStackEle.textContent = humanChips;
        computerStackEle.textContent = computerChips;
    } 
    else {
        bettingBoxEle.classList.add('hidden');
        humanStackHeaderEle.classList.add('hidden');
        emptyStackHeaderEle.classList.add('hidden');
        computerStackHeaderEle.classList.add('hidden');
        humanStackEle.classList.add('hidden');
        emptyStackEle.classList.add('hidden');
        computerStackEle.classList.add('hidden');
    }
}

function takeBets() {
    if(bettingCheckboxEle.checked) {
        betAmount = Number(betAmountEle.value);
        const userChips = Number(humanStackEle.textContent);
        if(betAmount > userChips) {
            betAmount = userChips;
            betAmountEle.value = '' + betAmount;
            alert('Bet has been reduced to ' + betAmount + ' due to insufficient funds.');
        } else if(betAmount > computerChips) {
            betAmount = computerChips;
            betAmountEle.value = '' + betAmount;
            alert('Bet has been reduced to ' + betAmount + ', which puts me ALL IN.');
        }
    }
}

const setImg = (item) => computerThrowEle.src = '../assets/' + item + '.jpg';
    
    