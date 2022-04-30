const Node = require('./Node.js');
// const LinkedList = require('./LinkedList.js');

class Stack {
  constructor(){
    this.top = null;
    this.count = 0
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
}

module.exports = Stack;
