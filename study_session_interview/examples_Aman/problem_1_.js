/* 6 minutes
Write a function that takes a string as an argument and returns an array that contains every
word from the string, with each word followed by a space and the word's length.
If the argument is an empty string or if no argument is passed, the function should return an empty array.
You may assume that every pair of words in the string will be separated by a single space.


Turn a string into an array of single words 
If the input argument is falsy return an empty array
Transform each element of the array into a new string with the word and the length of the word seperated by a space 
Return the new array 
*/

function wordLengths (string) {
  return string ? string.split(' ').map(elm => elm + ' ' + elm.length) : []; 
}


console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []