'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  insert(value) {

    //define head
    let node = new Node(value);


    //make head to node
    this.head = node;
  }

  includes(value) {
    //setting head to current node
    let currentNode = this.head;

    while (currentNode) {
      //validate if the nodes value is equal to the passed value
      if (currentNode.value === value) {
        return true;
      }
      //moves to next node to validate with passed value
      currentNode = currentNode.next;
    }
    //returns false if passed value is not found
    return false;
  }

  to_sting() {
    let currentNode = this.head;
    let valuesStr = '';

    while (currentNode !== null) {
      valuesStr += `{${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    valuesStr += 'NULL';

    return valuesStr;
  }

  insertBefore(value, newVal) {
    let newNode = new Node(newVal);
    let currentNode = this.head;
    let previousNode;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        newNode.next = currentNode;
        previousNode.next = newNode;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  insertAfter(value, newVal) {
    let newNode = new Node(newVal);
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value ){
        newNode.next = currentNode;
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
    }

  }
}

// list.head = node;
let list = new LinkedList();


list.append('matt');
list.append(23);
list.append(93);

// list.insert('miguel');

list.insertBefore(23, 10);
// list.insertAfter('matt', 'miguel');


console.log(JSON.stringify(list));
// console.log(list.includes(96));
// console.log(list.to_sting(list));

// module.exports = Node;
// module.exports = LinkedList;
