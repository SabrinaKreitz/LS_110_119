/*
Create a function that returns the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. You may assume that the input string contains only alphanumeric characters.

A: Calculate count of characters in string that occure more than once. 

CREATE `list` object and set to empty object 
LOOP through lowerCase version of input string 
  - IF current char exists in `list` increment value by 1 
  - ELSE create property of current char in `list` and set value to 1
CREATE `characterCounts` array and set to values of `list` that are greater than 1
RETURN length of `characterCounts`
*/

const p = console.log;

function distinctMultiples (string) {
  let list = {};
  for (let char of string.toLowerCase()) {
    list[char] ? list[char] += 1 : list[char] = 1;
  }
 return Object.values(list).filter(num => num > 1).length;
}

p(distinctMultiples('xyz') === 0);              // (none)
p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
p(distinctMultiples('unununium') === 2);        // u, n
p(distinctMultiples('multiplicity') === 3);     // l, t, i
p(distinctMultiples('7657') === 1);             // 7
p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5
