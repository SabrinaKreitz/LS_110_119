/* 22 minutes
Write a function called closestPairSum that takes an array of integers and a target number. The function should find the pair of numbers in the array that have a sum closest to the target number. Return an array containing the two numbers and their absolute difference from the target sum.
For example, if the array is [1, 3, 5, 9, 11, 15] and the target is 12, the closest pair would be [3, 9] with a sum of 12, which has an absolute difference of 0 from the target.

Data
Input1 > array 
[1, 3, 5, 9, 11, 15]
Input 2 > target sum 
12

Intermediary structure > pairs of subarrays 
[3, 9]


Output > array with 3 elements > the two numbers which summed up are closest to targed sum and the absolute difference from their sum to target sum 
[3, 9, 0]

Rule: 
- negative integers can occur > difference should be absolute 
- If more than one possible pair is found > return the second one 

Problem

1. Track difference and target pair  
2. Create all pairs as subarrays
2. Culculate each difference to sum as absolute number 
3. If difference is smaller than current 
4. Replace difference and target pair with current 

[1, 2, 3, 4, 5], 10 > 4, 5

difference 
target pair 
 [1,  2] > 7 > if smaller than current difference > replace target pair with current array with pairs 
 1 3 > 
 1 4
 1 5
 2 3
 2 4
 2 5
 3 4
 3 5
4 5

Algorithm 
1. Create all pairs of numbers in input array as subarray
2. Culculate difference to target sum for each subarray 
3. Return the subarray for which the difference to target sum is smallest and it's difference 

Create difference variable and set to infinity 
Create targetPair variable 
Iterate through indices of input array starting at idx1 set to 0 
  Iterate through indices of input array starting at idx2 set to idx1 + 1
    Create currentPair and set to array with elements from input array with indices idx1 and idx2
    Create currentDifference and set to the result of subtstracting the sum of elements of currentPair from targetSum as absolute number 
    If currentDifference is smaller than difference 
      Set currentPair to targetPair 
      Set difference to currentDifference 
Add difference as an element to targetPair and return targetPair

*/

let p = console.log; 

function closestPairSum(arr, targetSum) {
  let difference = Infinity; 
  let targetPair; 

  for (let idx1 = 0; idx1 < arr.length - 1; idx1++) {

    for(let idx2 = idx1 + 1; idx2 < arr.length; idx2++) {
      let currentPair = [arr[idx1], arr[idx2]]; 
      let currentDifference = Math.abs(targetSum - currentPair.reduce((a, b) => a + b)); 
      if (currentDifference < difference) {
        difference = currentDifference; 
        targetPair = [arr[idx1], arr[idx2]]; 
      }
    }
  }
  return targetPair.concat(difference); 
}


p(closestPairSum([1, 3, 5, 9, 11, 15], 12));  // [3, 9, 0]
p(closestPairSum([1, 2, 3, 4, 5], 10));       // [4, 5, 1]
p(closestPairSum([-5, -2, 1, 4, 7], 0));      // [-2, 1, 1]>>
p(closestPairSum([5, 10, 15, 20], 8));        // [5, 10, 7]
p(closestPairSum([3, 7], 0));                 // [3, 7, 10]