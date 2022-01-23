'use strict';

const Node = require('./Node.js');


class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let node = new Node(value);

    if (this.front === null) {
      this.front = node;
      this.back = node;
      return;
    } else {
      this.back.next = node;
      this.back = node;
      return;
    }
  }

  dequeue() {

    let nodeToRemove = this.front;
    this.front = nodeToRemove.next;
    nodeToRemove.next = null;
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

}


module.exports = Queue;
