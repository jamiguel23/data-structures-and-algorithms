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


  breadFirst() {
    // Checking for nodes
    if (!this.root) { throw new Error('No Nodes in This Tree'); }
    // create empty arr for results and queue
    let results = [];
    let queue = [];
    // set the starting/current point to the root
    let curr = this.root;
    // pushing the current to the queue
    queue.push(curr);
    // start the traversal with a while there is a length
    while (queue.length > 0) {
      // assigning current to shifted val
      curr = queue.shift();
      // pushing that node val to the results arr
      results.push(curr.value);
      // if truthy, push curr.left into queue
      if (curr.left) queue.push(curr.left);
      // if truthy, push curr.right into queue
      if (curr.right) queue.push(curr.right);
    }
    return results;
  }

  fizzBuzz() {

    if (this.root === null) {
      throw new Error('empty tree');
    }

    //initialize queue
    let queue = [];
    let result = [];
    let fizzBuzzArr = [];
    let current = this.root;

    //push current in queue so that it is in the front
    queue.push(current);

    // while there are elements in queue move current pointer to next node
    while (queue.length) {

      current = queue.shift();
      result.push(current.value);
      // check if there are children in the nodes
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      console.log('inside the while', result);

    }

    for (let i of result) {
      if((i % 3) === 0 && (i%5) === 0) {
        fizzBuzzArr.push('FizzBuzz');

      }else if((i % 3) === 0 ){
        fizzBuzzArr.push('Fizz');
      } else if ((i%5) === 0){
        fizzBuzzArr.push('Buzz');
      } else {
        fizzBuzzArr.push(i);
      }

    }
    return fizzBuzzArr;
  }
}


const tree = new BT();

let node1 = new Node(10);
let node2 = new Node(15);
let node3 = new Node(18);
let node4 = new Node(20);
let node5 = new Node(24);
let node6 = new Node(61);
let node7 = new Node(99);

tree.root = node1;
tree.root.left = node2;
tree.root.right = node3;
tree.root.left.left = node4;
tree.root.left.right = node5;
tree.root.right.left = node6;
tree.root.right.right = node7;


// tree.breadFirst();

console.log(JSON.stringify(tree));

// let result = tree.findMax();

let result = tree.fizzBuzz();

console.log(result);

module.exports = BT;
