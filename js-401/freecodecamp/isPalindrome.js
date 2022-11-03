'use strict'


// this function will test if a number is a palindrome
let isNumPalindrome = (num) => {

  let str = num.toString()
  let reversed = ''

  for ( let i = str.length - 1; i >= 0; i--){

    reversed += str[i];
  }

  if ( reversed == num){
    return true
  } else {
    return false
  }


}

//false
console.log(isNumPalindrome(31));
//true
console.log(isNumPalindrome(313));
