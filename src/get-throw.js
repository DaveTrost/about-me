export const ROCK = 'rock';
export const PAPER = 'paper';
export const SCISSORS = 'scissors';
export const TIE = 'tie';
export const USER_WINS = 'user wins';
export const COMPUTER_WINS = 'computer wins';
export const STARTING_CHIPS = 50;

export function getThrowFromNumber(num) {
    switch(num) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

export function getThrow() {
    return getThrowFromNumber(Math.floor(Math.random() * 3));
}

export function getWinner(user, computer) {
    if(user === computer) {
        return TIE;
    }
    else if((user === ROCK && computer === SCISSORS) || (user === PAPER && computer === ROCK) || (user === SCISSORS && computer === PAPER)) {
        return USER_WINS;
    } 
    else {
        return COMPUTER_WINS;
    }
}