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

  sort(){
    if(this.front === null){
      return 'queue is empty'
    }

    let sortedArr = [];

    while(this.isEmpty() == false){

      sortedArr.push(this.dequeue())

    }

    console.log(sortedArr);
  }

}

let queue = new Queue()

queue.enqueue(3)


module.exports = Queue;
