'use strict';

let factoral = (num) => {

  let result = 1;
  for (let i = 1; i<=num; i++){

    result *= i
  }

  return result;
}

console.log(factoral(6));
