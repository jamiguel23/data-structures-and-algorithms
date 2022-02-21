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
      
      if (this.buckets[i]){
        let [key, value] = this.buckets[i].head.value.split(':')
        collection.push(key);
      }
      
    }
    
    
    return collection;
  }
  
}

function hashRepeatWord(str){

  // let lowercaseStr = str.toLowerCase();
  let strArr = str.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(' ');
  // console.log(strArr);

  let table = new HashTable(strArr.length);
  // console.log(table)

  for( let i = 0; i < strArr.length; i++){

    if(table.contains(strArr[i])) {
      return strArr[i];
    }

    table.set(strArr[i]);
    // console.log(strArr[i])

  }
  console.log(table);

  return 'no repeat'

  // return 'no repeats found'
}



module.exports = hashRepeatWord, HashTable;
