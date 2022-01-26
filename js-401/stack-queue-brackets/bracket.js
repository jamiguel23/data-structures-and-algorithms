'use strict';

const Stack = require('./Stack');

function validateBrack(str) {

  let stack = new Stack();

  for(let i=0; i < str.length; i++){
    if ( str[i] === '{' || str[i] === '(' || str[i] === '['){
      stack.push(str[i]);
    } else if (str[i] === '}' || str[i] === ')' || str[i] === ']') {
      if (stack.isEmpty()){
        return false;
      } else if ((stack.peek() === '{' && str[i] === '}') || (stack.peek() === '(' && str[i] === ')') || (stack.peek() === '[' && str[i] === ']')){
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if(stack.isEmpty()){
    return true;
  } else{
    return false;
  }
}

let string = '{}]()';
let otherStr = '{}[]()';
let someStr = '[{}][()]';

let result = validateBrack(string);
let otherRes= validateBrack(otherStr);
let someRes = validateBrack(someStr);

console.log(result,otherRes,someRes );



module.exports = validateBrack;


