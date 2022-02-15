'use strict';

const mergeSort = require('../mergeSort.js');

let sampleArr = [8,4,23,42,16,15];
let inOrder = [4, 8, 15, 16, 23, 42];


describe('Merge Sort Function', () => {
  
  it('should correctly sort the array', () => {
    let test = mergeSort(sampleArr);
    expect(test).toBeDefined();
    expect(test).toEqual(inOrder);
  });
})
