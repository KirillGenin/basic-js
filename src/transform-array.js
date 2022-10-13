const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!')

  const copyArr = [...arr]

  copyArr.forEach((elem, i, array) => {
    if (elem === '--discard-next') [array[i], array[i + 1]] = [undefined]
    if (elem === '--discard-prev') [array[i], array[i - 1]] = [undefined]
    if (elem === '--double-prev') array[i] = array[i - 1]
    if (elem === '--double-next') array[i] = array[i + 1]
  })

  return copyArr.filter((item) => item)
}

module.exports = {
  transform
};