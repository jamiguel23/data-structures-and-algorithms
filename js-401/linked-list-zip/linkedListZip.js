'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    this.head = node;
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

  zip(a, b) {

    let newList = new LinkedList();
    //  must create pointers to which list is on what side as well as temp variables for the next node
    let listA = a.head;
    let listB = b.head;
    let nextA;
    let nextB;
    newList.append(listA.value);
    newList.append(listB.value);


    // while loop when lists are no null
    while (listA !== null || listB !== null) {
      //conditional 
      if (listA.next === null || listB.next === null) {
        // listA.next = listB;
        // newList.append(listB.value);
        break;
      } else {

        // set the next pointers
        nextA = listA.next;
        nextB = listB.next;

        // make listB the next of ListA
        listA.next = listA;
        listB.next = listB;
        listA = nextA;
        listB = nextB;
        newList.append(listA.value);
        newList.append(listB.value);

      }

    }

    return newList;

  }


}



// let list = new LinkedList();
// let otherList = new LinkedList();

// list.append('matt');
// list.append('miguel');
// list.append('23');

// otherList.append('judith');
// otherList.append('reyes');
// otherList.append('24');

// LinkedList.zip(list, newList);
// console.log(this.zip(list, otherList));
// LinkedList.zip(list,otherList);

// console.log(JSON.stringify(list));
// console.log(JSON.stringify(otherList));
// console.log(list.zip(list,otherList));


module.exports = Node;
module.exports = LinkedList;

