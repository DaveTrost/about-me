import isYes from './isYes.js';

const quizButtonItem = document.getElementById('quiz-button');
const quizResultsArea = document.getElementById('results-area');
const passImageForQuestion1 = document.getElementById('pass-img-1');
const failImageForQuestion1 = document.getElementById('fail-img-1');
const passImageForQuestion2 = document.getElementById('pass-img-2');
const failImageForQuestion2 = document.getElementById('fail-img-2');
const passImageForQuestion3 = document.getElementById('pass-img-3');
const failImageForQuestion3 = document.getElementById('fail-img-3');
const resultsName = document.getElementById('user-name');
const resultsGrade = document.getElementById('grade-text');

let correctAnswers = 0;

quizButtonItem.onclick = startQuiz;
quizButtonItem.onmouseover = () => quizButtonItem.classList.add('highlighted');
quizButtonItem.onmouseout = () => quizButtonItem.classList.remove('highlighted');

function startQuiz() {
    const userContinue = confirm('Are you sure you want to continue to the awesome quiz?');
    if(!userContinue) return;

    correctAnswers = 0;
    resultsGrade.textContent = '0';
    quizResultsArea.classList.remove('hidden');
    passImageForQuestion1.classList.add('hidden');
    failImageForQuestion1.classList.add('hidden');
    passImageForQuestion2.classList.add('hidden');
    failImageForQuestion2.classList.add('hidden');
    passImageForQuestion3.classList.add('hidden');
    failImageForQuestion3.classList.add('hidden');

    const userFirstName = prompt('Okay Let\'s Go!\nPlease enter your first name');
    const userLastName = prompt('Please enter your last name');
    if(!userFirstName || !userLastName) return;

    const answer1 = prompt('Question 1:\nWas I born in the 1980\'s? (Y/N)');
    if(isYes(answer1)) {
        correctAnswers++;
        passImageForQuestion1.classList.remove('hidden');
        failImageForQuestion1.classList.add('hidden');
    } else {
        passImageForQuestion1.classList.add('hidden');
        failImageForQuestion1.classList.remove('hidden');
    }

    const answer2 = prompt('Question 2:\nDo you think you can beat me in a friendly game of disc golf? (Y/N)');
    if(!isYes(answer2)) {
        correctAnswers++;
        passImageForQuestion2.classList.remove('hidden');
        failImageForQuestion2.classList.add('hidden');
    } else {
        passImageForQuestion2.classList.add('hidden');
        failImageForQuestion2.classList.remove('hidden');
    }

    const answer3 = prompt('Question 3:\nDo you think I am good at riding a BMX bike? (Y/N)');
    if(!isYes(answer3)) {
        correctAnswers++;
        passImageForQuestion3.classList.remove('hidden');
        failImageForQuestion3.classList.add('hidden');
    } else {
        passImageForQuestion3.classList.add('hidden');
        failImageForQuestion3.classList.remove('hidden');
    }

    resultsName.textContent = userFirstName + ' ' + userLastName;
    resultsGrade.textContent = Math.round(correctAnswers / 3 * 100) + '%';
}
