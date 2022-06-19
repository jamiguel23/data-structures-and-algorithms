"use strict";

//array
Array = ["green", "yellow", "black", "blue", "red"];

// function that takes in an array
function lookFirstThree(arr) {
  let firstThree = [];
  let count = 0;


  //iterave solution
  for (let i = 0; i < arr.length; i++) {
    firstThree.push(arr[i]);
    count++;
    // end the for loop
    if (count === 3) return firstThree;
  }


  // return firstThree;
}

console.log(lookFirstThree(Array));
