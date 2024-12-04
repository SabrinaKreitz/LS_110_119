let p = console.log

/*
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

Rules: 
- Take two arrays and return a new array with each element being the product of the same-indexed elements of the input array

- Set `output` variable to empty array 
- Loop through index of input array 1
  - multiply current element with the same indexed element of array 2
  - append result to `output`
- Return output
*/

p(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

function multiplyList(arr1, arr2) {
  let result = [];
  arr1.forEach((_, idx) => {
    result.push(arr1[idx] * arr2[idx]);
  })
  return result;
}
