'use strict';

const LinkedList = require('../linkedList.js');

describe('Linked List', () => {

  it('constructor()', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

});

describe('append list', () => {

  it('should append to a linked list', () => {
    let list = new LinkedList();
    let startingValue = 'meg';
    list.insert(startingValue);
    expect(list.head.value).toEqual(startingValue);

    let newValue = 'peter';
    list.insert(newValue);
    expect(list.head.value).toEqual(newValue);

    // verify
    console.log(list);

  });

});
