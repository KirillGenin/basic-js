const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let commonCharacterCount = 0

  function createObjLetters(str) {
    const letters = {}

    for (let i = 0; i < str.length; i++) {
      if (!letters[str[i]]) letters[str[i]] = 1
      else letters[str[i]]++
    }

    return letters
  }

  const [lettersOne, lettersTwo] = [createObjLetters(s1), createObjLetters(s2)]

  for (key in lettersOne) {
    if (lettersTwo.hasOwnProperty(key))
    commonCharacterCount += lettersOne[key] > lettersTwo[key] ? lettersTwo[key] : lettersOne[key]
  }
  
  return commonCharacterCount
}

module.exports = {
  getCommonCharacterCount
};

// console.log(getCommonCharacterCount('aabcc', 'adcaa'))