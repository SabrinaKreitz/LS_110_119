
/* 33 minutes
COUNT NUMBER OF SUBSTRINGS (med)
Given a string of lowercase alphabets,
count all possible substrings (not necessarily distinct) that have exactly k distinct characters.


Method
Create all possible substrings from input string starting at length of k [helperfunction]
Find count of different characters for each substring 
Iterate through substring 
  Create array with unique characters from substring 
  If length of array is equal to k 
    Increment count 


Algorithm
Find substrings from input string with exactly k count of unique characters

Create substrings array from createSubstrings (arg1, arg2(k)) [helperfunction]
Create count and set to 0
Iterate through substrings 
  Create uniqueChars and set to empty string
    Iterate through strings from substring
      If uniqueChars does not include current char
        Add currentChar to uniqueChars
    If length of uniqueChars is equal to k (arg2)
      Increment count by 1
Return count 

---------------

[helperfunction] createSubstrings(string > arg1, k> arg2)
create substrings and set to empty array 
Iterate 
  Start at idx1 = 0, iterate as long as idx1 is smaller then length of input string 
    Iterate 
      Start at idx2 = idx1 + k; iterate as long as idx2 is smaller than length of input string 
        Create substring from idx1 until idx2 and push to substrings
Return substrings
*/

function substrCount(string, k) {
  let substrings = createSubstrings(string, k); 
  let count = 0;
  
  substrings.forEach(sub => {
    let uniqueChars = ''; 
    for (let char of sub) {
      if (!uniqueChars.includes(char)) uniqueChars += char; 
    }

    if (uniqueChars.length === k) count++
  })

  return count; 
}

function createSubstrings(string, k) {
  let substrings = []; 

  for (let idx1 = 0; idx1 <= string.length; idx1++) {
    for (let idx2 = idx1 + k; idx2 <= string.length; idx2++) {
      substrings.push(string.substring(idx1, idx2))
    }
  }

  return substrings; 
}


console.log(substrCount("aba", 2)); // 3
console.log(substrCount("abaaca", 1)); // 7