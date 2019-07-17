function testGuess(userInput, goal) {
    try {
        if(userInput === '') throw 'empty';
        if(isNaN(userInput)) throw 'NaN';

        const userInputAsNumber = Number(userInput);
        if(userInputAsNumber === goal) return 0;
        else if(userInputAsNumber < goal) return -1;
        else return 1;
    }
    catch(err) {
        MessageChannel.innerHTML = 'Error, user input is ' + err;
    }
}
export default testGuess;