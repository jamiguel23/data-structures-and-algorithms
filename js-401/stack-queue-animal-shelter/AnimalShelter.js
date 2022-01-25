'use strict';

const Node = require('./Node.js');

class AnimalShelter {
  constructor() {
    this.size = 0;
    this.front = null;
    this.back = null;
  }

  enqueue(animal) {
    let node = new Node(animal);

    if (this.front === null) {
      this.front = node;
      this.back = node;
      this.size++;
      return;
    } else {
      this.back.next = node;
      this.back = node;
      this.size++;
      return;
    }
  }


  // need pref if you want to dequeue
  dequeue(pref) {

    let node = this.front;
    let nodeToBeRemoved;

    if (pref) {
      while (this.front !== null) {
        if (pref === node.value) {
          nodeToBeRemoved = node;
          node.front = nodeToBeRemoved.next;
          nodeToBeRemoved.next = null;
          this.size--;
          return nodeToBeRemoved.value;
        } else {
          return null;
        }
      }
    } else {
      let nodeToRemove = this.front;
      this.front = nodeToRemove.next;
      nodeToRemove.next = null;
      if (!this.front) {
        this.back = null;
      }
      return nodeToRemove.value;
    }
  }
}

let shelter = new AnimalShelter();

shelter.enqueue('dog');
shelter.enqueue('cat');
shelter.enqueue('dog');
shelter.enqueue('cat');


let result = shelter.dequeue();

console.log('dequeue result:', result);

console.log(JSON.stringify(shelter));
