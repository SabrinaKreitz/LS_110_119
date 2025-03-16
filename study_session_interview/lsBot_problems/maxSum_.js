/* 32 minutes >> try with Kadane's Algorithm

Write a function maxSequenceSum that finds the contiguous subarray within an array of integers which has the largest sum. Return the sum.
If the array is empty or contains only negative numbers, return 0.

Data
Input: array 
[7, -5, 4, 5, -8, 3]

Intermediate: array of subarrays 
[7, -5]
[7, -5, 4]
[7, -5, 4, 5]

Output: number > largest sum of consecutive subarrays in input array 
11

Problem: 
Guard clause: Check if array is empty or has only negative numbers 
1. Create all consecutive subarrays of more than 2 numbers from input array 
2. Iterate through subarrays and create sum of all numbers 
3. Return the largest sum 

Algorithm: 
1. Create all consecutive subarrays of more than 2 numbers from input array 
2. Iterate through subarrays and create sum of all numbers 
3. Return the largest sum 

If the input array is empty OR all elements of the input array are negative integers 
  Return 0 
Create allSubs and set to return value of createSubs(input array)
Create allSums and set to return value of
  Iterate through allSubs and transform each subarray into a number formed by all it's elements 
Sort allSums in descending order and return the first element 

Helperfunction createSubs(array)
Create subs array and set to empty array 
Iterate through indices of array starting at start = 0 
  Iterate through indices of array starting at stop = start + 1
    Create sub and set to subarray from array from start until stop 
    Push sub to subs 
Return subs 

*/

function maxSequenceSum(array) {
  if(array.length === 0 || array.every(num => num < 0)) return 0; 

  let allSubs = createSubs(array); 
  let allSums= allSubs.map(sub => sub.reduce((a, b) => a + b)); 

 return allSums.sort((a, b) => b - a)[0]; 
  
}

function createSubs(array) {
  let subs = []; 

  for (let start = 0; start < array.length; start ++) {

    for (let stop = start + 1; stop <= array.length; stop++) {

      let sub = array.slice(start, stop); 
      subs.push(sub); 
    }
  }
  return subs; 
}

// Examples:
// console.log(maxSequenceSum([])) // 0
// console.log(maxSequenceSum([-2, -1, -3])) // 0


console.log(maxSequenceSum([1, 2, 3, 4])) // 10 (all elements)
console.log(maxSequenceSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6 (sum of [4, -1, 2, 1])
console.log(maxSequenceSum([7, -5, 4, 5, -8, 3])) // 11 (sum of [7, -5, 4, 5])