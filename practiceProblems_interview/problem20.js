/*
minutes: 8
Create a function that takes an array of numbers, all of which are the same except one. Find and return the number in the array that differs from all the rest.

The array will always contain at least 3 numbers, and there will always be exactly one number that is different.

A: Find the element in an array which appears only once 

CREATE `count` object and set it to an empty object
LOOP through input array 
  - IF current num exists in `count` 
    - Increment it's value by 1 
  - ELSE 
    - Create entry in `count` and set value to 1
RETURN 
  - array of entries from `count` object 
  - select entry with 1st-indexed element of `1` 
  - select 0-indexed element of that entry 
  - return as a number value
*/

const p = console.log;

function whatIsDifferent (array) {
  let count = {};

  for (let num of array) {
    count[num] ? count[num] += 1: count[num] = 1;
  }

  return Number(Object.entries(count).filter(sub => sub[1] === 1)[0][0]);
}
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);

// Rey's solution 
/*
Algorithm
- Find the number with only one index
- Return that number

1. Iterate over the array
  - Find element that has the same first and last index
2. Return first element in the array
*/

function whatIsDifferent(arr) {
  return arr.find(el => arr.indexOf(el) === arr.lastIndexOf(el));
}
