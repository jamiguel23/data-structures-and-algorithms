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


let sampleArr = "Once upon a time, there was a brave princess who..."

let otherSample = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."

let something = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York'

console.log(hashRepeatWord(sampleArr));
console.log(hashRepeatWord(otherSample));
console.log(hashRepeatWord(something));


module.exports = hashRepeatWord;
