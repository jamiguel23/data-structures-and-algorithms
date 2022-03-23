'use strict';

const convertToRoman = (num) => {

  var romanToNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let roman = '';

  for (var i in romanToNum){
    console.log(i, romanToNum[i])
    while ( num >= romanToNum[i]){

      roman += i
      num -= romanToNum[i];
      console.log('this is the new num after subtracting' , num)
    }
  }

  return roman
}

let result = convertToRoman(400);

console.log('this is the result', result)
