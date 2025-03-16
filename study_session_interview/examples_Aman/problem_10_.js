/* 12 minutes 
LEADERS IN AN ARRAY
Problem Statement: Given an array, return an array of all the elements which are leaders.
A Leader is an element that is greater than all of the elements on its right side in the array.

Algorithm 
Identify all the numbers in array for which every number with a higher index summed up is smaller than the current number 

If input array is empty OR has a length of 1 
  return input array 
Iterate through the array 
Create subarray starting at current idx + 1
Sum up all elements of subarray 
If sum is smaller than current elm 
  Append current element to target array `leaders` 
Push last element of input array to leaders 
Return leaders 
*/

function getLeaders(array) {
  if(array.length === 0 || array.length === 1) return array; 

  let leaders = []; 
  
  for (let idx = 0; idx < array.length - 1; idx++) {
    let subSum = array.slice(idx + 1).reduce((a, b) => a + b); 
    if (array[idx] > subSum) leaders.push(array[idx]); 
  }
  leaders.push(array[array.length - 1]); 

  return leaders
}

console.log(getLeaders([10,22,12,3,0,6])) // [22, 12, 6]
console.log(getLeaders([4, 7, 1, 0])) // [7, 1, 0]
console.log(getLeaders([1])) // [1]
console.log(getLeaders([])) // []
