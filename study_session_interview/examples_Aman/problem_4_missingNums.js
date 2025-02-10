/* 13 minutes
We have a list having unique values from 1 to n, but unordered with an unknown amount of missing values.
We have to output the missing numbers sorted by value.
The number 1 should be in the input array, if it's not present in the input array,
it should be included in the results. See the example below.


  A: Find all integers between 1 and n (maximum value) that are not present in input array 
  CREATE missingNum array and set to empty array 
  ITERATE from num = 1 until num = last element of input array sorted in ascending order 
  IF num is not included in input array 
    push to missingNum 
  RETURN missingNum 
*/

function missNumsFinder (array) {
  let missingNum = []; 
  const n = array.sort((a, b) => b - a)[0]; 

  for (let num = 1; num <= n; num++) {
    if (!array.includes(num)) missingNum.push(num); 
  };
   
  return missingNum; 
}

console.log(missNumsFinder([8, 10, 11, 7, 3, 15, 6, 14, 5, 12])); // [1, 2, 4, 9, 13]
console.log(missNumsFinder([2, 3, 1, 9, 4, 5, 6, 10, 7])); // [8]
console.log(missNumsFinder([5, 4, 2, 9, 3, 8, 10, 6, 7])); //[1]
console.log(missNumsFinder([7, 1, 12, 9, 11, 14, 13, 6, 10, 5])); // [2, 3, 4, 8]
console.log(missNumsFinder([8, 10, 11, 7, 3, 15, 6, 1, 14, 5, 12])); // [2, 4, 9, 13]
console.log(missNumsFinder([9, 10, 7, 2, 11, 8, 1, 17, 6, 16, 18, 19, 15, 3, 13])); //[4, 5, 12, 14]