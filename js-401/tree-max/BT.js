'use strict';

const Node = require('./Node.js');



class BT {
  constructor() {
    this.root = null;
  }

  // root -> left -> right
  preOrder() {

    let helper = (node) => {
      console.log(node.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    };
    helper(this.root);

  }

  // left -> root -> right
  inOrder() {

    let helper = (node) => {
      if (node.left) helper(node.left);
      console.log(node.value);
      if (node.right) helper(node.right);
    };
    helper(this.root);

  }

  // left -> right -> root
  postOrder() {

    let helper = (node) => {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      console.log(node.value);
    };
    helper(this.root);
  }

  //find highest value
  findMax() {

    let maxValue = 0;
    // let res = [];
    let walk = (node) => {
      if (node.left) walk(node.left);
      if (node.value > maxValue) {
        maxValue = node.value;
        // res.push(maxValue);
      }
      if (node.right) walk(node.right);
    };
    walk(this.root);
    // console.log(res);
    return maxValue;

  }

}

// make new tree
const tree = new BT();

let node1 = new Node(3);
let node2 = new Node(15);
let node3 = new Node(18);
let node4 = new Node(20);
let node5 = new Node(24);
let node6 = new Node(30);
let node7 = new Node(10);

tree.root = node1;
tree.root.left = node2;
tree.root.right = node3;
tree.root.left.left = node4;
tree.root.left.right = node5;
tree.root.right.left = node6;
tree.root.right.right = node7;

console.log(JSON.stringify(tree));

let result = tree.findMax();

console.log(result);

module.exports = BT;
