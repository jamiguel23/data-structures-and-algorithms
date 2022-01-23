'use strict';

const Queue = require('../queue.js');
const Stack = require('../stackAndQueue.js');
const LinkedList = require('../LinkedList.js');

let list = new LinkedList();
let stack = new Stack();
let queue = new Queue();
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
    stack.push(name);
    expect(stack.top.value).toEqual('dave');
  });

  it('should return false if there are values in stack', () => {
    let result = stack.isEmpty();
    expect(result).toBe(false);
  });

  it('should return true is there are no values in stack', () => {
    let otherStack = new Stack();
    let result = otherStack.isEmpty();
    expect(result).toBe(true);
  });
});

describe('testing queue', () => {

  it('should add values to queue', () => {
    queue.enqueue(val);
    queue.enqueue(newVal);
    expect(queue.front.value).toEqual(50);
    expect(queue.front.next.value).toEqual('foo');
    expect(queue.back.next).toEqual(null);
  });

  it('should remove the first node added for queue', () => {
    queue.enqueue(86);
    console.log(JSON.stringify(queue));
    let result = queue.dequeue();
    expect(result).toEqual(50);
    expect(queue.front.value).toEqual('foo');
    expect(queue.back.value).toEqual(86);
    expect(queue.back.next).toEqual(null);
    expect(queue.front.next.value).toEqual(86);
  });

  it('should return value of front', () => {
    let result = queue.peek();
    expect(result).toEqual('foo');
  });

  it('should return true if no values in queue', () => {
    let newQueue = new Queue();
    let result = newQueue.isEmpty();
    expect(result).toEqual(true);
    expect(newQueue.front).toEqual(null);
  });

  it('should return false if queue has value', () => {
    let result = queue.isEmpty();
    expect(result).toBe(false);
  });
});
