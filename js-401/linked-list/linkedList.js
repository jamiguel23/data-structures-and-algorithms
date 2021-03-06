"use strict";

class Node { //create node class
  constructor(value) {
    this.value = value; // set constructor value as nodes value
    this.next = null; // set next value to null that will be added later
  }
}

class LinkedList { // create linked list class
  constructor() {
    this.head = null; // set head of the linked list as null
  }

  append(value) { // append method to add node to the end of the list
    let node = new Node(value); // using the value that is passed create a new node variable
    if (this.head === null) { // if the head is null then that means that the new node that is being appended is the start of the new LL making it the head by default
      this.head = node;
      return;
    }

    let currentNode = this.head; // set current node to the head
    while (currentNode.next) { // while current.next is true move current node to currentNode.next
      currentNode = currentNode.next; // when currentNode points to the last node in LL we will jump out of the while
    }

    currentNode.next = node; // setting currentNode.next to the new node created at the top of the append method
  }

  insert(value) { // insert method uses passes a value to then be added to a LL as as the new head
    //define head
    let node = new Node(value);

    //make head to node
    this.head = node;
  }

  includes(value) { // includes is a validation method which will return true if the value is in LL and false when it does not
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

  to_sting() { // the to_string method will print a numerical value as well as a st
    let currentNode = this.head;
    let valuesStr = "";

    while (currentNode !== null) {
      valuesStr += `{${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    valuesStr += "NULL";

    return valuesStr;
  }

  reverse() { //reversal of a LL iteratvly
    let previous; // We must have a previous variable
    let current = this.head;

    while (current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    return previous;
  }

  remove(target) { // this method will remove the target value

    if (this.head.value === target){ // catch if the target value is the head
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
let list = new LinkedList();


list.append('matt');
list.append(23);
list.append(93);
list.append('hello')

// list.insert('miguel');
// console.log(JSON.stringify(list));
// console.log(JSON.stringify(list.remove("matt")));
// console.log(JSON.stringify(list.remove(23)));
// console.log(list.reverse())
// console.log(list.includes(96));
// console.log(list.to_sting(list));


module.exports = {
  Node,
  LinkedList,
};
