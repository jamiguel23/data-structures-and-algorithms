'use strict'

function fib(n){
  if (n < 3) return 1; //base case
  return fib(n-1) + fib(n-2);
}

console.log(fib(44))
