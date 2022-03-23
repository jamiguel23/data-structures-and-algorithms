'use strict';

const convertToRoman = (num) => {

  var romanToNum = {
    M: 1000,
    // CM: 900,
    D: 500,
    // CD: 400,
    C: 100,
    // XC: 90,
    L: 50,
    // XL: 40,
    X: 10,
    // IX: 9,
    V: 5,
    // IV: 4,
    I: 1
  };


  let roman = '';

  for (let i in romanToNum){
    console.log(i, romanToNum[i])
    while ( num >= romanToNum[i]){

      if (num >= 900){
        roman += 'CM'
        num -= 900
        break
      }
      if (num >= 400){
        roman += 'CD'
        num -= 400
        break
      }

      if (num >= 90){
        roman += 'XC'
        num -= 90
        break
      }

      if (num >= 40){
        roman += 'XL'
        num -= 40
        break
      }
      if (num === 9){
        roman += 'IX'
        num -= 9
        break
      }

      if (num === 4){
        roman += 'IV'
        num -= 4
        break
      }

      console.log(num)
      roman += i
      num -= romanToNum[i];
      console.log('this is the new num after subtracting' , num)
    }
  }

  return roman
}

let result = convertToRoman(999);

console.log('this is the result', result)
