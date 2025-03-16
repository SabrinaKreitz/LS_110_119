/* 28 minutes
Array Rotation:
Write a function that rotates an array by moving a specified number of elements from the beginning to the end. If the number is negative, move elements from the end to the beginning.

NOTE (This was added after pointing out to LSBot that it wasn't being consistent so consider this an extra rule/complexity to take note of when solving the problem)
[1, 2, 3], 5
1.  The input array is [1, 2, 3]
2.  We're rotating by 5 positions
When rotating an array, if the number of positions is greater than the length of the array, we can think of it as rotating by the remainder after dividing by the array length. In this case:
5 % 3 = 2
So, effectively, we're rotating by 2 positions from the end to the beginning.
Starting with [1, 2, 3]:
•   Rotate once: [3, 1, 2]
•   Rotate twice: [2, 3, 1]
Therefore, the correct output should be [2, 3, 1].

Data
Input: 
arg1: [1, 2, 3, 4, 5] > array of numbers
arg2: 2 > chunk of numbers that need to be moved 

Rules: 
> if the arg2 is greater than 0 
  > move chunk from beginning to end 
> if arg2 is smaller than 0 
  > move chunk from end to beginning 
> if arg2 is greater than length of arg1 
  > chunk should be result of arg1 minus arg2 
  > number will be negative because in this case we want to move from end to beginning 

Method
[1, 2, 3, 4, 5]
chunkSize: 2 > positive 
chunk: [1, 2]
rest: [3, 4, 5]
result: rest + chunk
-2 > negative > when slicing input array > slice from array.lenth + chunkSize (+/- will be -)
rest: [1,2,3]
chunk: [4, 5]
result: chunk + rest 


Algorithm
Given a number, move that amount of elements in input array from beginnign until end 
If number is negative, move that amount of elements from end to beginning 

Create chunkSize variable 
  If (arg2 is greater than length of arg1) 
    Set chunkSize to length of arg2 - arg1
  Else 
    Set chunkSize to arg

If (chunkSize > 0)
  Return 
    array of elements with index equal to chunkSize or greater 
    plus 
    array of elements with index smaller than chunkSize 
Else 
  Return 
    array of elements with index greater than length of input array plus chunkSize 
    plus 
    array of elements with index smaller than input array plus chunkSize 
*/

function rotateArray (array, chunk) {

  let chunkSize; 
  chunk > array.length ? chunkSize = array.length - chunk : chunkSize = chunk; 

 return chunkSize > 0 ? array.slice(chunkSize).concat(array.slice(0, chunkSize)) : array.slice(array.length + chunkSize).concat(array.slice(0, array.length + chunkSize)); 

  }



console.log(JSON.stringify(rotateArray([1, 2, 3, 4, 5], 2)) === JSON.stringify([3, 4, 5, 1, 2]));
console.log(JSON.stringify(rotateArray([1, 2, 3, 4, 5], -1)) === JSON.stringify([5, 1, 2, 3, 4]));
console.log(JSON.stringify(rotateArray([1, 2, 3], 5)) === JSON.stringify([2, 3, 1]));
console.log(JSON.stringify(rotateArray([], 3)) === JSON.stringify([]));
console.log(JSON.stringify(rotateArray([1], 0)) === JSON.stringify([1]));