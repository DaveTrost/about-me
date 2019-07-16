// import things
import isYes from './isYes.js';

// reference needed DOM elements
const quizButtonItem = document.getElementById('quiz-button');
// const quizResultsArea = document.getElementById('results-area');
// const passImageForQuestion1 = document.getElementById('pass-img-1');
// const failImageForQuestion1 = document.getElementById('fail-img-1');
// const passImageForQuestion2 = document.getElementById('pass-img-2');
// const failImageForQuestion2 = document.getElementById('fail-img-2');
// const passImageForQuestion3 = document.getElementById('pass-img-3');
// const failImageForQuestion3 = document.getElementById('fail-img-3');


// initialization (setup, state variables)
isYes('yes');
isYes(' Yes');

// Event Handlers
quizButtonItem.onclick = startQuiz();

function startQuiz() {
    console.log('Quiz reached');
}
