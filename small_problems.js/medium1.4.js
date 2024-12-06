/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.


A: Turn the number string within a sentence into it's digit equivalent and return the new sentence. 

CREATE the array `numberStrings` with all number strings from `zero` to `nine`
TURN the input string into an array, with each word representing a new element
ITERATE over the array and transform each element
  - IF the element is included in the `numberStrings` array
    - return it's index
  - ELSE return the original value 
Return the transformed array as string
*/
let p = console.log;

function wordToDigit (sentence) {
  let numberStrings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

return  sentence.split(' ').map((word, idx) => {
    if (numberStrings.includes(word)) return idx;
    return word;
  }).join(' ');
}

p(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."