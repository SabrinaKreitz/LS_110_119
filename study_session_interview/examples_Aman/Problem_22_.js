/* 18  minutes 
Create a function that returns the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. You may assume that the input string contains only alphanumeric characters.

Data
Input: string > 'xxyypzzr'
Output: number > 3 > count of digits or alphabetic characters that appear more than once 

Rules: 
- case - insesitive 
- if no matches are found > return 0 

'xxyypzzr' > 3? 
x, y, z > 3

('unununium') === 2
u, n > 2

'7657') === 1
7 > 1

'xXyYpzZr') === 3
x, y, z > 3 > case insensitive 


Problem: 
Make a list of ocurance of digits and characters in string 
Count the elements that are greater than 1 > that appear more than once 

Logic: 
Make a list from lower case version of input string
{
  x: 2
  y: 2
  p: 1
  r: 1
}
Look at the counts: [2, 2, 1, 1]
Return the ones greater than 1 > [2, 2]

Algorithm: 
Make a list of ocurance of digits and characters in string 
Return count of occurances that are greater than 1

distinctMultiples (string)
Create countObj and set to return value of countOccurances(string)
Iterate through values of countObj 
  Select values that are greater than 1 and save in arr
  Return length of arr
----------
[helperfunction] countOccurances(string)
Create countObj and set to empty object 
Iterate through lowercase version of string 
  If current elements exists in countObj 
    Increment value by 1
  Else 
    Create property of element in countObj and set value to 1
Return countObj
*/


const p = console.log;

function distinctMultiples(str) {
  let countObj = countOccurances(str); 

  return Object.values(countObj).filter(elm => elm > 1).length; 
}

function countOccurances(str) {
  let countObj = {}; 

  for(let elm of str.toLowerCase()) {
    countObj[elm] ? countObj[elm] += 1 : countObj[elm] = 1; 
  }

  return countObj; 
}

p(distinctMultiples('xyz') === 0);              // (none)
p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
p(distinctMultiples('unununium') === 2);        // u, n
p(distinctMultiples('multiplicity') === 3);     // l, t, i
p(distinctMultiples('7657') === 1);             // 7
p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
 p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5