'use strict';

const Node = require('../linkedList');

xdescribe('Node Test', () => {
  it('should test the node constructor', () => {
    let value = 'cookie';
    let node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});
