'use strict';

const Node = require('../linkedList.js');

xdescribe('Node Test', () => {
  it('constructor()', () => {
    let value = 'zio';
    let node = new Node(value);
    console.log(node.value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});
