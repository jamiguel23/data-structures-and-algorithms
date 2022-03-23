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

  let tail = head1.head // tail pointer
  // return tail
  let current1 = head1.head.next; // LL 1 pointer starting at second node
  // console.log(current1)
  let current2 = head2.head // LL 2 pointer
  let count = 0; // count will be used to alternate which LL to look at

  while ( current1 !== null && current2 !== null){

    if (count % 2 === 0){ // if the counter is even then LL 2 will be looked at
      tail.next = current2 // make tail.next current 2 || LL2 pointer
      current2 = current2.next // move current2 to next node
    } else { // when count is odd LL 1 will be looked at

      tail.next = current1
      current1 = current1.next
    }

    tail = tail.next // move tail to tail.next
    count += 1 // add 1 to count

  }

  if (current1 !== null) tail.next = current1; //if current
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
// otherList.append('playa');

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

