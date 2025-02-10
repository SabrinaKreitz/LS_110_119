/* not completed

Create a function that takes a nonempty string as an argument and returns an array consisting of a string and an integer. If we call the string argument s, the string component of the returned array t, and the integer component of the returned array k, then s, t, and k must be related to each other such that s === t * k. The values of t and k should be the shortest possible substring and the largest possible repeat count that satisfies this equation.

You may assume that the string argument consists entirely of lowercase alphabetic letters.

Problem: 
- input: string 
- output: array and integer > string === array times integer > array === shortest possible substring, integer > largest possible repeat count 

Find the smallest possible substring in an array, which can be multiplied into the whole array. 
  - Find all the consequitve pairs > make all possible substring > count if substring exists multiple times
  - IF the number of characters in substring times the count equals the number of characters in the input string 
    - save substring to a new array 
    - sort array in ascending order depending on the length of the string 
    - pick 0-indexed element 
    - return array with elemnt and corresponding count

CREATE countOfSubstring and set it to return value of [helper: countSubstrings(input string)]
CREATE `arrayOfSubstring` and set to entries from `countOfSubstring
SELECT all elements from `arrayOfSubstring` for which the length of the 0-indexed element times the 1-st indexed element eqals the length of the input string 
SORT array in ascending order, depending on length of 0-indexed element 
RETURN 0-indexed element


countSubstrings(string) 
CREATE `countObj` and set it to empty object
LOOP through intput string, creating all possible substrings 
  IF substring does not exist in `countObj` 
    - add it and set value to 1
  ELSE 
  - increment value in obj
RETURN `countObj`

*/

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

function repeatedSubstring(string) {
  let countOfSubstrings = countSubstrings(string);
}

function countSubstring (string) {
  let countObj = {};
  for (let idx1 = 0; idx1 < string.length; idx1++) {
    p(string[idx1])
  }
}

p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
// p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
// p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
// p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
// p(eq(repeatedSubstring('superduper'), ['superduper', 1]));


/*  2nd attempt 19 minutes
Create a function that takes a nonempty string as an argument and returns an array consisting of a string and an integer. If we call the string argument s, the string component of the returned array t, and the integer component of the returned array k, then s, t, and k must be related to each other such that s === t * k. The values of t and k should be the shortest possible substring and the largest possible repeat count that satisfies this equation.

You may assume that the string argument consists entirely of lowercase alphabetic letters.

A: Find the leading substring in string, that when repeated until it fits the length of input string is equal to input string

ITERATE through input string (s) starting at idx 0 running as long as idx is smaller than length of input string 
CREATE leading substrings (t)
CREATE variable k and set to length of s divided by length of t 
  IF t repeated k times equals s 
  RETURN  array [t, k]
  */

  let p = console.log; 
  const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);
  
  
  function repeatedSubstring (s) {
  
    for (let idx = 1; idx <= s.length; idx ++) {
      let t = s.substring(0, idx); 
      let k = s.length / t.length;
      if (t.repeat(k) === s) return [t, k]
    }
  }
  p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
  p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
  p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
  p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
  p(eq(repeatedSubstring('superduper'), ['superduper', 1]));