/*Algorithm: 
Function 
- Iterate over the characters of a string 
- Find pairs of consecutive vowals 
- Return the starting index of the last pair found 

Main function: 
- Create variable 'highestIndex' = null
- Create a variable 'count' and set it to 0
- Create a string variable 'vowals' > 'aeuioAEUIO'
- Iterate over each single character of the string
  - Each time the character is included in "vowals" increase 'count' by 1 
  - When count is 2 set 'highestIndex' to the current index -1 
  - Reset 'count' to 0 

- Return 'highestIndex' 
*/

function rightmostConsecutiveVowel (string) {
  let highestIndex = null; 
  let count = 1;
  let vowals = 'aeuioAEUIO';
  for(let idx = 0; idx < string.length; idx++) {
    if(vowals.includes(string[idx])) {
      count++;
    }
    if(!vowals.includes(string[idx])) {
      count = 0;
    }
    if(count === 2) {
      highestIndex = string.indexOf(string[idx - 1])
      count = 0;
      //console.log(highestIndex);
    }
  }

  return highestIndex;
}


console.log(rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")); // Output: 37
console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: 29
console.log(rightmostConsecutiveVowel("This sentence has no consecutive vowels")); // Output: null//



/* Given a sentence, write a function that finds the starting index of the rightmost occurrence of any consecutive vowel sequence in the sentence and the word it belongs to. The function should be case-insensitive and should only consider vowel sequences within individual words (not spanning multiple words).


// If a consecutive vowel sequence is found, return an array where the first element is the starting index of the sequence and the second element is the word containing that sequence.

// If no consecutive vowels are found, return an empty array.*/

// Test Cases
console.log(rightmostConsecutiveVowel_extraOutput("The quick brown fox jumps over the laaazy dog")); // Output: [37, "laaazy"]
console.log(rightmostConsecutiveVowel_extraOutput("She sells sea shells on the sea shore")); // Output: [29, "sea"]
console.log(rightmostConsecutiveVowel_extraOutput("I like eating aaapples and oranGEs")); // Output: [15, "aaapples"]
console.log(rightmostConsecutiveVowel_extraOutput("This sentence has no consecutive vowels")); // Output: []
console.log(rightmostConsecutiveVowel_extraOutput("Queueing is fun but cooool")); // Output: [23, "cooool"]


//second attempt: 46 minutes

/* Given a sentence, write a function that finds the starting index of the rightmost occurrence of any consecutive vowel sequence in the sentence and the word it belongs to. The function should be case-insensitive and should only consider vowel sequences within individual words (not spanning multiple words).


// If a consecutive vowel sequence is found, return an array where the first element is the starting index of the sequence and the second element is the word containing that sequence.

// If no consecutive vowels are found, return an empty array.

A: Find the rightermost index of a consecutive vowel secquence in a word and the corresponding word 

[main function]
CREATE `righterMostIndex` variable and set to return value of [helperfunction 'findRighterMostIndex']
IF `righterMostIndex` is -1
  RETURN empty array 
CREATE `correspondingWord` variale and se to return value of [helperfunction `findCorrespondingWord`]
RETURN array with `righerMostINdex` and `correspondingWord`

[helperfunction 'righerMostIndex`]
CREATE variable `highestIndex` and set to -1
CREATE variable `vowals` and set to string 'aeoui'
ITERATE over lowerCase version of input string 
  - IF current char is included in `vowals` AND next char is included in `vowals` AND index of current char is bigger than `highestIndex` 
    - SET highestIndex to index of current char 
RETURN `highestIndex` 

[helperfunction `correspondingWord`]
CREATE `variable `vowals` and set to string 'aeoui`
ITERATE over lowerCase version of input string turned into array of single words 
  - ITERATE over elements 
    - SELECT words where current char is included in `vowals` AND next char is included in `vowals` 
RETURN last element in array selection 
*/
let p = console.log; 

function rightmostConsecutiveVowel_extraOutput (sentence) {
  let righterMostIndex = findRighterMostIndex(sentence.toLowerCase(), 'aeoui'); 
  if(righterMostIndex === -1) return [];
  let correspondingWord = findCorrespondingWord(sentence.toLowerCase(), 'aeoui');
  return [righterMostIndex, correspondingWord];
}

function findRighterMostIndex (sentence, vowals) {
  let highestIndex = -1; 

  for (let idx = 0; idx < sentence.length; idx ++){
    if(vowals.includes(sentence[idx]) && vowals.includes(sentence[idx + 1]) && idx > highestIndex) highestIndex = idx; 
  }
  return highestIndex; 
}

function findCorrespondingWord (sentence, vowals) {
  let words = sentence.split(' ').filter(words => {
    for (let idx = 0; idx < words.length; idx ++){
      if(vowals.includes(words[idx]) && vowals.includes(words[idx + 1])) return true;
    }
    return false; 
  })
  return words[words.length - 1]
}



// Test Cases
console.log(rightmostConsecutiveVowel_extraOutput("The quick brown fox jumps over the laaazy dog")); // Output: [37, "laaazy"]
console.log(rightmostConsecutiveVowel_extraOutput("She sells sea shells on the sea shore")); // Output: [29, "sea"]
console.log(rightmostConsecutiveVowel_extraOutput("I like eating aaapples and oranGEs")); // Output: [15, "aaapples"]
console.log(rightmostConsecutiveVowel_extraOutput("This sentence has no consecutive vowels")); // Output: []
console.log(rightmostConsecutiveVowel_extraOutput("Queueing is fun but cooool")); // Output: [23, "cooool"]

// third attempt: 25 minutes

/* Given a sentence, write a function that finds the starting index of the rightmost occurrence of any consecutive vowel sequence in the sentence and the word it belongs to. The function should be case-insensitive and should only consider vowel sequences within individual words (not spanning multiple words).

  
A: Find the starting index and corresponding word of the rightermost pair of vowals. 

CREATE `words` variable and set to array of single words from input sentence in lower case
CREATE `vowals` variable and set to string of vowals in lowerCase
CREATE targetWord variable
CREATE targetIndex variable and set to 0
CREATE `countIndex` variable and set to 0
ITERATE through `words` 
  - For each word 
    - ITERATE through index
      - IF char of current index is included in `vowals` AND char of current index + 1 is included in vowals 
        - SET `targetIndex` to `counttIndex` plus current index\
        - SET `targetWord` to curren word 
    - INCREMENT countIndex by length of current word + 1
IF `targetIndex` is truthy
 RETURN array with `targetIndex` and `targetWord` 
ELSE 
  RETURN empty array
*/
let p = console.log;

function rightmostConsecutiveVowel_extraOutput (sentence) {
  let words = sentence.toLowerCase().split(' ');
  let vowals = 'aeoui';
  let targetWord;
  let targetIndex = 0;
  let countIndex = 0; 


  for (let word of words) {
    [...word].forEach((char, idx) => {
      if(vowals.includes(char) && vowals.includes(word[idx + 1])) {
        targetIndex = countIndex + idx; 
        targetWord = word;
      } 
    })
    countIndex += word.length + 1;
  }
  return targetIndex ? [targetIndex, targetWord] : [];
}