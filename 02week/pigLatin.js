'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

const pigLatin = (input) => {      //create a function named pigLatin that takes in one argument
  const vowelArray = ["a","e","i","o","u"]  //create an array of Vowels
  if(typeof input === typeof "String"){      //check if the input is valid by finding out if the input is a string
    input = input.trim().toLowerCase()      //format the input to remove white space and convert to lowercase
    if(vowelArray.includes(input[0])){      //find out if the first letter in the input is a vowel
      return input + "yay"                   //if so return a new string adding "yay"
    }else{
       let lowestVowelIndex = 45
       let splitLetter                               //find the first instance of a vowel
       vowelArray.forEach((vowel)=> {
         let vowelIndex = input.indexOf(vowel)
         if((vowelIndex > -1) && (vowelIndex < lowestVowelIndex)){
           lowestVowelIndex = vowelIndex
           splitLetter = input[lowestVowelIndex]
          }
       })
       return console.log(input.substr(lowestVowelIndex) + input.split(splitLetter)[0] + "ay")
   }
  }else {console.log('please enter a word to be translated')}
 }

pigLatin("create")


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}



if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
