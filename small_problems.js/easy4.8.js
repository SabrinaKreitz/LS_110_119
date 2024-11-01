/* 
Sub-Algorithm (wordReverser):
- create a variable "wordsArray" and set to string argument split into iterable data structure where each word is an iterable element
- create a variable "swappedArray" and set it to an empty array
- Loop over the words in "wordsArray"  
  - create a variable "swappedLettersWord"
  - swap the first and last letter and set to "swappedLettersWord"
    - create 'lettersArray' and set to string argument split into iterable data structure where each letter is an iterable element
    - if 'lettersArray' contains 1 letter
      - set 'swappedLettersWord' to this letter
    - else 
      - create 'firstLetter' and set to first letter in iterable data structure
      - create 'lastLetter' and set to last letter in iterable data structure
      - set 'swappedLettersWord' to a string 
        - the string is made up of:
          1. 'lastLetter' 
          2. a string which is made from 'lettersArray' (must exclude 'lastLetter' and 'firstLetter')
          3. 'firstLetter'
  - add "swappedLettersWord" to "swappedArray"
- Join the words in "swappedArray" into a string and return that
*/

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

function swap(string) {
  let wordsArray = string.split(" "); 
  let swappedArray = [];

  wordsArray.forEach((word) => {
    let lettersArray = word.split("");
    let swappedLettersWord;

    if (lettersArray.length === 1){
      swappedLettersWord = lettersArray[0];
    } else {
      let firstLetter = lettersArray[0];
      let lastLetter = lettersArray[lettersArray.length - 1];
      swappedLettersWord = lastLetter + lettersArray.splice(1,(lettersArray.length - 2)).join('') + firstLetter;
    }
    swappedArray.push(swappedLettersWord);
  })
  return swappedArray.join(" ");
}

