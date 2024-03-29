'use strict';

const Node = require('./Node.js');
const treeify = require('treeify')



class BT {
  constructor() {
    this.root = null;
  }

  // root -> left -> right recursive
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

  //invert tree

  invert(){

    let _invert = (node) => {

      if (node == null){
        return
      }

      _invert(node.left);
      _invert(node.right);

      let hold = node.left
      node.left = node.right;
      node.right = hold;
    }

    _invert(this.root);
    return this.root
  }

}

//create new tree
const tree = new BT();

let node1 = new Node(10);
let node2 = new Node(15);
let node3 = new Node(18);
let node4 = new Node(20);
// let node5 = new Node(24);
// let node6 = new Node(30);
// let node7 = new Node(50)

// set nodes to positions of trees
tree.root = node1;
tree.root.left = node2;
tree.root.right = node3;
tree.root.left.left = node4;
// tree.root.left.right = node5;
// tree.root.right.left = node6;
// tree.root.right.right = node7


console.log('this is tree', JSON.stringify(tree))
console.log('this is inverted tree', JSON.stringify(tree.invert()));
// console.log('************');
// tree.inOrder();
// console.log('************');
// tree.postOrder();


module.exports = BT;
