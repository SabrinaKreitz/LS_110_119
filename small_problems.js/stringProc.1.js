let p = console.log
/* 
Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

Easy version: 

function isUppercase(string) {
  return string.toUpperCase() === string;
}
*/

function isLetter (char) {
  if (char.toLowerCase() >= `a` && char.toLowerCase() <= `z`) {
    return true;
  } else {
    return false;
  }
}

function isUppercase(string) {
  let onlyLetters = string.split('').filter(isLetter);
  return onlyLetters.every(char => char.toUpperCase() === char);
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true