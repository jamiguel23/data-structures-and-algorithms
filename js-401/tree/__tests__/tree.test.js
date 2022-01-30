'use strict';

const BT = require('../BT.js');
const BST = require('../BST.js');
const Node = require('../Node.js');



let tree = new BT();

let node1 = new Node(10);
let node2 = new Node(15);
let node3 = new Node(18);
let node4 = new Node(20);

let BSTTree = new BST();

BSTTree.add(10);
BSTTree.add(15);
BSTTree.add(20);
BSTTree.add(25);
BSTTree.add(5);
console.log(BSTTree);



describe('Binary tree', () => {


  it('will create a binary tree with no values in it', () => {

    //empty tree
    let tree = new BT();
    expect(tree).toBeDefined();

  });

  it('will create a BT with values in it', () => {


    tree.root = node1;
    tree.root.left = node2;
    tree.root.right = node3;
    tree.root.left.left = node4;

    //single root
    expect(tree.root.value).toEqual(10);
    expect(tree.root.left.value).toEqual(15);
    expect(tree.root.right.value).toEqual(18);

  });

  // preorder
  it('preorder traversal', () => {
    let arr = [];


    arr.push(tree.preOrder());
    console.log(arr);

    expect(console.log()).toContain('10');
  });

  // will get the rest of the order testing done later


  //contain
  it('BST contain method, should return true if value is in node and false if it does not', () => {

    //contains true
    let trueProbably = BSTTree.contain(15);
    expect(trueProbably).toBeTruthy();


    //contains false
    let falseProbably = BSTTree.contain(99);
    expect(falseProbably).not.toBeTruthy();
  });

  it('should added values to left and right', () => {

    //root value
    expect(BSTTree.root.value).toBe(10);
    //left value
    expect(BSTTree.root.left.value).toBe(5);
    //right value
    expect(BSTTree.root.right.value).toBe(15);

  });


});
