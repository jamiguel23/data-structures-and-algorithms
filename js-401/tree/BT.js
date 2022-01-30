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

}

const tree = new BT();

let node1 = new Node(10);
let node2 = new Node(15);
let node3 = new Node(18);
let node4 = new Node(20);
let node5 = new Node(24);
let node6 = new Node(30);

tree.root = node1;
tree.root.left = node2;
tree.root.right = node3;
tree.root.left.left = node4;
tree.root.left.right = node5;
tree.root.right.left = node6;


tree.preOrder();
console.log('************');
tree.inOrder();
console.log('************');
tree.postOrder();


module.exports = BT;
