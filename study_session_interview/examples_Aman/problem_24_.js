/* 12 minutes
Create a function that takes an array of numbers, all of which are the same except one. Find and return the number in the array that differs from all the rest.

The array will always contain at least 3 numbers, and there will always be exactly one number that is different.

Data
Input > [0, 1, 0] === Output >  1


Rules: 
- The array will always have 3 + numbers
- Has only one number that's different 

Logic: 

[4, 4, 4, 3] > 3
4
[4, 4, 4]
[4, 4, 4]
[4, 4, 4]
[3]
> If length of the new arra is 1 > return 0-indexed element 
[7, 7, 7, 7.7, 7] 
[7, 7, 7, 7]
[7, 7, 7, 7]
[7, 7, 7, 7]
[7.7] > return value

Algorithm
Create arrays of same values from input array 
Return the element of the array that has only 1 element 

Iterate through input array 
  For each element 
    Create newArr variable 
      Iterate through input array 
        Select all elements equal to current element of iteration 
          Add elements to newArr
    If new array has length of 1
      Return that element 
*/

const p = console.log;

function whatIsDifferent(arr) {

  for (let elm of arr) {
    let newArr = arr.filter(num => num === elm); 
    if(newArr.length === 1) return newArr[0]; 
  }
}


p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);