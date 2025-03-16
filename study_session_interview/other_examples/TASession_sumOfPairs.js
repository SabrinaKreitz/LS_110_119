/* 28 minutes 
Given a list of integers and a single sum value, return the first two values
in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

Negative numbers and duplicate numbers can and will appear.

Data
Input1 >> array of number (can be duplicates or negative integers)
[4, 3, 2, 3, 4] 
Input1 >> number > target sum 
6

Output >> array of the two first elements of input array that form the sum, with the second element with the smallest index
[4, 2]

Rules: 
- If no pair can be found > return undefined 

Logic:  
Create sumPair array to save target pair
Form all possible pairs of numbers in array 
Make sums of pairs 
If a sum equals target sum && it's second element has a smaller index as any other pair
  Keep track of index of second element 
  Save the elements that form sum 
If sumPair is empty return undefined 

[4, 3, 2, 3, 4]
4 3
4 2
4 3
4 4
3 2
3 3
3 4
2 3
2 4
3 4
> iterate with outer and inner loop 
> save index of inner loop 

Algorithm
Find the earliest pair of numbers in array of numbers that forms the target sum 

Create `sumPair` variable and set to empty array 
Create `smallestIndex` variable and set to Infinity 

Iterate through indices of input array starting at start = 0 
  Iterate through indices of input array starting at stop = start + 1
    Create first varaible and set to `start` index of array 
    Create next variable and set to `stop` index of array 
    If sum of first and next are equal to target sum 
    AND 
    If stop is smaller than `smallestIndex` 
      Set `sumPair` to array with first and next as elements 
      Set smallestIndex to stop 
If sumPair is an empty array 
  Return undefined 
Else 
  Return sumPair
*/

let p = console.log; 

function sumPairs(array, targetSum) {
  let sumPair = []; 
  let smallestIndex = Infinity; 

  for (let start = 0; start < array.length - 1; start++) {
    for(let stop = start + 1; stop < array.length ; stop++) {
      let first = array[start]; 
      let next = array[stop]
      if (first + next === targetSum && stop < smallestIndex) {
        sumPair = [first, next]; 
        smallestIndex = stop; 
      }
    }
  }

  return sumPair.length === 0 ? undefined : sumPair; 
}


console.log(sumPairs([4, 3, 2, 3, 4],         6));
//                    ^-----^         4 + 2 = 6, indices: 0, 2
//                       ^-----^      3 + 3 = 6, indices: 1, 3
//                          ^-----^   2 + 4 = 6, indices: 2, 4
// == [4, 2]

//Test cases
console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([0, 0, -2, 3], 2)); // undefined
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)); // [1, 1]
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([0, 2, 0], 0)); // [0, 0]
console.log(sumPairs([5, 9, 13, -3], 10)); // [13, -3]