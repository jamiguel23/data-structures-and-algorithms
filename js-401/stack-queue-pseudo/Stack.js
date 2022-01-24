'use strict';

const Node = require('./Node.js');

class Stack {
  constructor(){
    this.top = null;
  }

  push(value) {
    let node = new Node(value);

    if(this.top === null){
      this.top = node;
      return;
    } else {
      node.next = this.top;
      this.top = node;
    }

  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek(){

    if(this.top === null){
      return 'empty';

    }else {
      let value = this.top.value;
      return value;
    }
  }

}

module.exports = Stack;

