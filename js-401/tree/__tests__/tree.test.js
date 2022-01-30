'use strict';

const BT = require('../BT.js');
const BST = require('../BST.js');
const Node = require('../Node.js');

describe('Binary tree', () => {

  it('will create a binary tree with left and right values', () => {

    let tree = new BT();
    expect(tree).toBeDefined();

    let node1 = new Node(10);
    let node2 = new Node(15);
    let node3 = new Node(18);
    let node4 = new Node(20);

    tree.root = node1;
    tree.root.left = node2;
    tree.root.right = node3;
    tree.root.left.left = node4;

    console.log('*******', tree.root.left.value);

    expect(tree.root.value).toEqual(10);
    expect(tree.root.left.value).toEqual(15);
    expect(tree.root.right.value).toEqual(18);
  });

});
