const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(mode) {
    this.mode = mode === false ? 'reverse' : 'direct'
    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    this.genSqViz = () => {
      let square = []
      for (let i = 0; i < this.letters.length; i++) {
        square[i] = this.letters.slice(i).concat(this.letters.slice(0, i));
      }
      return square
    }
    this.square = this.genSqViz()
  }

  setKey(message, key) {
    message = message.replace(/[^a-zA-Z]/g, '')
    if (key.length >= message.length) return key.slice(0, message.length)
    else {
      while (key.length < message.length) {
        key = key.repeat(2)
      }
      return key.slice(0, message.length)
    }
  }

  encrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!')

    let replacementMessage = message.replace(/[a-zA-Z]/g, '{*X*}')
    message = message.replace(/[^a-zA-Z]/g, '').toUpperCase()
    key = this.setKey(message, key).toUpperCase()

    let encryptMessage = ''
    for (let i = 0; i < message.length; i++) {
      let row = this.letters.indexOf(message[i])
      let coll = this.letters.indexOf(key[i])
      encryptMessage += this.square[row][coll];
    }

    for (let i = 0; i < encryptMessage.length; i++) {
      replacementMessage = replacementMessage.replace('{*X*}', encryptMessage[i])
    }
    return this.mode === 'direct' ? replacementMessage : replacementMessage.split('').reverse().join('')
  }
  decrypt(cipher, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (cipher === undefined || key === undefined) throw new Error('Incorrect arguments!')

    let replacementCipher = cipher.replace(/[a-zA-Z]/g, '{*X*}')
    cipher = cipher.replace(/[^a-zA-Z]/g, '').toUpperCase()
    key = this.setKey(cipher, key).toUpperCase()

    let decryptCipher = ''
    for (let i = 0; i < cipher.length; i++) {
      let row = this.letters.indexOf(key[i])
      let coll = this.square[row].indexOf(cipher[i])
      decryptCipher += this.letters[coll]
    }

    for (let i = 0; i < decryptCipher.length; i++) {
      replacementCipher = replacementCipher.replace('{*X*}', decryptCipher[i])
    }

    return this.mode === 'direct' ? replacementCipher : replacementCipher.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};