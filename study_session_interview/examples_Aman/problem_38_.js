/* 35 minutes > lost time in a scoping mistake inside loop 
We're receiving a set of messages in code. The messages are sets of text strings, like:"alakwnwenvocxzZjsf"
Write a method to decode these strings into numbers. The decoded number should be the number of lowercase characters between the first two uppercase characters. If there aren't two uppercase characters,the number should be 0.

Algorithm: 
Find the first and second character in a string that is upperCase 
Count the amount of lowercase characters in between 
Save the count in output array 
----------

Create codes array and set to empty array 
If input array is empty 
  Return codes
Iterate over input array 
  Push return value of `generateCode(string)` to codes array 
Return codes array 

-------

Helperfunction `generateCode(string)`
  Create code variable and set to 0
  Create countUpper and set to 0

  Iterate through input string 
    If current Char is an upperCase variable 
      Increment countUpper by 1
    If countUpper is equal to 2 
      Break the loop 
    If countUpper is equal to 1 AND current char is lowerCase
      Increment code by 1

  If countUpper is 1
    Return 0 
  Else  
    Return code
*/

function decode(array) {
  let codes = []; 
  if(array.length === 0) return codes; 

  array.forEach(str => codes.push(generateCode(str))); 

  return codes; 
}

function generateCode(string) {
  let code = 0; 
  let countUpper = 0; 

  for (let char of string) {
    if(char === char.toUpperCase()) countUpper++; 
    if(countUpper === 2) break; 
    if(countUpper === 1 && char === char.toLowerCase()) code++; 
  }
  return countUpper === 1 ? 0 : code; 
}

console.log(decode(['ZoL', 'heLlo', 'XX'])) // [1, 0, 0]);
console.log(decode(['foUrsCoreAnd', 'seven', ''])) // [2, 0, 0]);
console.log(decode(['lucYintheskyWith', 'dIaMonDs'])) // [8, 1]);
