"use strict";

class Node { //create node class
  constructor(value) {
    this.value = value; // set constructor value as nodes value
    this.next = null; // set next value to null that will be added later
  }
}

class LinkedList { // create linked list class 
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
    let valuesStr = "";

    while (currentNode !== null) {
      valuesStr += `{${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    valuesStr += "NULL";

    return valuesStr;
  }

  reverse() {
    let previous;
    let current = this.head;

    while (current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    return previous;
  }

  remove(target) {

    if (this.head.value === target){
      this.head = this.head.next;
      return this.head;
    }

    let previous;
    let current = this.head;

    while (current) {


      if (current.value === target) {
        previous.next = current.next;
        current.next = null
      }

      // console.log("this is the current  ", current);
      previous = current;
      current = current.next;
    }

    return this.head;
  }
}

// list.head = node;
// let list = new LinkedList();


// list.append('matt');
// list.append(23);
// list.append(93);

// list.insert('miguel');

// console.log(JSON.stringify(list));
// console.log(JSON.stringify(list.remove("matt")));
// console.log(JSON.stringify(list.remove(23)));


// console.log(JSON.stringify(list));
// console.log(list.reverse())
// console.log(list.includes(96));
// console.log(list.to_sting(list));

module.exports = {
  Node,
  LinkedList,
};
