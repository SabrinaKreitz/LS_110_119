/*
Implement a function that takes an array of numbers and returns the total sum of all odd numbers that are in a position with an even index.

[1, 2, 3, 4, 5] > 9
1 > 0 > 1
2
3 > 2 > 3
4
5 > 4 > 5

5+3+1 === 9 

[1, 3, 5, 7, 9] === 15
1
5
9
>> 15

[-1, 2, -3, 4, -5]) === -9
-1
-3
-5
-1+-3+-5

sum of all odd numbers that have an even index 
-------------

Problem: 
Find all the odd numbers in an array with an even index and sum them up 

Rules: 
- If no numbers fit the condition return 0 
- If the input array is empty return 0 

Data: 
Input: array of numbers 
Output:number 

Logic: 

[-1, 2, -3, 4, -5] === -9

Initial sum of 0 
1. Iterate through the array of numbers 
2. Check if number is odd and it's index is even > note -0 is equal to 0 
3. If that's the case, add the current number to overall sum 


Algorithm 
Identify all the odd numbers in an array with an even index and sum them up 

Create `sum` variable and set to 0 
Iterate through indices of input array 
If current index is not even 
  continue iterating 
If element in input array with current index is odd 
  Add element to `sum` 
Return `sum` 
*/

function sumOddNumbersAtEvenIndices (arr) {
  let sum = 0; 

  for (let idx = 0; idx < arr.length; idx++) {
    if(idx % 2 !== 0) continue; 
    if(arr[idx] % 2 !== 0) sum += arr[idx]; 
  }
  return sum; 
}

console.log(sumOddNumbersAtEvenIndices([1, 2, 3, 4, 5]) === 9);         // true
console.log(sumOddNumbersAtEvenIndices([1, 3, 5, 7, 9]) === 15);        // true
console.log(sumOddNumbersAtEvenIndices([2, 3, 4, 5, 6]) === 0);         // true
console.log(sumOddNumbersAtEvenIndices([]) === 0);                      // true
console.log(sumOddNumbersAtEvenIndices([-1, 2, -3, 4, -5]) === -9);     // true