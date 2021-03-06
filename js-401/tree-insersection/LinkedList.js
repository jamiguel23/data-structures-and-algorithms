'use strict';

//create node class
class Node {
  constructor(value){
    this.value = value;
    this.next = null
  }
}

// Linked List class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // append new node to the end of the LL
  append(value) {
    let node = new Node(value);
    if(this.head === null) {
      this.head = node;
      return;
    }

    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  // add new value to the front of thr list
  insert(value) {

    //define head
    let node = new Node(value);


    //make head to node
    this.head = node;
  }

  // validating method to find if the value is in the LL
  includes(value){
    //setting head to current node
    let currentNode = this.head;

    while (currentNode){
      //validate if the nodes value is equal to the passed value
      if (currentNode.value === value){
        return true;
      }
      //moves to next node to validate with passed value
      currentNode = currentNode.next;
    }
    //returns false if passed value is not found
    return false;
  }
}

module.exports = LinkedList;
