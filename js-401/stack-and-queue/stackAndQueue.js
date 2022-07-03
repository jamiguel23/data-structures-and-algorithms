'use strict';

const Node = require('./Node.js');
// const LinkedList = require('./LinkedList.js');

class Stack {
  constructor(){
    this.top = null;
    this.count = 0;
  }

  push(value) {
    let node = new Node(value);

    if(this.top === null){
      this.top = node;
      this.count += 1;
      return;
    } else {
      node.next = this.top;
      this.top = node;
      this.count += 1;
    }

  }

  pop() {
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.count -= 1;
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

  values() {

    let values = [];

    while (this.top !== null){

      let top = this.pop()
      values.push(top)
    }
    return values
  }
  
  duplicates(){

    let list = []

    if(this.top === null){
      return 'stack is empty'
    }

    while (this.count !== 0){
      let current = this.pop()
      let next = this.top
      if (current === next.value){
        list.push(current)
        current = this.pop()
        next = this.top

      } else {
        current = this.pop()
        next = this.top
        console.log('this is current', current, 'this is next', next);
      }

      return list;
    }

  }

}


let stack = new Stack();
// let newStack = new Stack();

stack.push('matt');
stack.push('10');
stack.push('10');
stack.push('foo');


console.log(stack.duplicates())

// console.log(stack.values());

// console.log(stack.peek());
// console.log(newStack.peek());
// console.log(stack.isEmpty());
// console.log('new stack' , newStack);
// console.log(newStack.isEmpty());


module.exports = Stack;
