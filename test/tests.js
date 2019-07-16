import isYes from '../src/isYes.js';
const test = QUnit.test;

test('Test mixed-case \'Yes\'', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'Yes';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('Test upper-case \'YES\'', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'YES';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('Test lowercase \'yes\'', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'yes';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('Test a negative response \'no\'', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'no';
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

