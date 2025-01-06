/*
22 minutes

A: Find the letter in a string which occurs most often. When two letters occur equally often, return the one that appears earlier in the string. 

CREATE countArray and set it to countChars(inputString)
SORT countArray in descending order based on the value of each sub-arrays 1st-indexed element 
RETURN 0-indexed element of the 0-indexed sub-array

[helperfunction] countChars(string)
CREATE `count` object and set it to empty object 
ITERATE through input string 
  - IF current char exists in count obj
    - increment value of current char in obj by 1
  - ELSE 
    - CREATE entry in count obj with char and value of 1
RETURN count obj
*/

function mostCommonChar (string) {
  let countArray = Object.entries(countChars(string.toLowerCase()));
  countArray.sort((a, b) => b[1] - a[1])
  return countArray[0][0]
}

function countChars(string) {
  let count = {};
  for(let char of string) {
    count[char] ? count[char] += 1 : count[char] = 1;
  }
  return count;
}

const p = console.log;
p(mostCommonChar('Hello World') === 'l');
p(mostCommonChar('Mississippi') === 'i');
p(mostCommonChar('Happy birthday!') === 'h');
p(mostCommonChar('aaaaaAAAA') === 'a');

let myStr = 'Peter Piper picked a peck of pickled peppers.';
p(mostCommonChar(myStr) === 'p');

myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
p(mostCommonChar(myStr) === 'e');