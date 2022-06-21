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

//testing in console
console.log(lookFirstThree(Array));
