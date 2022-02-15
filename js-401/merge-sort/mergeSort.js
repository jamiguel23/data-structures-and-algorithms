'use strict';

// console.log('hello');

function mergeSort(arr) {

  //declare n to the array length
  let n = arr.length
  console.log(arr)

  //if length is greater than 1
  if (n > 1){
    //spliting in half
    let mid = Math.floor(n / 2);
    // console.log('middle', mid)
    let left = arr.slice(0, mid);
    // console.log('mergeSort left', left)
    let right = arr.slice(mid);
    // console.log('mergeSort right', right)

    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
}


function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  console.log('left', left, 'right', right, 'arr', arr);
  // Moves through the left and right arrays to find the lowest
  while ((i < left.length) && (j < right.length)) {
    // beginning of each array
    // the values will be the lowest, finds the lowest
    // and adds it to the array
    if (left[i] <= right[j]) {
      arr[k] = left[i]
      i = i + 1
    }
    else {
      arr[k] = right[j]
      j = j + 1
    }
    // Moves through our final array
    k = k + 1
  }
  if (i === left.length) {
    arr[k] = right[j]
  } else {
    arr[k] = left[i]
  }

}



let sampleArr = [8,4,23,42,16,15];

console.log(mergeSort(sampleArr));
