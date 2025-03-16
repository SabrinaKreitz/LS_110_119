/* 6 minutes
Write a function that takes a nested array and an optional depth parameter. The function should flatten the array up to the specified depth. If no depth is provided, it should fully flatten the array.

*/


function flattenArray(arr, depth = Infinity) {
  return arr.flat(depth); 
}

console.log(flattenArray([1, [2, [3, [4]], 5]]));
// [1, 2, 3, 4, 5]

console.log(flattenArray([1, [2, [3, [4]], 5]], 1));
// [1, 2, [3, [4]], 5]

console.log(flattenArray([1, [2, [3, [4]], 5]], 2));
// [1, 2, 3, [4], 5]

console.log(flattenArray([1, 2, 3, 4, 5]));
// [1, 2, 3, 4, 5]