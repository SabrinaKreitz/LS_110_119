/*
TO BE CONTINUED > TURNED INTO HACKING AND SLASHING WITH MORE THAN 40 MINUTES
Create a function that takes two string arguments and returns the number of times that the second string occurs in the first string. Note that overlapping strings don't count: 'babab' contains 1 instance of 'bab', not 2.

You may assume that the second argument is never an empty string.

A:Count the amount of times that a search string has a unique pair in the target string 


CREATE searchStringLength variable and set it to length of 2nd argument 
CREATE count variable and set it to 0
CREATE lastIndex variable 
ITERATE through input string starting at 0 and incrementing by 1 at each iteration 
  - CREATE subString variable and set to substring from current index to current index + searchStringLength
  - CREATE currentIndices array and fill it with all indices from current idx to idx + searchStringLength [helperfunction]
  - IF current substring matches input string and lastIndex is not included in currentIndices
  - Increment count 
  - Set lastIndex to last element in currentIndices
RETURN count
*/
const p = console.log;

function countSubstrings (targetString, searchString) {
  const LENGTH = searchString.length;
  let count = 0; 
  let lastIndex;
  for (let idx = 0; idx <= targetString.length - LENGTH; idx++) {
    let subString = targetString.substring(idx, idx + LENGTH);
    let currentIndices = indicesOfSubstring(idx, LENGTH);
    if(!currentIndices.includes(lastIndex) && subString === searchString) {
      count++;
      lastIndex = currentIndices[currentIndices.length - 1];
    }
  }
  return count;
}

function indicesOfSubstring (index, elements) {
  let indices = [];
  for (let idx = index; idx < index + elements; idx ++) {
    indices.push(idx);
  }
  return indices;
}



p(countSubstrings('babab', 'bab') === 1);
p(countSubstrings('babab', 'ba') === 2);
p(countSubstrings('babab', 'b') === 3);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('', 'x') === 0);
p(countSubstrings('bbbaabbbbaab', 'baab') === 2);
p(countSubstrings('bbbaabbbbaab', 'bbaab') === 2);
p(countSubstrings('bbbaabbbbaabb', 'bbbaabb') === 1);

/* 2nd attempt 20 minutes
Create a function that takes two string arguments and returns the number of times that the second string occurs in the first string. Note that overlapping strings don't count: 'babab' contains 1 instance of 'bab', not 2.

You may assume that the second argument is never an empty string.

A: Count the amount of times that arg2 uniquely exists in arg1 

CREATE count variable and set to 0
CREATE length2 
ITERATE over arg1 starting at idx1 = 0 as long as idx is smaller or equal to length of arg1 minus length of arg2 
CREATE substring of arg1 from idx1 until idx1 + length2
  IF substring equals arg 2
    Increment count by 1
    Increment idx1 by length2 
  ELSE 
    Increment idx1 by 1
RETURN count 
*/

let p = console.log; 

function countSubstrings (string1, string2) {
  let count = 0; 
  let length1 = string1.length; 
  let length2 = string2.length; 
  let idx = 0; 

  while(idx <= length1 - length2) {
    let substring = string1.substring(idx, idx + length2); 

    if(substring === string2) {
      count ++; 
      idx += length2; 
    } else {
      idx += 1; 
    }
  }

  return count; 
}


p(countSubstrings('babab', 'bab') === 1);
p(countSubstrings('babab', 'ba') === 2);
p(countSubstrings('babab', 'b') === 3);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('', 'x') === 0);
 p(countSubstrings('bbbaabbbbaab', 'baab') === 2);
p(countSubstrings('bbbaabbbbaab', 'bbaab') === 2);
p(countSubstrings('bbbaabbbbaabb', 'bbbaabb') === 1);
