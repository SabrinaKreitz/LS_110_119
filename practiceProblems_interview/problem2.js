
/*
Initial time: 21mins

Create a function that takes an array of integers as an argument. The function should return the minimum sum of 5 consecutive numbers in the array. If the array contains fewer than 5 elements, the function should return null.

Problem 
- Return `null` if the length of the input array is smaller than 5
- Variable subArraySums and set to empty array 
- Create all possible sub-arrays of at least 5 elements 
  - Make a loop starting at idx 0 and incrementing by 1, runs as long as idx + 4 is smaller than length of input array 
    - Create subArray from input array
      -  current -indexed element until current index + 4 element 
       - add sum of subArray elements to `subArraySums` 
RETURN 0-indexed element of `subArraySums` array sorted in ascending order 


A: Find the smallest sum of all possible subarrays of 5 consecutive numbers in an array. 

IF length of input array is smaller than 5
  - return `null`
CREATE variable `subArraySums` and set to empty array 
ITERATE from idx 0, incrementing by 1, iterating as long as idx + 4 is smaller than length of input array 
  - CREATE variable `subArray` from current index of input array until current index + 4 of input array 
  - Add sum of all elements of `subArray` to `subArraySums` 
SORT subArraySums in ascending order 
RETURN 0-indexed element of `subArraySums` 
*/

function minimumSum (array) {
  const LENGTH_ARRAY = array.length; 
  if(LENGTH_ARRAY < 5) return null; 
  let subArraySums = [];

  for (let idx = 0; idx + 4 < LENGTH_ARRAY; idx++) {
    let subArray = array.slice(idx, idx + 5);
    subArraySums.push(subArray.reduce((a, b) => a+b));
  }

  subArraySums.sort((a, b) => a - b);

  return subArraySums[0];
}

const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);