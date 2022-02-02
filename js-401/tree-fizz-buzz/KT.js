'use strict';

const KNode = require('./KNode.js');

class KT {
  constructor(k){
    this.root= null;
    this.k = k;
  }

  fizzBuzz() {

    if (this.root === null) {
      throw new Error('empty tree');
    }

    //initialize queue
    let queue = [];
    let result = [];
    let newKTree = new KT(this.k);
    let current = this.root;

    //push current in queue so that it is in the front
    queue.push(current);

    // while there are elements in queue move current pointer to next node
    while (queue.length) {

      current = queue.shift();
      result.push(current.value);
      // check if there are children in the nodes
      if (current.children) queue.push(current.children);
      // if (current.right) queue.push(current.right);
      console.log('inside the while', result);

    }

    // for (let i of result) {
    //   if((i % 3) === 0 && (i%5) === 0) {
    //     newKTree.push('FizzBuzz');

    //   }else if((i % 3) === 0 ){
    //     newKTree.push('Fizz');
    //   } else if ((i%5) === 0){
    //     newKTree.push('Buzz');
    //   } else {
    //     newKTree.push(i);
    //   }

    // }
    // return newKTree;
  }
}

const kTree = new KT(3);

let node1 = new KNode(10, kTree.k);
let node2 = new KNode(15, kTree.k);
let node3 = new KNode(18, kTree.k);
let node4 = new KNode(20, kTree.k);
let node5 = new KNode(24, kTree.k);
let node6 = new KNode(61, kTree.k);
let node7 = new KNode(99, kTree.k);

kTree.root = node1;
kTree.root.children[0] = node2;
kTree.root.children[1] = node3;
kTree.root.children[2] = node4;
kTree.root.children[0].children[0] = node5;
kTree.root.children[0].children[1] = node6;
kTree.root.children[1].children[0] = node7;

console.log(JSON.stringify(kTree));

let result = kTree.fizzBuzz();

console.log(result);

module.exports = KT;
