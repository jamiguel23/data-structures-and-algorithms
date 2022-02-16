'use strict';


function quickSort(arr){
  let left = 0;
  let right = arr.length-1;
  _quickSort(arr, left, right);
  return arr;
};


function _quickSort(arr, left, right) {
  if (left < right) {
    // Partition the array by setting the position of the pivot value
    let position = partition(arr, left, right)
    // Sort the left
    _quickSort(arr, left, position - 1)
    // Sort the right
    _quickSort(arr, position + 1, right)
  }
  return arr;
}

function partition(arr, left, right) {
  // set a pivot value as a point of reference
  let pivot = arr[right]
  // create a variable to track the largest index of numbers lower than the defined pivot
  let low = left - 1
  for (let i = left; i <= right; i++) {
    if (arr[i] <= pivot) {
      low++
      swap(arr, i, low)
    }
  }
  // place the value of the pivot location in the middle.
  // all numbers smaller than the pivot are on the left, larger on the right.

  // return the pivot index point
  return low
}

function swap(arr, i, low) {
  let temp;
  temp = arr[i]
  arr[i] = arr[low]
  arr[low] = temp
}


let sampleArr = [8, 4, 23, 42, 16, 15];
// let left = 0
// let right = sampleArr.length-1
// console.log('hello')
console.log(quickSort(sampleArr));


module.exports = quickSort;
