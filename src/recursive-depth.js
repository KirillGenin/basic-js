const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let depth = 1
    let currentDepth = 1

    if (!Array.isArray(arr)) return 0

    arr.forEach(element => {

      if (Array.isArray(element)) {
        currentDepth += this.calculateDepth(element)
        if (currentDepth > depth) depth = currentDepth
        currentDepth = 1
      }
    })

    return depth
  }
}

module.exports = {
  DepthCalculator
};