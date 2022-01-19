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

describe('insert test', () => {

  it('should insert a new node to the head', () => {
    let list = new LinkedList();
    let value = 'cookie';
    list.insert(value);
    // console.log('Inside insert:', list);
    expect(list.head.value).toEqual(value);

  });

});

describe(' includes test', () => {

  it('should check to see if node exist', () => {
    let list = new LinkedList();
    let value = 'cookie';
    list.insert(value);

    let newValue = 'gas';
    list.append(newValue);

    // console.log('inside made list', list);

    let falseVal = 'life';

    // console.log('inside boolean: should be false:', list.includes(falseVal));
    expect(list.includes(falseVal)).toBeFalsy();
    // console.log('inside boolean should be true:', list.includes(newValue));
    expect(list.includes(newValue)).toBeTruthy();
  });

});

describe('to string test', () => {

  it('should return the values into a string', () => {
    let list = new LinkedList();
    let initialValue = 'cookie';
    list.insert(initialValue);
    let secondValue = 'gas';
    list.append(secondValue);
    let stringTest = list.toString();

    expect.stringContaining(stringTest);
  });

});
