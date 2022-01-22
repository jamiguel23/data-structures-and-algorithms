'use strict';

const Queue = require('../stackAndQueue.js');
const Stack = require('../stackAndQueue.js');
const Node = require('../Node.js');
const LinkedList = require('../LinkedList.js');

let list = new LinkedList();
let stack = new Stack();
let val = 50;
let newVal = 'foo';


describe(' testing linkedList', () => {
  it('should create linkedList and insert to the front', () => {
    list.insert(newVal);
    console.log(list);
    expect(list.head.value).toEqual('foo');
    expect(list.head.next).toEqual(null);
  });
});


describe('testing stack', () =>{
  it('create stack where top is null', () => {
    expect(stack.top).toEqual(null);
  });

  it('should push newVal into stack', () => {

    stack.push(newVal);
    expect(stack.top.value).toEqual(list.head.value);
    expect(list.head.value).toEqual('foo');
    expect(list.head.next).toEqual(null);
  });

  it('should push val into stack, making it new top', () => {

    stack.push(val);
    expect(stack.top.value).toEqual(50);
    expect(stack.top.next.value).toEqual('foo');
  });

  it('should remove top value from stack', () => {

    let popped = stack.pop();
    console.log(popped);
    expect(popped).toEqual(50);
    expect(stack.top.value).toEqual('foo');
  });

  it('should add a new value and return new value as top', () => {
    let name = 'dave';
    stack.
  });
});

