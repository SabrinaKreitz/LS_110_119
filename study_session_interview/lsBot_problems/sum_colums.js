/* 25 minutes

Given a grid of values represented by an array of arrays, e.g.:
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]

Return the largest sum of a column of values in the grid.
In this example, the largest sum is 18.

Problem
In an array of subarrays find the combination of equal indices of the subarrays, for which the sum of their values is greatest. 
  > Create the sum of all values with the same indices in the subarrays
  > Return the greatest sum 

Method

    [
      [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  Iteration1 (index0)
  > [1,4,7]
  > 1, 4
  Iteration2 (index1)
  > [2,5,8]
  > 2, 5



  > iterate as long as I have elements in subarrays > iterate as long as index is smaller than length of subarray 
  > at each iteration create new array with values of current index 


Data
Input: nested array
Output: number 


Algorithm
Sum up the values of equal indices of subarrays in an array 
Return the greatest sum 

Create greatestSum and set to 0

Iterate from idx1 = 0 as long as idx is smaller than length of subarray in input array 
    Create currentColumn
    Iterate through input array 
      For each subarray 
        Push the value for which the index is equal to idx1 to currentcolun 
    Create currentSum and set to sum of values in currentColumn
    If currentSum is greater than greatestSum 
      Set greatestSum to currentSum 
Return greatestSum


*/


function largest_column(nestedArray) {
  let greatestSum = 0; 

  for (let idx1 = 0; idx1 < nestedArray[0].length; idx1++) {
     let currentColumn = []; 
     
     nestedArray.forEach(sub => {
       sub.forEach((elm, idx2) => {
         if (idx1 === idx2) currentColumn.push(elm)
       })
     })

     let currentSum = currentColumn.reduce((a,b) => a + b); 

     if (currentSum > greatestSum) greatestSum = currentSum; 
  }
  return greatestSum; 
}

// TEST CASES
let a = [[1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]];

let b = [[1, 2, 3, 4],
   [5, 6, 7, 8]];
   
let  c = [[1, 0, 0],
  [5, 8, 10],
  [3, 5, 1]];

let d = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]
 ];  


console.log(largest_column(a) === 18);
console.log(largest_column(b) === 12);
console.log(largest_column(c) === 13);
console.log(largest_column(d) === 18);