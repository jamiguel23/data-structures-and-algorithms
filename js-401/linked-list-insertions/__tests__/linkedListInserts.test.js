'use strict';

const LinkedList = require('../linkListInserts.js');

describe('Linked List', () => {

  it('linkedList constructor()', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

});

describe('testing insertBefore and after', () => {

  it('insertBefore given a value and a new value', () => {

    let list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('d');
    list.insertBefore('d', 'c');
    console.log(JSON.stringify(list));

    expect(list[2]).toEqual('c');
  });

});

