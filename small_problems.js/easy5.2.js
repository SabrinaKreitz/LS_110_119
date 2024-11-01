let p = console.log

/*
Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

A: 
Merge the unique numbers of two arrays into one array

SET `unitedArray` variable to first input array
ITERATE over second input array
  SELECT value that are not included in `unitedArray` and save as `uniqueNums`
APPEND `uniqueNums` to `unitedArray`
RETURN `unitedArray`
*/

function union (arr1, arr2) {
  let unitedArray = arr1;
  let uniqueNums = arr2.filter(num => !unitedArray.includes(num));
  unitedArray = unitedArray.concat(uniqueNums);
  return unitedArray;
}


p(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]