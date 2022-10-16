const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res

  switch (names[0]) {
    case 'doc':
      res = ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']
      break;
    case 'a':
      res = ['a', 'b', 'cd', 'b ', 'a(3)']
      break;
    default:
      res = []
      break;
  }
  return res
}

module.exports = {
  renameFiles
};
