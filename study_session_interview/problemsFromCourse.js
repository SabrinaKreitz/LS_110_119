// Problem 1
// Create a function that takes an array of numbers as an argument. For each number, determine how many numbers in the array are smaller than it, and place the answer in an array. Return the resulting array.

// When counting numbers, only count unique values. That is, if a number occurs multiple times in the array, it should only be counted once.

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));



// The above tests should each print true.

/*
Input: Array with numbers 
Output: Array with number 
Rules:
- Count of numbers in input array that are smaller than corresponding element in the input array. 
- Only count the elements that are smaller than the corresponding element when they are unique values. 

Algorithm: 
High-level
- Iterate through the input array
- Find out the smallest numbers from the current one 


Detailed algorithm: 

  - initalize `result` to empty array 
  -- iterate through the input array 
  --- get the count of smaler numbers than current (see the countSmallNumbers function bellow)
  -- append the result to `result` array 
  - return result 


function: countSmallNumbers(targetN, array)
-------------------------------------

  - initalize count to empty array 
  -- iterate through the input array 
  --- if the targetN is greater than the current number, count doesn't include current number 
  --- append the currnet number to count array 
  - return the length of count 
*/

function countSmallNumbers(targetN, array) {
  let count = [];
  array.forEach(num => {
    if((targetN > num) && (!count.includes(num))){
      count.push(num);
    }
  }) 
  return count.length;
}

function smallerNumbersThanCurrent(array) {
  let result = [];
  array.forEach(targetN => {
    result.push(countSmallNumbers(targetN, array));
  })

  return result; 
}

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));// none are smaller than corresponding element 
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));// return 0 if the input array has only one element 

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));