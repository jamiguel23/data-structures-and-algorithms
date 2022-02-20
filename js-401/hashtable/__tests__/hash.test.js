'use strict';


const HashTable = require('../hash.js');


let table = new HashTable(1042);

table.set('bruiser', 46)
table.set('goliath', 84)
table.set('matt', 50);

describe('hash table test', () => {

  it('should create a hash table', () => {
    

    expect(table).toBeDefined

  })

  it('should add key and value to table', () => {

  
    console.log(table.buckets[218].head.value);

    let [key, value] = table.buckets[218].head.value.split(':');

    console.log(key, value)
    expect(key).toBe('matt');
    expect(value).toBe('50');
  })

  it('should return the value when passed a key', () => {
    

    let value = table.get('goliath')

    expect(value).toBe('84')
  })

  it('should return undefined when passed a key that does not exist', () => {
    

    let value = table.get('foo')

    expect(value).toBe(undefined)
  })

  it('should return a list of all unique keys that exist in the hashtable', () => {
    

    let keyCollection = table.keys();
    console.log(keyCollection);

    expect(keyCollection[0]).toBe('goliath');
    expect(keyCollection[1]).toBe('matt');
    expect(keyCollection[2]).toBe('bruiser');
  })

})
