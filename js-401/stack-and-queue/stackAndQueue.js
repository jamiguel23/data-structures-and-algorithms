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

  // working on it
  //suppose to return a list of duplicate values from a stack
  duplicates(){

    let list = []

    if(this.top === null){
      return 'stack is empty'
    }

    while (this.top.next !== null){
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


  //working on recursive solution to finding max value
  max(){

    let maxValue = Number.NEGATIVE_INFINITY

    const _walk = (stack) => {

      if (this.top === null){
        return maxValue
      }

      if(this.top.value > maxValue){
        maxValue = this.top.value
        _walk(this.pop())
      } else {
        _walk(this.pop())
      }

    }

    _walk(this.top)
    return maxValue
  }

  min(){
    let minValue = Number.POSITIVE_INFINITY

    while(this.top){

      if(this.top.value < minValue){
        minValue = this.top.value
        this.pop()
      } else {

        this.pop()
      }
    }

    return minValue
 }

}

//iterative max values solution
// const max = (stack) => {

//   let maxValue = Number.NEGATIVE_INFINITY

//   while (stack.top){

//     if(stack.top.value > maxValue){
//       maxValue = stack.top.value
//       stack.pop()
//     } else {
//       stack.pop()
//     }

//   }

//   return maxValue;
// }


let stack = new Stack();

stack.push(3000);
stack.push(300);
stack.push(150);
stack.push(100);


console.log(stack.max())
// console.log(stack.min())



module.exports = Stack;
