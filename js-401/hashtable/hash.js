'use strict';

const LinkedList = require('./linkedList.js')

class HashTable {

  constructor(size){

    this.size = size;
    this.buckets = new Array(size);

  }

  hash(key) {

    let chars = key.split('');
    let sum = chars.reduce(( state, char) => {
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

    if(this.buckets[position]) return true
    else return false;

  }

  keys() {
    let collection = [];

    for ( let i = 0; i < this.buckets.length; i++ ){

      if (!this.buckets[i] === []){
        console.log(this.buckets[i])
        
      }
      // collection.push(this.buckets[i].head.node.value)
      // console.log(this.buckets[i]);
    }


    return collection;
  }


}

let table = new HashTable(1042);

// console.log(table.hash('matt'))
table.set('bruiser', 46)
table.set('goliath', 84)

table.set('matt', 50);

// console.log(table)

// let contain = table.contains('foo');

// console.log(contain);

let keys = table.keys();

console.log(keys);
