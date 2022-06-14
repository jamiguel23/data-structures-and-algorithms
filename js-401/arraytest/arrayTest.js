"use strict";

Array = ["green", "yellow", "black", "blue", "red"];

function lookFirstThree(arr) {
  let firstThree = [];
  let count = 0;


  for (let i = 0; i < arr.length; i++) {
    firstThree.push(arr[i]);
    count++;
    if (count === 3) return firstThree;
  }


  return firstThree;
}

console.log(lookFirstThree(Array));
