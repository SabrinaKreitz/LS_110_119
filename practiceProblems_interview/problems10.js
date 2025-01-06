/*
13 minutes
Create a function that takes a string of digits as an argument and returns the number of even-numbered substrings that can be formed. For example, in the case of '1432', the even-numbered substrings are '14', '1432', '4', '432', '32', and '2', for a total of 6 substrings.
If a substring occurs more than once, you should count each occurrence as a separate substring.
  
A: 
CREATE `count` variable and set it to 0
LOOP from idx 0 as long as idx is smaller than the length of the input string, increment by 1 at each iteration 
  - LOOP from idx1 = idx as long as idx1 is smaller than the length of the input string, increment by 1 at each iteration 
    - CREATE substring variable and set it to substring from input string, from idx until idx1(including)
    - IF number version of substring is even 
      - increment `count` by 1
RETURN count
*/

const p = console.log;

function evenSubstrings (string) {
  let count = 0; 
  for (let idx1 = 0; idx1 < string.length; idx1++){
    for (let idx2 = idx1; idx2 < string.length; idx2++) {
     let substring = string.substring(idx1, idx2 + 1);
     if(Number(substring) % 2 === 0) {
      count++
     } 
    }
  }
  return count;
}


p(evenSubstrings('1432') === 6);
p(evenSubstrings('3145926') === 16);
p(evenSubstrings('2718281') === 16);
p(evenSubstrings('13579') === 0);
p(evenSubstrings('143232') === 12);