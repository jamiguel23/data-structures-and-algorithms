'use strict'

let reverseStr = (str) => {
 
  let reversed = '';

  for (let i = str.length - 1; i>= 0; i--){

    reversed += str[i];
  }

  return reversed

}


let string = 'hello'

console.log(reverseStr(string));

