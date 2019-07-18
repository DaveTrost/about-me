import { getThrowFromNumber, ROCK, PAPER, SCISSORS } from '../src/get-throw.js';

QUnit.module('rock paper scissors test module');

QUnit.test('test 0 returns rock', (assert) => assert.equal(getThrowFromNumber(0), ROCK));
QUnit.test('test 1 returns paper', (assert) => assert.equal(getThrowFromNumber(1), PAPER));
QUnit.test('test 2 returns scissors', (assert) => assert.equal(getThrowFromNumber(2), SCISSORS));
