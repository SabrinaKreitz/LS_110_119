/* 27 minutes
Create a function that takes an array of integers as an argument and returns an array of two numbers that are closest together in value. If there are multiple pairs that are equally close, return the pair that occurs first in the array.


Algorithm
Find the two numbers in an array of numbers for which the absolute difference is smallest and return them as an array
If two numbers have the same absolute difference, return the pair that occurs first
--------------

Create subarrays variable and set to [helperfunction] createSubArrays(inputArray)
Create absoluteDifference variable and set to Infinity 
Create closestPair variable 
Iterate through subarrays 
  Create currentDifference and set to 
    > difference between both elements and set to it's positive value
  If currentDifference is smaller than absoluteDifference 
    Set absolute Difference to currentDifference 
    Set closestPair to current subarray 
Return closestPair 

----------------

createSubArrays(array) 
create subs and set to empty array 
iterate through input array starting at start = 0 
  iterate through input array starting at end = start + 1
    Create array with start and end as elements and push to subs 
return subs
*/

function closestNumbers (array) {
  let subarrays = createSubArrays(array); 
  let absoluteDifference = Infinity; 
  let closestPair; 

  subarrays.forEach(sub => {
    let currentDifference = [...sub].sort((a, b) => b - a).reduce((a, b) => a - b); 

    if (currentDifference < absoluteDifference) {
      absoluteDifference = currentDifference; 
      closestPair = sub; 
    }
  })
  return closestPair; 
}

function createSubArrays(array) {
  let subs = []; 

  for (let start = 0; start < array.length; start++) {
    for (let end = start + 1; end < array.length; end++) {
      subs.push([array[start], array[end]]); 
    }
  }
  return subs; 
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));