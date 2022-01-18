'use strict';

const LinkedList = require('../linkedListKth.js');

describe('Linked list', () => {

  it('should console log value at k', () => {
    let list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.insertAfter('d', 2);
    console.log(list.kthFromEnd(2));

    expect(list.kthFromEnd(2)).toEqual('a');
  });

});
