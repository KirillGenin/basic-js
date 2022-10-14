const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  str = String(str)
  const repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1
  const separator = options.hasOwnProperty('separator') ? options.separator : '+'
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : ''
  const additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1
  const additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|'

  const addRepeat = addition != '' ? (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length) : ''
  const strRepeat = (str + addRepeat + separator).repeat(repeatTimes).slice(0, -separator.length)

  return strRepeat
}

module.exports = {
  repeater
};