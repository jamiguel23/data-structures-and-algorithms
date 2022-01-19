'use strict';

const Node = require('../linkedList.js');

xdescribe('Node Test', () => {
  it('should test the node contructor', () => {
    let value = 'cookie';
    let node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});
