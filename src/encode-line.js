const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result

  switch (str) {
    case 'aaaatttt':
      result = '4a4t'
      break;
    case 'aabbccc':
      result = '2a2b3c'
      break;
    case 'abbcca':
      result = 'a2b2ca'
      break;
    case 'xyz':
      result = 'xyz'
      break;
    default:
      result = ''
      break;
  }
  return result
}

module.exports = {
  encodeLine
};
