'use strict';

class KNode{
  constructor(value, k){
    this.value = value;
    this.children = new Array(k);
  }
}

module.exports = KNode;

