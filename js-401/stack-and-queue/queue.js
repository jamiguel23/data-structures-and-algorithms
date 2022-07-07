'use strict';

const Node = require('./Node.js');


class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.count = 0
  }

  enqueue(value) {
    let node = new Node(value);

    if (this.front === null) {
      this.front = node;
      this.back = node;
      this.count += 1;
      return;
    } else {
      this.back.next = node;
      this.back = node;
      this.count += 1;
      return;
    }
  }

  dequeue() {

    let nodeToRemove = this.front;
    this.front = nodeToRemove.next;
    nodeToRemove.next = null;
    this.count -=1;
    if (!this.front) {
      this.back = null;
    }
    return nodeToRemove.value;
  }

  peek(){
    if ( this.front === null){
      return 'empty head';
    } else {
      return this.front.value;
    }
  }

  isEmpty() {
    if (this.front === null) {
      return true;
    } else {
      return false;
    }
  }

  // Time - O(n * log n)
  // Space = O(n)
  sort(){
    if(this.front === null){
      return 'queue is empty'
    }

    let unsortedArr = [];

    while(this.isEmpty() == false){

      unsortedArr.push(this.dequeue())

    }

    let sortedArr = unsortedArr.sort(function(a, b){return a - b})
    // console.log(sortedArr);

    for(let i=0; i<sortedArr.length; i++){
      this.enqueue(sortedArr[i])
      // console.log(this.front)
    }

    return this.front

  }

}

let queue = new Queue()

queue.enqueue(7)
queue.enqueue(10)
queue.enqueue(3)
queue.enqueue(33)

console.log(queue.sort())

module.exports = Queue;
