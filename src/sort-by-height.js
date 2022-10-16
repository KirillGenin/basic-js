const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let replaceHeight = arr.map((item) => item === -1 ? item : 'X').join(',')
  let correctHeight = arr.filter((item) => item != -1).sort((a, b) => a -b)
  
  correctHeight.forEach(item => replaceHeight = replaceHeight.replace('X', item))
  return replaceHeight.split(',').map(item => Number(item))
}

module.exports = {
  sortByHeight
};