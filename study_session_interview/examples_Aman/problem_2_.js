/* 14 minutes
Given a list of integers and a single sum value, return the first two values
in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum,
the pair whose second element has the smallest index is the solution.

Example:

console.log(sumPairs([4, 3, 2, 3, 4],         8)); [4, 4]
                      ^-----^         4 + 2 = 6, indices: 0, 2
                         ^-----^      3 + 3 = 6, indices: 1, 3
                            ^-----^   2 + 4 = 6, indices: 2, 4
== [4, 2]

Negative numbers and duplicate numbers can and will appear.

Problem
Find the pair of numbers in input array which sums up to the value of the second input argument 
If multiple pairs exist, return the one for which the second element has the smallest value 
  - keep track of index of second element 
  - keep track of sum 

Data
Input: array, sum 
Output: array > subarray of two numbers that sum up to sum > first matching pair in order of appearance whose second elements index is smallest 

Algorithm 
Find the subarray of two numbers from the input array, for which the sum of the number equals the number of the second input argument. If more than one pair is found, return the one for which the index of the second argument is smallest. 

Create pair variable 
Create secondIndex variable and set to Infinity 
Iterate through input array and form all possible subarrais of two numbers 
  If current subarray sums up to equal the second input argument AND the second index is smaller than secondIndex
  Set pair to current subarray
Return pair
*/
let p = console.log; 

function sumPairs (array, sum) {
  let pair; 
  let secondIndex = Infinity; 

  for(let idx1 = 0; idx1 < array.length - 1; idx1++) {
    for(let idx2 = idx1 + 1; idx2 < array.length; idx2++) {
      if(array[idx1] + array[idx2] === sum && idx2 < secondIndex) {
        pair = [array[idx1], array[idx2]]; 
        secondIndex = idx2; 
      } 
    }
  }
  return pair; 
}

 
//  // Test cases
console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
 console.log(sumPairs([0, 0, -2, 3], 2)); // undefined
 console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); // [1, 1]
 console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
 console.log(sumPairs([0, 2, 0], 0)); // [0, 0]
 console.log(sumPairs([5, 9, 13, -3], 10)); // [13, -3]