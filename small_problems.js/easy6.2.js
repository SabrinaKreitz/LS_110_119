let p = console.log;
/*
Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
*/

function doubleConsonants(string) {
  let doubleChars = [];
 const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

  for (let char of string) {
    if(CONSONANTS.includes(char.toLowerCase())) {
      doubleChars.push(char, char)
    } else{
      doubleChars.push(char);
    }
  }
 
  return doubleChars.join('')
}



p(doubleConsonants('String'));          // "SSttrrinngg"
p(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
p(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
p(doubleConsonants(''));                // ""