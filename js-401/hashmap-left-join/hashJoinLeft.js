'use strict';

let Hashtable = require('../hashtable/hash.js');
const util = require('util');

let leftJoin = (HT1, HT2) => {
  let mainArray = [];
  for (let i = 0; i < HT1.buckets.length; i++) {

    let subArray = [];
    if (HT1.buckets[i] !== undefined) {

      let [key, value] = HT1.buckets[i].head.value.split(':')

      subArray.push(key, value);

      if (HT2.contains(key)) {
        let [key2, value2] = HT2.buckets[i].head.value.split(':')

        console.log(key2, value2)

        subArray.push(value2);
      } else {
        subArray.push(null);
      }
      mainArray.push(subArray);
    }
  }

  return mainArray;
}


let ht1 = new Hashtable(1024);
ht1.set('diligent', 'employed');
ht1.set('fond', 'enamored');
ht1.set('guide', 'usher');
ht1.set('outfit', 'garb');
ht1.set('wrath', 'anger');
let ht2 = new Hashtable(1024);
ht2.set('diligent', 'idle');
ht2.set('fond', 'averse');
ht2.set('guide', 'follow');
ht2.set('flow', 'jam');
ht2.set('wrath', 'delight');

let test = leftJoin(ht1, ht2);

console.log(test);

module.exports = leftJoin;
