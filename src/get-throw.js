export const ROCK = 'rock';
export const PAPER = 'paper';
export const SCISSORS = 'scissors';

export function getThrowFromNumber(num) {

}

export function getThrow() {
    return getThrowFromNumber(Math.floor(Math.random() * 3));
}