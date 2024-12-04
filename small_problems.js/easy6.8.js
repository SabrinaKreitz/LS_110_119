let p = console.log;
/*
Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.

*/

p(reverseSentence(''));                       // ""
p(reverseSentence('Hello World'));            // "World Hello"
p(reverseSentence('Reverse these words'));    // "words these Reverse"


function reverseSentence (sentence) {
  return sentence.split(' ').reverse().join(' ');
}
