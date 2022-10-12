const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (typeof sampleActivity == 'string' && sampleActivity && !isNaN(Number(sampleActivity)) && Number(sampleActivity) > 0 && Number(sampleActivity) < MODERN_ACTIVITY) {
    // console.log(Number(sampleActivity))
    const k = Math.LN2 / HALF_LIFE_PERIOD
    const age = Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k)

    return age

  } else return false
}

module.exports = {
  dateSample
};

// console.log(dateSample(' '))