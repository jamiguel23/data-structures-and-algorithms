"use strict";

Array = ["green", "yellow", "black", "blue", "red"];

function printFirstThree(arr) {
  let firstThree = [];
  let count = 0;


  for (let i = 0; i < arr.length; i++) {
    firstThree.push(arr[i]);
    count++;
    if (count === 3) return firstThree;
  }


  return firstThree;
}

console.log(printFirstThree(Array));
