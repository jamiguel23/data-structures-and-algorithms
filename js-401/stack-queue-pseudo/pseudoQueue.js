'use strict';

let Node = require('./Node.js');
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

    // let node = new Node(value);

    // if (this.front === null) {
    //   this.front = node;
    //   this.back = node;
    //   return;
    // } else {
    //   this.back.next = node;
    //   this.back = node;
    //   return;
    // }

  }

  dequeue() {

    let nodeToRemove = this.front;
    // console.log(nodeToRemove);
    this.front = nodeToRemove.next;
    nodeToRemove.next = null;
    if (!this.front) {
      this.back = null;
    }
    return nodeToRemove.value;
  }

}

let queue = new PseudoQueue();
queue.enqueue(20);
queue.enqueue(15);
queue.enqueue(10);
queue.enqueue(5);
// let result = queue.dequeue();

console.log(queue);

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
