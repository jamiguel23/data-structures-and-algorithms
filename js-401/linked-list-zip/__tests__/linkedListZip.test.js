'use strict';

const LinkedList = require('../linkedListZip.js');

describe('Zip list', () => {

  it('merge 2 lists together', () => {

    let list = new LinkedList();
    let otherList = new LinkedList();
    let newList = new LinkedList();

    list.append('matt');
    list.append('miguel');
    list.append('23');

    otherList.append('judith');
    otherList.append('reyes');
    otherList.append('24');

    console.log('this is the list' , JSON.stringify(list));
    console.log('this is the other list' , JSON.stringify(otherList));

    let result = newList.zip(list,otherList);

    console.log(result.head.value);

    expect(result.head.value).toEqual('matt');

  });

});

