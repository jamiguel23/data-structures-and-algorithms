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

  //nearest value ittertive
  nearestValue(target){

    let current = this.root;
    let result = Infinity;


    while (current !== null){

      if (Math.abs(current.value - target) < (Math.abs(result - target))) {
        result = current.value;
      }

      if (target > current.value) {

        current = current.right
      } else {
        current = current.left
      }

    }

    return result
  }
}

// create a new tree to test
let tree = new BST();

//add values to the tree
tree.add(50);
tree.add(52)
tree.add(55);
tree.add(41);
tree.add(40);
tree.add(43);


let nearestResult = tree.nearestValue(1)

console.log(nearestResult);


// console.log(JSON.stringify(tree));
// console.log('@@@@@@@@@@@@@@@');
// console.log(result);
// console.log('@@@@@@@@@@@@@@@');
// console.log(otherResult);


module.exports = BST;
