import testGuess from '../src/testGuess.js';

QUnit.test('Test the correct number', (assert) => assert.equal(testGuess('7', 7), 0));
QUnit.test('Test too low', (assert) => assert.equal(testGuess('1', 7), -1));
QUnit.test('Test too high', (assert) => assert.equal(testGuess('10', 7), 1));
// QUnit.test('Test a null return', (assert) => assert.throws(testGuess('abc', 7), errorThrown, 'throws with just a message, not using the \'expected\' argument'));
// QUnit.test('Test an error return', (throws) => throws(testGuess('abc', 7), 'Must throw error to pass'));
