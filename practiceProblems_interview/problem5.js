/*
22 minutes
Create a function that takes a string argument and returns the character that occurs most often in the string. If there are multiple characters with the same greatest frequency, return the one that appears first in the string. When counting characters, consider uppercase and lowercase versions to be the same.

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


/* second attempt: 22 minutes > less efficient solution 
Create a function that takes a string argument and returns the character that occurs most often in the string. If there are multiple characters with the same greatest frequency, return the one that appears first in the string. When counting characters, consider uppercase and lowercase versions to be the same.

Problem1: > string > case-insesitive 
Count occurance of each character in a string > turn string to lowercase before iterating
  > Iterate through string and add char and their count to `countObj` 

Problem2: > object
From list of counted char return the char that has highest count and earliest occurance in string 
  > Identify highest value in obj 
  > Sort obj in array of entries and filter elements with highest value 
  > Return 0-indexed element 


A: Find the character in string which has highest count and earliest occurance. 

[main function] (string) 
CREATE `countObj` and set to return value of countChar(string)
CREATE highestCount variable and set to: 
  - countObj turned to array of values 
  - sorted in descending order 
  - 0-indexed element 
RETURN commonChar variable: 
  - countObj turned to array of entries 
  - filter elements where 1-st indexed element equals highestCount 
  - return 0-indexed element of 0-indexed element 


  [helperfunction] countChar(string) > return object
  CREATE countObj set to empty object 
  IERATE throug input string turned lowerCase 
    - if current char exists in countObj  
      - increment it's value by 1
    - else 
      - create property of char with value of 1
  RETURN countObj
*/
const p = console.log;

function mostCommonChar(string) {
  let countObj = countChar(string);  
  let highestCount = Object.values(countObj).sort((a, b) => b - a)[0]; 

 return Object.entries(countObj).filter(subArr => subArr[1] === highestCount)[0][0]

}

function countChar(string) {
  let countObj = {}; 
  
  for (let char of string.toLowerCase()) {
    countObj[char] ? countObj[char] += 1 : countObj[char] = 1; 
  }
  return countObj; 
}

p(mostCommonChar('Hello World') === 'l');
p(mostCommonChar('Mississippi') === 'i');
p(mostCommonChar('Happy birthday!') === 'h');
p(mostCommonChar('aaaaaAAAA') === 'a');

let myStr = 'Peter Piper picked a peck of pickled peppers.';
p(mostCommonChar(myStr) === 'p');

myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
p(mostCommonChar(myStr) === 'e');

