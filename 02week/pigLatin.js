'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

const pigLatin = (input) => {      //create a function named pigLatinTraslator
  const vowelArray = ["a","e","i","o","u"]  //create an array of Vowels
  input = input.trim().toLowerCase()        //format the input to remove white space and convert to lowercase
  if(typeof input === typeof "hello"){      //find out if the input is a string
    if(vowelArray.includes(input[0])){      //find out if the first letter in the input is a vowel
     return input + "yay"                   //if so return a new string adding "yay"
   }else{                                   //find the first instance of a vowel
       let vowelObj = {}                    //create an empty vowel object
       for (let i=0;i<vowelArray.length;i++){                     //iterate throgh the vowel array and
           vowelObj[vowelArray[i]] = input.search(vowelArray[i])  //fill the vowel object with 5 properties and 5 valuse (indexes of each one's vowel)
       }
       let lowestNumber = 45          //create a variable containing the number of characters in the longest word possible
       let splitLetter = ""           //create a variable for the letter of the first vowel
       for (let key in vowelObj){     //iterate through the keys in the vowel object
         if ((vowelObj[key] < lowestNumber) && (vowelObj[key] > 0)){  //see which index is the lowest while not being less that 1
           lowestNumber = vowelObj[key]  //reasign lowestNumber variable with the lowest index
           splitLetter = key             //reasign splitLetter variable with the key at the lowest index
         }
     }                                //using .split at the identified first vowel concat a new string containing the first vowel,
                                      //the second half of the split input, the first half of the first input and finaly "ay"
     let finalAnswer = splitLetter + input.split(splitLetter)[1] + input.split(splitLetter)[0] + "ay"
     return finalAnswer
   }
 }else {console.log('please enter a word to be translated')}
}



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
