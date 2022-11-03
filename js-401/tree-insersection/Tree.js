'use strict';



const LinkedList = require('./LinkedList.js');


// node class with null left and right an value through constructor
class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null
  }
}

class Tree {

  constructor(){
    this.root = null
  }

  // Root -> Left -> Right
  preOrder() {

    let arr = []
    const _preOrder = (root) => {



      if(!root){

        return
      }

      arr.push(root.value)
      _preOrder(root.left)
      _preOrder(root.right)
    }
    _preOrder(this.root);
    return arr;

  }
}



// const tree = new Tree();

// let node1 = new Node(10);
// let node2 = new Node(15);
// let node3 = new Node(18);
// let node4 = new Node(20);
// let node5 = new Node(24);
// let node6 = new Node(30);

// tree.root = node1;
// tree.root.left = node2;
// tree.root.right = node3;
// tree.root.left.left = node4;
// tree.root.left.right = node5;
// tree.root.right.left = node6;

// console.log(tree.preOrder());

module.exports = Tree;
