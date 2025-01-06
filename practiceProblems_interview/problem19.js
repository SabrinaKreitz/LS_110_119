/*

minutes: 9

Create a function that takes an array of integers as an argument and returns the integer that appears an odd number of times. There will always be exactly one such integer in the input array.

A: Count the number of appearances in an array. Return the number with an odd count. 

CREATE `count` object and set to an empty object 
LOOP through the numbers in the array 
  - IF number exists in `count` object 
    - Increment value by 1 
  - ELSE 
    - Create number property in object and set value to 1
TURN `count` object into array of key-value pairs
  - SELECT sub-element for which the 1-indexed element is odd
  - RETURN 0-indexed elemnt of sub-element 
*/

const p = console.log;

function oddFellow (array) {
  let count = {};

  for(let num of array) {
    count[num] ? count[num] += 1 : count[num] = 1;
  }

return Number(Object.entries(count).filter(sub => sub[1] % 2 !== 0)[0][0]);
}
p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);
