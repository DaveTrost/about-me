// import things
import isYes from './isYes.js';

// reference needed DOM elements
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

// initialization (setup, state variables)
let correctAnswers = 0;

// Event Handlers
quizButtonItem.onclick = startQuiz;
quizButtonItem.onmouseover = () => quizButtonItem.classList.add('highlighted');
quizButtonItem.onmouseout = () => quizButtonItem.classList.remove('highlighted');

function startQuiz() {
    // Start by confirming the user wants to continue
    const userContinue = confirm('Are you sure you want to continue to the awesome quiz?');
    if(!userContinue) return;

    // Show the results area with any previous quiz results cleared
    correctAnswers = 0;
    resultsGrade.textContent = '0';
    quizResultsArea.classList.remove('hidden');
    passImageForQuestion1.classList.add('hidden');
    failImageForQuestion1.classList.add('hidden');
    passImageForQuestion2.classList.add('hidden');
    failImageForQuestion2.classList.add('hidden');
    passImageForQuestion3.classList.add('hidden');
    failImageForQuestion3.classList.add('hidden');

    // Get the user's name
    const userFirstName = prompt('Okay Let\'s Go!\nPlease enter your first name');
    const userLastName = prompt('Please enter your last name');
    if(!userFirstName || !userLastName) return;

    // Deliver the quiz questions
    const answer1 = prompt('Question 1:\nWhat year was I born?');
    if(answer1 === '1980') {
        correctAnswers++;
        passImageForQuestion1.classList.remove('hidden');
        failImageForQuestion1.classList.add('hidden');
    } else {
        passImageForQuestion1.classList.add('hidden');
        failImageForQuestion1.classList.remove('hidden');
    }

    const answer2 = prompt('Question 2:\nHow old is my son?');
    if(answer2 === '7') {
        correctAnswers++;
        passImageForQuestion2.classList.remove('hidden');
        failImageForQuestion2.classList.add('hidden');
    } else {
        passImageForQuestion2.classList.add('hidden');
        failImageForQuestion2.classList.remove('hidden');
    }

    const answer3 = prompt('Question 3:\nWhat is the best site for watching disc golf?');
    if(answer3.toLowerCase() === 'youtube') {
        correctAnswers++;
        passImageForQuestion3.classList.remove('hidden');
        failImageForQuestion3.classList.add('hidden');
    } else {
        passImageForQuestion3.classList.add('hidden');
        failImageForQuestion3.classList.remove('hidden');
    }

    // Deliver the results message
    resultsName.textContent = userFirstName + ' ' + userLastName;
    resultsGrade.textContent = Math.round(correctAnswers / 3 * 100) + '%';
}
