let p = console.log;
/*
Write a function that takes a string, doubles every character in the string, and returns the result as a new string.
*/

function repeater (string) {
  let doubleChars = [];
  for (let char of string) {
    doubleChars.push(char, char);
  }
 
  return doubleChars.join('')
}

p(repeater('Hello'));        // "HHeelllloo"
p(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
p(repeater(''));             // ""