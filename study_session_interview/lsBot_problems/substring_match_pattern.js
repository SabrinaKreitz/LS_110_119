/*Write a function that searches for all occurrences of a pattern in a string and returns an array of the starting indices of each match. Your solution should not use the built-in String.prototype.indexOf method.

'ababababa', 'aba'
Make all substrings with length of pattern 
aba > fit > 0 
bab
aba > fit > 2
bab
aba > fit > 4
bab
aba > fit > 6 

Rule: 
- Matches can be overlapping 

Data: 
Input: two strings > string + pattern > ('ababababa', 'aba');
Output: array > each starting index of the patterns fitting into the string > [0, 2, 4, 6]

Problem: 
Find all substrings in string that matches pattern 
Save the starting indices of substrings that match in array 

Logic: 
'ababababa', 'aba'
Make all substrings with length of pattern 
aba > fit > 0 > substring of indices 0 and 3
bab
aba > fit > 2
bab
aba > fit > 4
bab
aba > fit > 6 

1. Iterate through indices of array and create substrings of length of pattern 
2. Check if substring matches pattern 
3. If it does, save current index in matches array 


Algorithm: 
Create all substrings of input string that match input pattern 
Save the starting indices of substrings that match in array 

Create `matches` array and set to empty array 
Iterate through indices of input string 
  Create `substring` variable and set to substring of input string cutting from current indix until current index plus length of input pattern 
  If substring equals input pattern 
    Add current index to `matches` array 
Return `matches` array 
*/

function findAllOccurrences (str, pattern) {
  let matches = []; 

  for (let idx = 0; idx <= str.length - pattern.length; idx ++) {
    let substring = str.substring(idx, idx + pattern.length); 
    if(substring === pattern) matches.push(idx); 
  }
  console.log(matches)
}


// Example:
findAllOccurrences('ababababa', 'aba');
//should return: [0, 2, 4, 6]

findAllOccurrences('Launch School is awesome', 'o');
// should return: [10, 11, 21]

findAllOccurrences('mississippi', 'issi');
// should return: [1, 4]