/* 21 minutes > altered for more efficient solution 
Create a function findNthOccurrence that takes three arguments: a string, a letter, and a number n. The function should return the index of the nth last occurrence of the letter in the string. If the letter doesn't occur n times in the string, return -1.

Data
Input: 3 args > 1. word, 2. character, 3. number > 'hello world', 'l', 1
Output: Number > index of the nth occurence of the letter in the string  >  2

Rule: 
- If nth occurance of letter in string doesn't exist > return -1 
- Case sensitive 
- If arg1 is empty string > return -1 

Logic: 
word = 'hello world'
letter = 'l'
n = 3
index = 2
occurance = 0

1. Iterate through word 
2. Keep track of occurance of letter > increment occurance only when character equals letter 
3. Keep track of index > start at -1 >  increment index by 1 at each step 
4. Stop iterating when occurance equals n or when reaching end of word 
5. If occurance equals n > return index > else > return -1


Output index: 9

Algorithm: 
Iterate through input word and count occurance of letter 
Keep track of index while iterating 
Return index in word for which occurance matches input number 

Create occurance variable and set to 0 
Create index variable and set to -1 

Iterate through input word 
  If current character equals input letter 
    Increment occurance by 1
  Increment index by 1 
  If occurance equals n 
    Stop iterating 
If occurance equals n 
  Return index 
Else 
  Return -1 
*/
const p = console.log;

// function findNthOccurrence (word, letter, n) {
//   let occurance = 0; 
//   let index = -1; 

//   for(let char of word) {
//     if(char === letter) occurance++; 
//     index ++; 
//     if(occurance === n) return index; 
//   }

//   return -1; 
// }

function findNthOccurrence (word, letter, n) {
  let occurance = 0; 

  for (let i = 0; i < word.length; i++) {
    if(word[i] === letter) occurance++; 
    if(occurance === n) return i;
  }

  return -1; 
}

p(findNthOccurrence('hello world', 'l', 1) === 2);  // true
p(findNthOccurrence('hello world', 'l', 2) === 3);  // true
p(findNthOccurrence('hello world', 'l', 3) === 9);  // true
p(findNthOccurrence('hello world', 'l', 4) === -1); // true
p(findNthOccurrence('hello world', 'o', 2) === 7);  // true
p(findNthOccurrence('Launch School', 'L', 1) === 0); // true
p(findNthOccurrence('Launch School', 'L', 2) === -1); // true
p(findNthOccurrence('mississippi', 's', 4) === 6);  // true
p(findNthOccurrence('', 'a', 1) === -1);  // true