let p = console.log;

/*
Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

*/
function staggeredCase (string) {
  return string.split('').map((char, idx) => {
    if(idx % 2 === 1) {
      return char.toLowerCase()
    } else {
      return char.toUpperCase()
    }
  }).join('')
}



p(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
p(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
p(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

// 2nd attempt / 6 minutes 

/*
Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.


A: Select every even-indexed character in string and turn it upperCase. Turn all other characters lowerCase. 

RETURN value of 
  - split string into array of single char
  - transform char in array
    - IF index is even
      - turn upperCase
    - ELSE 
      - turn lowerCase 
  - join array back into string 
*/
let p = console.log; 

function staggeredCase (string) {
  return string.split('').map((char, idx) => idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
}


p(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
p(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
p(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"