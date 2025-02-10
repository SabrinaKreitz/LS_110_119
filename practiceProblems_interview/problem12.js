/*
14 minutes

Create a function that takes a string as an argument and returns `true` if the string is a pangram, `false` if it is not.

Pangrams are sentences that contain every letter of the alphabet at least once. For example, the sentence "Five quacking zephyrs jolt my wax bed." is a pangram since it uses every letter at least once. Note that case is irrelevant.


Algorithm: Check if a given string includes each letter of the alphabet at least once 

CREATE `letters` variable and set it to a string containing each letter of the alphabet in lowercase
CREATE `searchString` variable and set it to lowerCase version of input string 
LOOP through `letters` 
  - IF current element is not a letter 
    - CONTINUE looping 
  - IF current element is NOT included in `searchString` 
    - RETURN false 
RETURN true; 
*/

const p = console.log;

function isPangram (string) {
  let letters = `abcdefghijklmnopqrstuvwxyz`
  let searchString = string.toLowerCase();
  
  for (let char of letters) {
    if (!(char >= `a` && char <= `z`)) continue;
    if (!searchString.includes(char)) return false;
  }
  return true;
}



p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
p(isPangram(myStr) === true);


/* 2nd attempt - 16 minutes
Create a function that takes a string as an argument and returns `true` if the string is a pangram, `false` if it is not.

Pangrams are sentences that contain every letter of the alphabet at least once. For example, the sentence "Five quacking zephyrs jolt my wax bed." is a pangram since it uses every letter at least once. Note that case is irrelevant.


A: Find out if every letter of the alphabet is present in input string 
CREATE alphabet variable and set to array with string characters of alphabet in lowercase 
ITERATE through alphabet 
  IF every element is included in input string 
  RETURN true 
  ELSE 
  RETURN false 
*/


let p = console.log; 

function isPangram (string) {
  let alphabet = []; 

  for (let code = 'a'.charCodeAt(0); code <= 'z'.charCodeAt(0); code++) {
    alphabet.push(String.fromCharCode(code))
  }
 
  return alphabet.every(char => string.toLowerCase().includes(char)); 
}


p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
p(isPangram(myStr) === true);
