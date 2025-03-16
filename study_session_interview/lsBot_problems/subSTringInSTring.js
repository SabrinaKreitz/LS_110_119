/* 35 minutes > but working distracted
Write a function that takes two strings as arguments. The function should return the number of times the first string occurs as a substring of the second string, without overlapping instances.


Algorithm
Make all consecutive substrings of arg1 in arg 2
Return the count of unique substrings that match arg1 

If arg1 or arg2 are empty strings 
  Return 0 

Create count variable and set to 0 
Create lastIndex variable and set to -1

Iterate through indices of arg2 
  Create substring and set to substring of arg 2, starting at current index and stopping at current index plus length of arg1
  If curren index is greater than lastIndex AND substring equals arg1 
    Increment count by 1
    Set lastIndex to current index plus length of arg1 minus 1
Return count 
*/

const p = console.log;

function countSubstrings(str1, str2) {
  if(str1.length === 0 || str2.length === 0) return 0;  

  let count = 0; 
  let lastIndex = -1; 

  for (let idx = 0; idx <= str2.length - str1.length; idx++) {
    let substring = str2.substring(idx, idx + str1.length); 
    if (idx > lastIndex && substring === str1) {
      count++; 
      lastIndex = idx + str1.length - 1;  
    }
  }
  return count; 
}

countSubstrings('a', 'banana'); // 3
countSubstrings('ab', 'cabbage'); // 1
countSubstrings('xx', 'triple x: xxx'); // 1
countSubstrings('ab', 'abc ab aba'); // 2 > should be 3
countSubstrings('abc', 'ababcabcababc'); // 3
countSubstrings('aa', 'aaaa'); // 2
countSubstrings('z', 'bzazzzz'); // 4 > should be 5
countSubstrings('z', 'bzz'); // 1 > should be 2
countSubstrings('zz', 'bzz'); // 1

//edge cases
p(countSubstrings('b', '')); // 0
p(countSubstrings('', 'abc')); // 0