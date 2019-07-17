import rpsNumberToString from '../src/get-throw.js/index.js.js.js';

const test = QUnit.module('rock paper scissors test module');

QUnit.test('test 1 returns rock', (assert) => assert.equal(rpsNumberToString(1), 'rock'));
