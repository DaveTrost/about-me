import { getThrowFromNumber, getThrow, ROCK, PAPER, SCISSORS, getWinner, TIE, USER_WINS, COMPUTER_WINS } from '../src/get-throw.js';

QUnit.module('rock paper scissors test module');

QUnit.test('test 0 returns rock', (assert) => assert.equal(getThrowFromNumber(0), ROCK));
QUnit.test('test 1 returns paper', (assert) => assert.equal(getThrowFromNumber(1), PAPER));
QUnit.test('test 2 returns scissors', (assert) => assert.equal(getThrowFromNumber(2), SCISSORS));
QUnit.test('test that user\'s rock beats computer\'s scissors', (assert) => assert.equal(getWinner(ROCK, SCISSORS), USER_WINS));
QUnit.test('test that user\'s scissors beat computer\'s paper', (assert) => assert.equal(getWinner(SCISSORS, PAPER), USER_WINS));
QUnit.test('test that user\'s paper beats computer\'s rock', (assert) => assert.equal(getWinner(PAPER, ROCK), USER_WINS));
QUnit.test('test that computer can win', (assert) => assert.equal(getWinner(PAPER, SCISSORS), COMPUTER_WINS));
QUnit.test('test a tie condition', (assert) => assert.equal(getWinner(PAPER, PAPER), TIE));
QUnit.test('test distribution of randomness', (assert) => assert.equal(isDistributionBalanced(), true));

function isDistributionBalanced() {
    let countR = 0;
    let countP = 0;
    let countS = 0;
    let result;
    const tries = 1000000;
    for(let i = 0; i < tries; i++) {
        result = getThrow();
        result === ROCK ? countR++ : null;
        result === PAPER ? countP++ : null;
        result === SCISSORS ? countS++ : null;
    }
    return (Math.abs(countR - tries / 3) + Math.abs(countP - tries / 3) + Math.abs(countS - tries / 3) < 0.005 * tries);
}