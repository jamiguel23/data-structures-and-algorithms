'use strict';

const Node = require('./Node.js');
const LinkedList = require('./LinkedList.js');



let list = new LinkedList();
list.append('matt');
list.append('miguel');
list.append('23');

console.log(JSON.stringify(list));
