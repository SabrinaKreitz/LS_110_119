/* > 35 minutes > took way too long to figure the complexity of keeping track of the idx 

Given a sentence, write a function that finds the starting index of
the rightmost occurrence of any consecutive vowel sequence in the sentence
and the word it belongs to.

The function should be case-insensitive and should only consider vowel
sequences within individual words (not spanning multiple words).

If a consecutive vowel sequence is found, return an array where the first element is
the starting index of the sequence and the second element is the word containing that sequence.

If no consecutive vowels are found, return an empty array.
---------------


Algorithm
Find if a word has at least 2 consecutive vowals > register starting index of sequence and word 
Return the starting index of the rightermost sequence and it's corresponding word  

-------------

Create sentence and set to lowerCase version of input string as array of single words
Create vowals and set to string of all lowercase vowals 
Create  word and set to empty string 
Create rightermostIdx and set to 0
Create trackIdx and set to 0

Iterate through sentence 
  Iterate through each string 
    Create sequence and set to empty string 
    If current char is a vowal AND next char is a vowal 
      Set righerMostIdx to trackIdx + idx of current char 
      Set word to current word in sentence
  Add length of current string + 1 to trackIdx 

If righerMostIdx is 0 
  return empty array
Else 
  return array with righterMostIdx and word
*/

function rightmostConsecutiveVowel (string) {
  let sentence = string.toLowerCase().split(' '); 
  let vowals = `aeoui`; 
  let word = ``; 
  let rightermostIdx = 0; 
  let trackIdx = 0; 

  sentence.forEach(elm => {
    for (let idx = 0; idx < elm.length; idx ++) {
      if (vowals.includes(elm[idx]) && vowals.includes(elm[idx + 1])) {
        rightermostIdx = trackIdx + idx; 
        word = elm; 
      }
    }
    trackIdx += elm.length + 1; 
  })
  return rightermostIdx === 0 ? [] : [rightermostIdx, word];
}

console.log(rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")); // Output: [37, "laaazy"]
console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: [29, "sea"]
console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: [15, "aaapples"]
console.log(rightmostConsecutiveVowel("This sentence has no consecutive vowels")); // Output: []
console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: [23, "cooool"]
