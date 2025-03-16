/* 20 minutes 
 Write a method that takes an array of consecutive letters as input and returns the missing letter.

Algorithm: 
Create an alphabet from first until last letter of input array 
Find the character of alphabet that is not present in input array 
-------

If input arg is empty array
  Return empty array 
Create chunk and set to return value of createAlphabetChunk(first element of input array, last element of input array)
Create missingLetter variable 
Iterate chunk 
  If current character is not included in input array 
    Set missingLetter to current character
Return missingLetter

-------
helperfunction createAlphabetChunk(start, end)
Create chunk and set to emptry string 
Loop from code point of start until code point of end 
  Append corresponding string character of current code point to chunk 
Return chunk

 */

function determine_missing_letter (array) {
  if (array.length === 0) return []; 

  let chunk = createAlphabetChunk(array[0], array[array.length - 1]); 
  let missingLetter; 

  for (let char of chunk) {
    if (!array.includes(char)) missingLetter = char; 
  }
  return missingLetter; 
}


function createAlphabetChunk(start, end) {
  let chunk = ''; 

  for (let code = start.charCodeAt(); code <= end.charCodeAt(); code++) {
    chunk += String.fromCharCode(code); 
  }
  return chunk; 
}


console.log(determine_missing_letter(['a','b','c','d','f']) === 'e')
console.log(determine_missing_letter(['o','q','r','s']) === 'p')
console.log(determine_missing_letter(['H','J','K','L']) === 'I')
console.log(determine_missing_letter([])) // [] 
