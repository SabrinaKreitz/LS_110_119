/* Time: 1 hour 

Write a function, negate, that converts all “yes” words to "no" and "no" words to "yes" in a sentence. The comparison for "yes" and "no" should be case insensitive."yes" and "no" should be negated even if ending with ., ?, ,, or !. 


main function 
Turn input string into array of single words 
ITERATE through array 
  - Transform each element with return value of changeWords(word)
RETURN array as string

[helperfunction] changeWords (word)
CREATE leftSymbol variable set to empty string 
CREATE word variable set to empty string 
CREATE right Symbol variable set to empty string 
ITEATE through input word 
  - IF char is not alphabetic AND `word` is falsy 
    - add char to leftSymbol
  - IF char is not alphabetic AND `word` is truthy 
    - add char to rightSymbol 
  - IF char is alphabetic 
    - add char to word 
 IF word is `no` turn `yes` 
 ELSE IF word is `yes` turn `no` 
 ELSE IF word is `Yes` turn `No` 
 ELSE IF word is `No` turn `Yes` 
RETURN string concatenation of leftSymbol + word + rightSymbol 

*/

let p = console.log; 

function negate (sentence) {
  return sentence.split(' ').map(word => {
    return changeWord(word); 
  }).join(' '); 
}

function changeWord (word) {
  let leftSymbol = ''; 
  let middle = ''; 
  let rightSymbol = ''; 

  for (let char of word) {
    if (!(char.toLowerCase() >= `a` && char.toLowerCase() <= `z`)) {// is symbol 
      middle ? rightSymbol += char : leftSymbol += char; 
  } else {
    middle += char
  }
}
 if (middle === `yes`) {
  middle = `no`;
 } else if (middle === `no`) {
  middle = `yes`; 
 }else if (middle === `Yes`) {
  middle = `No`; 
 } else if (middle === `No`) {
  middle = `Yes`
 }
return leftSymbol + middle + rightSymbol; 
}





