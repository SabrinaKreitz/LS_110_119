/*
Alphabet Symmetry
Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the alphabet, which are positions 4 and 5. 

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) // [4, 3, 1]

Input will consist of alphabetic characters, both uppercase and lowercase. No spaces.

P
For each word in the input array, work out how many letters match their alphabetical order

E
- Input and output are arrays
- Input array will have only letters, upper and lower case, no special characters or spaces
- Output will have integers
- Each character has a mapping with its alphabetic position:
    - The letter `a` is in position 1
    - `b` is in position 2. etc etc-
- The alphabetic position is case-insensitive

D
Input: array of strings
Output: array of integers
Intermediate:
  - List of the alphabet, upper case and lower case
  - String of the alphabet

A
High-level
Sabrina
  - Count the instances for which the characters in a word match their relative position. Compare the index of each letter with the index in the alphabet.

Main function: 
- Iterate through the elements of the input array 
  - For each element
  - Save the return value of countMatches(elemet) to a new array
- Return new array

Helper function countMatches(word)
Create ouput variable and set to 0 
Create string variable with all lowercase letters from the alphabet in alphabetic order 
Iterate through the input string 
For each character
  - If the index of the current character in lower case matches the index of the same character in the alphabet string
    - Increase count by 1
Return count
*/

function solve (array) {
  return array.map(word => countMatches(word));
}

function countMatches (word) {
  let count = 0;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  word.toLowerCase().split('').forEach((char, idx) => {
    if (idx === alphabet.indexOf(char)) {
      count ++
    }
  })
  
  return count;
}

// JavaScript test cases
console.log(solve(["abode","ABc","xyzD"])); // [4,3,1]
console.log(solve(["abide","ABc","xyz"]));  // [4,3,0]
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])); // [6,5,7]
console.log(solve(["encode","abc","xyzD","ABmD"])); // [1, 3, 1, 3]

/*
Azizas solution

/*
  - iterate through the input array 
  -- initialize counter to 0

  -- convert the current word to lowercase 
  -- iterate through current word 
  --- get the unicode of the current character, assign it to charCode 
  --- get the position of current character by ( Subtracting the Unicode value of 'a' from the Unicode value of the current letter) and then add 1 to the value to make it 1-based position
  --- if position is equal to the i + 1 
  ---- increment counter by 1
  -- append counter to count array 
*/

function solve(array) {

  return array.map(word => {
    let counter = 0; 
    word = word.toLowerCase();

    for (let i = 0; i < word.length; i += 1) {
      let charCode = word[i].charCodeAt(0);
      let position = charCode - "a".charCodeAt(0) + 1;

      if (position === i + 1) {
        counter += 1;
      }
    }

    return counter
  })
  
}

// JavaScript test cases
console.log(solve(["abode","ABc","xyzD"])); // [4,3,1]
console.log(solve(["abide","ABc","xyz"]));  // [4,3,0]
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])); // [6,5,7]
console.log(solve(["encode","abc","xyzD","ABmD"])); // [1, 3, 1,w 3]

//Reys solution 


function solve(arr) {
  return arr.map(determineCount);
}

function determineCount(word) {
  let alphabet = createAlphabet();

  let count = 0;

  word.toLowerCase().split("").forEach((letter, index) => {
    if (index === alphabet.indexOf(letter)) count += 1;
  });

  return count;
}

function createAlphabet() {
  let alphabet = [];
  
  for (let code = 'a'.charCodeAt(0); true; code++) {
    let letter = String.fromCharCode(code);
    
    if (letter === 'z') {
      alphabet.push('z');
      break;
    }
    
    alphabet.push(letter);
  }
  
  return alphabet;
}

/* second attempt: 17 minutes
Alphabet Symmetry
Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the alphabet, which are positions 4 and 5. 

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

A: Count the times for which the char in a word has the same index as it's corresponging char in the alphabet. Return the count. 

CREATE `countMatches` array and set to empty array 
CREATE `alphabet` string and set to `abcdefghijklmnopqrstuvw`
ITERATE through lowerCase version of each element of the input array 
  - CREATE count and set to  0
  - IF current index is equal to index of current element in `alphabet` 
    - Increment count by 1 
  - PUSH `count` to `countMatches` 
RETURN `countMatches` 
*/

function solve (words) {
  let countMatches = [];
  let alphabet = `abcdefghijklmnopqrstuvwxyz`; 

  words.forEach(word => {
    let count = 0; 
    for (let idx = 0; idx < word.length; idx ++) {
      if(idx === alphabet.indexOf(word.toLowerCase()[idx])) count++; 
    }
    countMatches.push(count);
  })
  return(countMatches)
}

// JavaScript test cases
console.log(solve(["abode","ABc","xyzD"])); // [4,3,1]
console.log(solve(["abide","ABc","xyz"]));  // [4,3,0]
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])); // [6,5,7]
console.log(solve(["encode","abc","xyzD","ABmD"])); // [1, 3, 1,w 3]
