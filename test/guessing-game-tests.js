import testGuess from '../src/testGuess.js';

QUnit.test('Test the correct number', (assert) => assert.equal(testGuess('7', 7), 0));
QUnit.test('Test too low', (assert) => assert.equal(testGuess('1', 7), -1));
QUnit.test('Test too high', (assert) => assert.equal(testGuess('10', 7), 1));
QUnit.test('Test empty input', (assert) => {
    assert.throws(
        () => testGuess('', 7), 
        /empty/,
        'okay - error thrown with /empty/'
    );
});
QUnit.test('Test NaN input', (assert) => {
    assert.throws(() => testGuess('abs', 7), /NaN/, 'okay - error thrown with /NaN/');
});

