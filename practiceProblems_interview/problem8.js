/*
27 minutes > lost time through scoping mistake
Create a function that takes a non-empty string as an argument. The string consists entirely of lowercase alphabetic characters. The function should return the length of the longest vowel substring. The vowels of interest are "a", "e", "i", "o", and "u".

A: Find the longest streak of uninterrupted vowals in a string 

CREATE `highestCount` variable and set to 0
CREATE `vowals` variable and set to string with all lowerCase vowals
CREATE `currentCount` variable and set to 0
ITERATE through input string 
IF current char is not included in `vowals` 
SET currenCount to 0
ELSE 
INCREMENT current Count by 1
IF currentCount is larger than highestCount 
SET highestCount to currentCount 
RETURN highestCount
*/

const p = console.log;

function longestVowelSubstring (string) {
  const VOWALS = `aeuoi`;
  let highestCount = 0;
  let currentCount = 0;

  for (let char of string) {
    !VOWALS.includes(char) ? currentCount = 0 : currentCount +=1;
    if(currentCount > highestCount) highestCount = currentCount;
  }
  return highestCount;
}



p(longestVowelSubstring('cwm') === 0);
p(longestVowelSubstring('many') === 1);
p(longestVowelSubstring('launchschoolstudents') === 2);
p(longestVowelSubstring('eau') === 3);
p(longestVowelSubstring('beauteous') === 3);
p(longestVowelSubstring('sequoia') === 4);
p(longestVowelSubstring('miaoued') === 5);


/* second attempt: 24 minutes
Create a function that takes a non-empty string as an argument. The string consists entirely of lowercase alphabetic characters. The function should return the length of the longest vowel substring. The vowels of interest are "a", "e", "i", "o", and "u".

A: Find the highest count of uninterrupted vowals in a string 

CREATE `largestCount` variable and set to 0
CREATE `currentCount` variable and set to 0 
ITERATE through input string 
  - if char is not a vowal
    - if current count is larger than `largestCount` 
      - set largestCount to currentCount 
    - set currentCount to 0
  - if current char is a vowal 
    - increment currentCount by 1 
RETURN largestCount; 
*/
let p = console.log; 

function longestVowelSubstring (string) {
  let largestCount = 0; 
  let currentCount = 0; 
  let vowals = `aeoui`

  for (let char of string) {
    if(vowals.includes(char)) {
      currentCount += 1;
      if (currentCount > largestCount) largestCount = currentCount; 
    }
    if(!vowals.includes(char)) {
        currentCount = 0; 
      } 
  }
  return largestCount; 
}

p(longestVowelSubstring('cwm') === 0);
p(longestVowelSubstring('many') === 1);
p(longestVowelSubstring('launchschoolstudents') === 2);
p(longestVowelSubstring('eau') === 3);
p(longestVowelSubstring('beauteous') === 3);
p(longestVowelSubstring('sequoia') === 4);
p(longestVowelSubstring('miaoued') === 5);