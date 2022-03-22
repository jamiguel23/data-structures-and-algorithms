'use strict';

const Node = require('./Node.js');
const BT = require('./BT.js');

class BST extends BT {
  constructor() {
    super();
  }

  add(value) {
    let node = new Node(value);

    if (this.root === null) {
      this.root = node;
      return this;
    }


    let current = this.root;
    while(current){
      if(value === current.value) return undefined;
      if(value < current.value){
        if(current.left === null){
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if(current.right === null){
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }


  }

  contain(value){
    let current = this.root;
    while (current !== null){
      if (current.value === value){
        //found
        return true;
      } else if (value < current.value){
        // if value is less than parent check left
        current = current.left;
      } else {
        // go right if value is greater
        current = current.right;
      }
    }
    return false;
  }

  nearestValue(num){

    let current = this.root;


    let result = Infinity;

    while(current !== null){
      // console.log(current)

      if (Math.abs(current.value - num) < Math.abs(result - num )) {
        result = current.value;
        // console.log(result);

      }

      if (num > current.value){
        current = current.right;
      } else {
        current = current.left;
      }

    }

    return result
  }


}

let tree = new BST();

tree.add({
  stories: 342,
  hours : 50,
});

tree.add({
  stories: 430,
  hours : 62,
});

tree.add({
  stories: 400,
  hours : 56,
});

tree.add({
  stories: 324,
  hours : 46,
});

tree.add({
  stories: 99,
  hours : 11,
});

let nearestResult = tree.nearestValue(53);

// console.log(tree.root.value.hours)

// console.log(nearestResult);

// let result = tree.contain(55)
// let otherResult = tree.contain(99);

console.log(JSON.stringify(tree));
// console.log('@@@@@@@@@@@@@@@');
// console.log(result);
// console.log('@@@@@@@@@@@@@@@');
// console.log(otherResult);


module.exports = BST;
