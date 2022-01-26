'use strict';

const validateBrack = require('../bracket.js');

describe('testing bracket function', () => {

  it('should return true or false if there are matching and proper brackets', () => {

    let string = '{}]()';
    let otherStr = '{}[]()';
    let someStr = '[{}][()]';

    let result = validateBrack(string);
    let otherRes = validateBrack(otherStr);
    let someRes = validateBrack(someStr);

    expect(result).toEqual(false);
    expect(otherRes).toEqual(true);
    expect(someRes).toEqual(true);
  });
});
