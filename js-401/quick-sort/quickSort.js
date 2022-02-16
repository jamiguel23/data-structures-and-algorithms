'use strict';


let sampleArr = [8, 4, 23, 42, 16, 15];


function quickSort(arr, left, right) {

  if (left < right) {
    //partition array by setting position of the pivot value

    let position = partition(arr, left, right)

    //sort left
    quickSort(arr, left, position - 1)

    //sort right
    quickSort(arr, position + 1, right)
  }

  return arr;
}

function partition(arr, left, right) {
  // set pivot value as a point of reference 
  let pivot = arr[right];

  // create a variable to track the largest index of numbers lower than the defined pivot

  let low = left - 1;

  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low++
      swap(arr, i, low)
    }
  }

  // place the value of the pivot location in the middle.
  // all numbers smaller than the pivot are on the left, larger on the right.
  swap(arr, i, low);

  // return the pivot index point
  return low + 1

};

function swap(arr, i, low) {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp
}

// console.log('hello')
console.log(quickSort(sampleArr, 0, sampleArr.length));

