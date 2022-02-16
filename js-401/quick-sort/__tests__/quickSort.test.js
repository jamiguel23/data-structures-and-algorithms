'use strict';

const quickSort = require('../quickSort.js')


let sampleArr = [8, 4, 23, 42, 16, 15];

describe(' testing quick sort function', () =>{

  it('should sort the sample array', () => {

    let result = quickSort(sampleArr);

    expect(result).toEqual([4, 8, 15, 16, 23, 42])
  })
})
