/* 
LEADERS IN AN ARRAY
Problem Statement: Given an array, return an array of all the elements which are leaders.
A Leader is an element that is greater than all of the elements on its right side in the array.

Data
Input: array of numbers [10,22,12,3,0,6]
Output: array of numbers > element for which all elm with higher index are smaller [22, 12, 6]

Problem
Find all elements in array for which each element with a higher index is smaller than the current element 

Method
[10,22,12,3,0,6]
> iteration 
  > iterate as long as idx is smaller than length of array 
> conditions
  > each element with higher index is smaller OR is last element 
> empty array 
  > set target array initially to empty array and return target array at the end 


  Algorithm 
  Find all elements in array for which each element with a higher index is smaller than the current element 
  
  Create leader variable and set it to empty array 
  Iterate through input array starting at `idx` = 0, run as long as idx is smaller than length of input array 
    If the value of `idx` in input array is the same as last element of input array 
      Push that element to leaders 
      break 
    Filter for elements in input array which have a greater index than `idx` and save them in new array 
    If every element in new array is smaller than element in input array with index `idx` 
      Push value of input array of `idx` to `leader` 
  Return leader
*/

function getLeaders (array) {
  let leader = []; 

  for (let idx = 0; idx < array.length; idx++) {

    if(array[idx] === array[array.length - 1]) {
      leader.push(array[idx]);
      break; 
    }

    let greaterThan = array.filter((_, idx1) => idx1 > idx); 
    if (greaterThan.every((elm) => elm < array[idx])) leader.push(array[idx]); 
  }
  return leader; 
}

console.log(getLeaders([10,22,12,3,0,6])) // [22, 12, 6]
 console.log(getLeaders([4, 7, 1, 0])) // [7, 1, 0]
 console.log(getLeaders([1])) // [1]
 console.log(getLeaders([])) // []
