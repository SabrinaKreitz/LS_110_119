// Write a function that returns the count of combinations of three numbers
// that have 2 odd numbers and 1 even. If there’s none return -1.
// All numbers in the array will be integers greater than 0.

/*
[1, 2, 3, 4]
[[1, 2, 3], [2, 3, 4], [3, 4]]
// 1, 2, 3/ 1, 3, 4,/ 2, 3, 4,/ 3, 4, 1
odd: 1, 3
even: 2

P:
In: array of numbers
Out: number

- find all combinations of 3 numbers
- if 2 numbers are odd and 1 is even, keep their track
- 

D:
Array

A:
- Create a count, iterate over the input array
- Find a group of 3 numbers, if it passes the test
- Update count
--------------
1. Initialize count to 0
2. Iterate over the input array
 - Iterate over the input array
 - Get a group of 3 numbers
 - If 2 numbers are odd and 1 is even in the group
 - Update count by 1
3. Return count
-----------------
Func: oddities(arr)
1. Inititalize oddCount to 0
2. Initialize evenCount to 0
3. Iterat over the input array
 - If current num is odd
  - Increment oddCount by 1
 - Othwerwise, increment eveCount by 1
4. If oddCount equals 2 AND evenCount is 1, return a boolean
-------------
*/

function oddities(arr) {
  let evenCount = 0;
  let oddCount = 0;

  for (let idx = 0; idx < arr.length; idx +=1) {
    if (arr[idx] % 2 === 1) {
      oddCount += 1;
    } else {
      evenCount += 1;
    }
  }

  return (oddCount === 2) && (evenCount === 1);
}


function countTriples(nums) {
  let count = 0;

  for (let idx = 0; idx < nums.length; idx += 1) {
    for (let jdx = idx + 1; jdx < nums.length; jdx += 1) {
      for (let pdx = jdx + 1; pdx < nums.length; pdx += 1) {
        let threeNums = [nums[idx], nums[jdx], nums[pdx]];
        
        if (oddities(threeNums)) {
          count += 1;
        }
      }
    }
  }

  return count ? count : -1;
}
console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9

//2nd attempt > 45 minutes

// A: Find all possible triplets of 2 odd and 1 even number in array 
//     - Find all unique pairs of odd numbers in array and multiply with count of even numbers 

// CREATE onlyOdds and set to array of odd numbers in array 
// CREATE countOfEvens and set to length of only even numbers in array 

// IF onlyOdds is samaller than 2 OR countOfEvens is smaller than 1 
//    - RETURN -1

// RETURN the product of accumulated indices of onlyOdds array with countOfEvens

function countTriples (array) {
  
  let onlyOdds = array.filter(num => num % 2 === 1);  

  let countOfEvens = array.filter(num => num % 2 === 0).length; 

  if (onlyOdds.length < 2 || countOfEvens < 1) return -1 

  return onlyOdds.map((_, idx) => idx).reduce((a, b) => a + b) * countOfEvens // count of even numbers times count of unique pairs of odd number equals possible combinations. Count of unique pairs of odd numbers can be found by multiplying it's indices (that method doesn't work for triples - there it's better to use the mathematical formula for finding k combinations in n numbers.)
}


// console.log(countTriples([1, 2, 3, 4])); // Expected output: 2
// console.log(countTriples([2, 4, 6, 8])); // Expected output: -1
// console.log(countTriples([1, 3, 5, 7])); // Expected output: -1
// console.log(countTriples([1, 2, 3, 4, 5, 6])); // Expected output: 9
//console.log(countTriples([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9])) // expected output 84 (added test cases )
//console.log(countTriples([23, 4, 5, 23, 5, 66, 3, 4, 5, 11, 2, 3, 5, 4, 6, 7, 89, 90, 111])) // expected output 462 (added test cases)

//note: official formula for counting all unique triples is: ((n - 1) * n) / 2