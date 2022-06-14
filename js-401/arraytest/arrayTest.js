'use strict';

Array = ['green', 'yellow', 'black', 'blue', 'red']

function printFirstThree(arr) {

  let firstThree = [];
  let count = 0;

  // if ( count < 2 ){
    for ( let i = 0; i < arr.length; i++){
      firstThree.push(arr[i]);
      count++;
      console.log('this is count' , count)
    }
  // }

  return firstThree
}

console.log(printFirstThree(Array));
