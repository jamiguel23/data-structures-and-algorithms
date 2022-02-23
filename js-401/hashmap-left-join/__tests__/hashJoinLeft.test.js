'use strict';

const Hashtable = require('../../hashtable/hash.js')
const leftJoin = require('../hashJoinLeft.js');


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

// let test = leftJoin(ht1, ht2);

// console.log(test);

describe(' join left test suite', () => {

  it('should have items in array', () => {

    let test = leftJoin(ht1, ht2);

    console.log(test[0][0])

    expect(test).toBeDefined()

  })

})
