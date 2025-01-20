/*
minutes: 29
Create a function that takes an array of integers as an argument. Determine and return the index N for which all numbers with an index less than N sum to the same value as the numbers with an index greater than N. If there is no index that would make this happen, return -1.

If you are given an array with multiple answers, return the index with the smallest value.

The sum of the numbers to the left of index 0 is 0. Likewise, the sum of the numbers to the right of the last element is 0.


A: Find all elements in an array for which the sum of elements to it's right and to it's left are the same. Of those elements, return the index that is smallest. 

CREATE `targetIndices` array and set to empty array 
IF sum of all elements greater than 0-indexed element is 0 
  - PUSH index 0 to `targetIndices` 
IF sum of all elements smaller than last-indexed element is 0 
  - PUSH indx of last element to `targetIndices` 
LOOP through input array - start at 1st-indexed element, increment by 1, run while idx is smaller than last-idexed element 
  - CREATE sumLeft and set to sum of all elements with index smaller than current element 
  - CREATE sumRight and set to sum of all elements with index greater than current element 
  IF sumLeft and sumRight are equal 
    - PUSH current index to `targetIndices` 
IF length of `targetIndices` is 0
  RETURN -1
SORT `targetIndices` in ascending order and RETURN it's 0-indexed element
*/

const p = console.log;

function equalSumIndex (array) {
  let targetIndices = [];

  if(array.slice(1).reduce((a, b) => a + b) === 0) targetIndices.push(0);
  if(array.slice(0, array.length - 1).reduce((a, b) => a + b) === 0) targetIndices.push(array.length -1);

  for (let idx = 1; idx < array.length - 1; idx++) {
    let sumLeft = array.slice(0, idx).reduce((a, b) => a + b);
    let sumRight = array.slice(idx + 1).reduce((a, b) => a + b);
    if(sumLeft === sumRight) targetIndices.push(idx);
  }
  
  if(targetIndices.length == 0) return -1; 
  return targetIndices.sort((a, b) => a - b)[0];
}

p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);


/* Second attempt: 30 minutes 

Create a function that takes an array of integers as an argument. Determine and return the index N for which all numbers with an index less than N sum to the same value as the numbers with an index greater than N. If there is no index that would make this happen, return -1.

If you are given an array with multiple answers, return the index with the smallest value.

The sum of the numbers to the left of index 0 is 0. Likewise, the sum of the numbers to the right of the last element is 0.


A: Find the indices in an array, for which all values of indices greater of the current index and smaller than the current index have the same sum. Return the smallest of those indices. 

CREATE `targetIndex` variable and set to infinity 
IF sum of all element with an index greater than 0 equals to 0 
  - RETURN 0 
IF sum of all elements with an index smaller than the last-indexed element equals to 0 
    - set target index to last indexed element 
ITERATE through input array - starting at 1st-indexed element, running as long as index is smaller than lst-indexed element 
  - CREATE variable `left` and set to sum of all elements with index smaller of current index 
  - CREATE variable `right` and set to sum of all elements with index bigger than current index 
  IF `left` and `right` are equal AND current index is smaller than `targetIndex` 
    - set target index to current index
IF targetIndex equals infinity 
  - RETURN -1 
ELSE 
  - RETURN targetIndex
*/

let p = console.log; 

function equalSumIndex (array) {
  let targetIndex = Infinity; 
  const LAST =  array.length - 1

  if(array.slice(1).reduce((a, b) => a+ b) === 0) return 0; 

  if (array.slice(0, LAST).reduce((a, b) => a+ b) === 0) targetIndex = LAST; 

for (let idx = 1; idx < LAST; idx++) {
  let left = array.slice(0, idx).reduce((a, b) => a + b); 
  let right = array.slice(idx + 1).reduce((a, b) => a + b); 
  if(left === right && idx < targetIndex) targetIndex = idx; 
}
return targetIndex === Infinity ? -1 : targetIndex; 
}

p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// // The following test case could return 0 or 3. Since we're
// // supposed to return the smallest correct index, the correct
// // return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);