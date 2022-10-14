const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!String(value) || value === undefined) this.chain.push('( )')
    else this.chain.push(`( ${String(value)} )`)
    return this
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
   
    if (typeof position != 'number' || position != Math.floor(position) || position <= 0 || position > chainMaker.getLength()) {
      this.chain = []
      throw new Error('You can\'t remove incorrect link!')
  }
    this.chain = [...this.chain.slice(0, position - 1), ...this.chain.slice(position)]
    return this
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse()
    return this
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const tmp = this.chain.join('~~')
    this.chain = []
    return tmp
  }
};

module.exports = {
  chainMaker
};