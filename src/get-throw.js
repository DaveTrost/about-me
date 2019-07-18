export const ROCK = 'rock';
export const PAPER = 'paper';
export const SCISSORS = 'scissors';

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