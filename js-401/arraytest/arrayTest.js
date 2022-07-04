"use strict";

//array
Array = ["green", "yellow", "black", "blue", "red"];

// function that takes in an array
function lookFirstThree(arr) {
  //set empty array
  let firstThree = [];
  let count = 0;


  //iterave solution
  for (let i = 0; i < arr.length; i++) {
    firstThree.push(arr[i]);
    //increment count by 1
    count++;
    // end the for loop
    if (count === 3) return firstThree;
  }


  // return firstThree;
}

// Given an Array, Find the minimum value
const arrMin = (arr) => {


  let min = Infinity

  for (let i = 0; i < arr.length; i++){

    if(arr[i] < min){
      min = arr[i]
      // console.log('this is min', min)

    }

  }
  return  min
}

let numsArr = [5, 8, 3, 1, 3, 7]
//testing in console
// console.log(lookFirstThree(Array));

console.log(arrMin(numsArr));
