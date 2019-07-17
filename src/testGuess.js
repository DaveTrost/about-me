function testGuess(userInput, goal) {
    if(userInput === '') throw 'userInput is empty';
    if(isNaN(userInput)) throw 'userInput is NaN';
    if(goal === '') throw 'goal is empty';
    if(isNaN(goal)) throw 'goal is NaN';

    const userInputAsNumber = Number(userInput);
    if(userInputAsNumber === goal) return 0;
    else if(userInputAsNumber < goal) return -1;
    else return 1;
}
export default testGuess;