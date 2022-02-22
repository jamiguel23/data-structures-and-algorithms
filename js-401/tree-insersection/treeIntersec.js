'use strict';

const LinkedList = require('./LinkedList.js')
const Tree = require('./Tree')

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null
  }
}

class HashTable {

  constructor(size) {

    this.size = size;
    this.buckets = new Array(size);

  }

  hash(key) {

    console.log('lkajlfajlf', key)
    let chars = key.split('');
    let sum = chars.reduce((state, char) => {
      return state + char.charCodeAt(0);
    }, 0);

    let initialHash = sum * 599;
    return initialHash % 1024
  }

  set(key, value) {
    let position = this.hash(key);
    let payload = `${key}:${value}`;


    if (this.buckets[position]) {

      let bucket = this.buckets[position];
      bucket.append(payload);
    } else {

      let bucket = new LinkedList();

      bucket.append(payload);
      this.buckets[position] = bucket;
    }
  }

  get(key) {
    let position = this.hash(key);

    if (this.buckets[position]) {
      let list = this.buckets[position];

      let currentNode = list.head;
      let [keyFromList, value] = currentNode.value.split(':');
      if (keyFromList === key) {
        return value;
      }
    }
  }

  contains(key) {
    let position = this.hash(key);

    if (this.buckets[position]) return true
    else return false;

  }

  keys() {
    let collection = [];

    for (let i = 0; i < this.buckets.length; i++) {

      if (this.buckets[i]) {
        let [key, value] = this.buckets[i].head.value.split(':')
        collection.push(key);
      }

    }


    return collection;
  }


}



let table = new HashTable(1042);

// console.log(table.hash('matt'))
// table.set('bruiser', 46)
// table.set('goliath', 84)

// table.set('matt', 50);

// console.log(table.keys())


const tree1 = new Tree();

let node1 = new Node(10);
let node2 = new Node(15);
let node3 = new Node(18);
let node4 = new Node(20);
let node5 = new Node(24);
let node6 = new Node(30);

tree1.root = node1;
tree1.root.left = node2;
tree1.root.right = node3;
tree1.root.left.left = node4;
tree1.root.left.right = node5;
tree1.root.right.left = node6;


const tree2 = new Tree();


let n1 = new Node(10);
let n2 = new Node(16);
let n3 = new Node(18);
let n4 = new Node(22);
let n5 = new Node(29);
let n6 = new Node(30);

tree2.root = n1;
tree2.root.left = n2;
tree2.root.right = n3;
tree2.root.left.left = n4;
tree2.root.left.right = n5;
tree2.root.right.left = n6;



// console.log(tree1, tree2)

function treeIntersection(t1, t2) {


  let tree1Res = t1.preOrder()
  let tree2Res = t2.preOrder()
  console.log(tree1Res)
  console.log(tree2Res)

  let tree1Str = tree1Res.toString()
  let tree1Split = tree1Str.split(',')
  console.log(tree1Split);

  for(let i = 0; i < tree1Split.length; i++){
   

    table.set(tree1Split[i])

  }
  console.log(table);

  // tree1Str.forEach(table.set())

  
  




}

treeIntersection(tree1, tree2)

tree1.preOrder();
