/*9 minutes
Difference of Two
The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.

Algorithm
Find all possible subarrays of two numbers in an array of numbers, for which the difference is 2 
Sort them in ascending order

Create pairsWithDifferenceOfTwo array and set to empty array
Sort input array in ascending order
Iterate through mutated input array
Create all pairs of two numbers
  If the difference between numbers is two 
  Push pair to pairsWithDifferenceOfTwo
Return pairsWithDifferenceOfTwo
*/

function differenceOfTwo (array) {
  let pairsWithDifferenceOfTwo = []; 
  let sorted = [...array].sort((a,b) => a -b); 

  for(let idx1 = 0; idx1 < array.length - 1; idx1++) {
    for (let idx2 = idx1 + 1; idx2 < array.length; idx2++) {
      if(sorted[idx2] - sorted[idx1] === 2) pairsWithDifferenceOfTwo.push([sorted[idx1], sorted[idx2]]); 
    }
  }
  return pairsWithDifferenceOfTwo; 
}

console.log(differenceOfTwo([5, 2, 7, 9, 10, 3, 11])); // [[3, 5], [5, 7], [7, 9], [9, 11]]
console.log(differenceOfTwo([21, 5, 13, 19, 23, 15])); // [[13, 15], [19, 21], [21, 23]]
console.log(differenceOfTwo([5, 2, 6, 12])); // []