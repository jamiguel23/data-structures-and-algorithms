'use strict';

const insertionSort = require('../insertionSort.js');

let testArr = [8, 4, 23, 42, 16, 15];
let perfectOrder = [4, 8, 15, 16, 23, 42];
let failTest = [8, 4, 23, 42, 16, 15]


describe('insertion sort test', () => {

  
  it('should correctly sort the array', () => {
    let test = insertionSort(testArr);
    expect(test).toBeDefined();
    expect(test).toEqual(perfectOrder);
  });

  it('should not equal the same array', () => {
    let test = insertionSort(testArr);
    expect(test).not.toBe(failTest);

  });
});

