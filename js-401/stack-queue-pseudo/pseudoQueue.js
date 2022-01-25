'use strict';

let Stack = require('./Stack.js');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    // this.front = null;
    // this.back = null;
  }

  enqueue(value) {

    let newStack = this.stack1;
    newStack.push(value);


  }

  dequeue() {
    while (this.stack1.top !== null) {
      let top = this.stack1.pop();
      this.stack2.push(top);
    }
    return this.stack2.pop();
  }

}

let queue = new PseudoQueue();
queue.enqueue(20);
queue.enqueue(15);
queue.enqueue(10);
queue.enqueue(5);
let result = queue.dequeue();

// console.log(queue.stack1.top);

// console.log(JSON.stringify(queue));

console.log(result);


// let stack = new Stack();
// let val = 50;
// let newVal = 30;
// let otherVal = 80;

// let pseudoQueue = new PseudoQueue();

// stack.push(val);
// stack.push(newVal);
// stack.push(otherVal);


// console.log(JSON.stringify(stack));

// let popResult = stack.pop();

// console.log(popResult);
// pseudoQueue.enqueue(stack);

// console.log(JSON.stringify(pseudoQueue));
// console.log('stack after added to queue', JSON.stringify(stack));

// let result = pseudoQueue.dequeue();

// console.log(result);

module.exports = PseudoQueue;
