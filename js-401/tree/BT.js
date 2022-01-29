'use strict';

const Node = require('./Node.js');



class BT {
  constructor() {
    this.root = null;
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

console.log(JSON.stringify(tree));


// root -> left -> right
function preOrder(node) {

  console.log(node.value);

  if (node.left) {
    preOrder(node.left);
  }

  if (node.right) {
    preOrder(node.right);
  }

}

// left -> root -> right
function inOrder(node) {


  if (node.left) {
    inOrder(node.left);
  }

  console.log(node.value);

  if (node.right) {
    inOrder(node.right);
  }

}

// left -> right -> root
function postOrder(node) {


  if (node.left) {
    postOrder(node.left);
  }


  if (node.right) {
    postOrder(node.right);
  }

  console.log(node.value);
}



preOrder(tree.root);
console.log('~~~~~~~~~~~~');
inOrder(tree.root);
console.log('~~~~~~~~~~~~');
postOrder(tree.root);

module.exports = BT;
