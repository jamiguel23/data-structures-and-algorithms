'use strict';


//Psuedo Code
// InsertionSort(int[] arr)

// FOR i = 1 to arr.length

//   int j <-- i - 1
//   int temp <-- arr[i]

//   WHILE j >= 0 AND temp < arr[j]
//     arr[j + 1] <-- arr[j]
//     j <-- j - 1

//   arr[j + 1] <-- temp


let sampleArr = [8,4,23,42,16,15];

let insertionSort = (arr) => {

  for (let i = 1; i < arr.length; i++){
    let j = i - 1;
    let temp = arr[i];
    console.log('this is i', i);
    console.log('this is j', j);
    console.log('this is temp value', temp);

    while(j >= 0 && temp < arr[j]){
      arr[j+1] = arr[j];
      j = j - 1;
      console.log('while', arr);
    }

    arr[j+1] = temp;
    console.log('for' , arr);
  }

  return arr;
};



console.log(insertionSort(sampleArr));
