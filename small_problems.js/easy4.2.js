// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

// Problem Understanding

  // Input: string
  // Output: boolean

  // Rules:
  //  Explicit: Case matters, all characters matter (incl. numbers, special, space)
  //  Implicit: Only 1 string are passed as argument, 

// Examples
/*
  isPalindrome('madam');               // true
  isPalindrome('Madam');               // false (case matters)
  isPalindrome("madam i'm adam");      // false (all characters matter)
  isPalindrome('356653');              // true

// Data Structures
  // an array (intermediate structure)

// Algorithm
  // Given a string
  // Check if the string is the same in reverse (i.e. a palindrome)
/*
Sub-algorithm - reverse string
- Create a variable called 'stringOriginal' and set it to the input string 
- Create a variable called 'stringReversed' and set it to an empty string
- Make a copy of 'stringOriginal' and reverse the order of the characters 
- Set 'stringReversed' to the result of that 
- Check if 'stringReversed' and 'stringOriginal' are identical
  - If they are return true
  - If they are not return false
*/
  // Return true (if it is a palindrome) or false (if not)

// Code

function isPalindrome(string) {
  let stringOriginal = string;
  let stringReversed = "";

  stringReversed = stringOriginal.split("").reverse().join("");
  
  return stringOriginal === stringReversed;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true