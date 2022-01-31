'use strict';

const Node = require('../Node');
const BT = require('../BT');

describe(' get max testing', () => {

  it('should get max value out of tree', () => {

    const tree = new BT();

    let node1 = new Node(10);
    let node2 = new Node(15);
    let node3 = new Node(18);
    let node4 = new Node(20);
    let node5 = new Node(24);
    let node6 = new Node(30);
    let node7 = new Node(99);

    tree.root = node1;
    tree.root.left = node2;
    tree.root.right = node3;
    tree.root.left.left = node4;
    tree.root.left.right = node5;
    tree.root.right.left = node6;
    tree.root.right.right = node7;

    let result = tree.findMax();

    expect(result).toEqual(99);
  });
});
