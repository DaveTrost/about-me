function testGuess(userInput, goal) {
    if(userInput === '') throw 'error: userInput is empty';
    if(isNaN(userInput)) throw 'error: userInput is NaN';
    if(goal === '') throw 'error: goal is empty';
    if(isNaN(goal)) throw 'error: goal is NaN';

    const userInputAsNumber = Number(userInput);
    if(userInputAsNumber === goal) return 0;
    else if(userInputAsNumber < goal) return -1;
    else return 1;
}
export default testGuess;