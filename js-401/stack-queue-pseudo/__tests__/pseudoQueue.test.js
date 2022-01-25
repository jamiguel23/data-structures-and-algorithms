'use strict';

const PseudoQueue = require('../pseudoQueue');

describe('Queue', () => {

  it('Can successfully enqueue into a queue', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    console.log(queue);
    expect(queue).toBeDefined();
    expect(queue.stack1.top.value).toEqual(1);
  });

  it('Can pop correct value and return 20', () => {
    let queue = new PseudoQueue();
    queue.enqueue(20);
    queue.enqueue(15);
    queue.enqueue(10);
    queue.enqueue(5);
    let result = queue.dequeue();
    expect(queue).toBeDefined();
    expect(result).toEqual(20);
  });

});
