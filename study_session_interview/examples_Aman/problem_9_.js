/* 15 minutes
Implement a function, capitalize, that capitalizes the first letter of a word in a sentence. 
However, only capitalize if the word is followed by a word starting with a vowel. 


Algorithm
Capitalize the first letter of a word in a sentence if the next word starts with a vowel

Create vowals string with all lowerCase vowals 
Iterate through input string as array of single words 
If the first letter of the following word is included in the vowals string
Capitalize first letter of current word 
Return mutated array as string
*/

function capitalize (string) {
  let vowals = 'aouei'; 
  let arrayOfWords = string.split(' ')

  for (let idx = 0; idx < arrayOfWords.length - 1; idx++) {
    if(vowals.includes(arrayOfWords[idx + 1][0])){
    arrayOfWords[idx] =  arrayOfWords[idx][0].toUpperCase() + arrayOfWords[idx].substring(1) }
  }
  return arrayOfWords.join(" ");
}

// Test cases
console.log(capitalize("hello apple world")); // "Hello apple world"
console.log(capitalize("this is an umbrella")); // "This Is An umbrella"
console.log(capitalize("every vowel starts an echo")); // "every vowel Starts An echo"
console.log(capitalize("under the oak tree")); // "under The oak tree"
console.log(capitalize("a quick brown fox")); // "a quick brown fox"