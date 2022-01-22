'use strict';

const Node = require('./Node.js');
const LinkedList = require('./LinkedList.js');

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

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }
}

let list = new LinkedList();

list.append('matt');
// list.append('miguel');
// list.append('23');


// console.log(JSON.stringify(list));

let stack = new Stack();
let newStack = new Stack();

stack.push('matt');
stack.push('miguel');
stack.push('10');
stack.push('foo');
let val = stack.pop();

// console.log(JSON.stringify(stack), val);
// console.log(stack.peek());
console.log(newStack.peek());
console.log(stack.isEmpty());
console.log('new stack' , newStack);
console.log(newStack.isEmpty());
