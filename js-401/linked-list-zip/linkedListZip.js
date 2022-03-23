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


const zipInPlace = (head1, head2) => {

  let tail = head1.head
  // return tail
  let current1 = head1.head.next;
  // console.log(current1)
  let current2 = head2.head
  let count = 0;

  while ( current1 !== null && current2 !== null){

    if (count % 2 === 0){
      tail.next = current2
      current2 = current2.next
    } else {

      tail.next = current1
      current1 = current1.next
    }

    tail = tail.next
    count += 1

  }

  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;


  return head1
}

let list = new LinkedList();
let otherList = new LinkedList();

list.append('matt');
list.append('miguel');
list.append('23');

otherList.append('judith');
otherList.append('reyes');
otherList.append('24');

// console.log(list)
// console.log(otherList)

console.log(JSON.stringify(zipInPlace(list, otherList)));

// LinkedList.zip(list,otherList);

// console.log(JSON.stringify(list));
// console.log(JSON.stringify(otherList));
// console.log(list.zip(list,otherList));


module.exports = {
  Node,
  LinkedList,
};

