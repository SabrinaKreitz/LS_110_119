
/*
Create a function that takes an array of numbers as an argument. For each number, determine how many numbers in the array are smaller than it, and place the answer in an array. Return the resulting array.

When counting numbers, only count unique values. That is, if a number occurs multiple times in the array, it should only be counted once.

Problem: 
- create `countArray`
- for each number in an array 
  > create `alreadyCounted` array 
  > create new array with all elements except the current > from that array, filter all elements [that are not repeated > after checking if current number is included in `alreadyCounted` add it to `alreadyCounted`] and are smaller than the current num > push length of array to `countArray`

Data: 
Input: 
Array 
Intermediate: Array that holds elements that have been counted > avoid counting same twice 
Ouput: Array > count of smaller numbers for each number 

A: For each element in an array, count the numbers in the array that are both unique and smaller than the current element. 

CREATE countArray and set it to empty array
ITERATE through input array 
  - CREATE `alreadyCounted` and set it to empty array
  - ITERATE through input array and only select elements that don't have the current idx
    - ITERATE through that array to make a selection 
      - IF the current number of iteration is included in `alreadyCounted` OR is bigger than or equal to the current number of the outer iteration 
        - RETURN false 
        - push current number to `alreadyCounted` 
        - ELSE RETURN true 
      - PUSH length of selected elements to `countArray`
RETURN `countArray` 
*/

function smallerNumbersThanCurrent (array) {
  let countArray = [];

  array.forEach((dig1, idx1) => {
    let alreadyCounted = [];

    let count = array.filter((dig2, idx2) => idx1 !== idx2).filter(dig3 => {
      if(alreadyCounted.includes(dig3) || dig3 >= dig1) return false;
      alreadyCounted.push(dig3)
      return true;
    }).length

    countArray.push(count);
  })
  return countArray;
}


const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));

// second attempt: 17 minutes

/*
Create a function that takes an array of numbers as an argument. For each number, determine how many numbers in the array are smaller than it, and place the answer in an array. Return the resulting array.

When counting numbers, only count unique values. That is, if a number occurs multiple times in the array, it should only be counted once.

A: For each element in an array, count the elements that are smaller than the current number and unique. 

CREATE `smallerNumbers` array and set to empty array 
LOOP through input array 
  - CREATE `countArray` and set to empty array
      - For each element, loop through input array 
          - IF current element of inner loop is smaller than element of outer loop AND doesn't already exist in `countArray` 
              - push to countArray
  - push length of `countArray` to `smallerNumbers` 
RETURN smallerNumbers
   
*/


const p = console.log;


function smallerNumbersThanCurrent (array) {
  let smallerNumbers = [];
  array.forEach(num1 => {
    let countArray = [];
    array.forEach(num2 => {
      if(num2 < num1 && !countArray.includes(num2)) countArray.push(num2); 
    })
    smallerNumbers.push(countArray.length);
  })
  return smallerNumbers; 
}


const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));
