/* 22 minutes
Write a function that takes two arrays as arguments and returns an array containing all elements from both arrays, but with no duplicates. The order of elements in the result array should follow these rules:

1.  Elements should be ordered by their first occurrence across both arrays

2.  Elements from the first array should maintain their original relative order

3.  Elements from the second array (that aren't in the first array) should maintain their original relative order

Data
Input: two arrays > [1, 3, 5], [3, 6, 9]
Output: one array > input arrays merged into one array without dublicates and the original order of elements maintained [1, 3, 5, 6, 9]

Rule
Original order of elements in both arrays should be maintained. 
Dublicates are removed from second array when they also exist in first 
Dublicates are removed from each of the arrays if they exist in the same array 

Problem
Remove dublicates from two arrays and merge them into one 

Logic:
Iterate first through arg1 then arg2 and push elements to output array which are not yet present 
arg1: [2, 2, 4, 5]
arg2: [1, 1, 4, 5]
=> [2, 4, 5, 1]

Initial output array []
[2, 4, 5, 1]


Algorithm: 
Iterate through input arrays and select the unique elements in order of appearance. 

Create uniqueElements array and set to empty array 
Merge both input arrays in order of appearance and iterate through the new merged array 
  If the current elements is not present in uniqueElements 
    Push the element to uniqueElements 
Return uniueElements
*/


function mergeUnique(arr1, arr2) {
  let uniqueElements = []; 

  arr1.concat(arr2).forEach(elm => {
    if(!uniqueElements.includes(elm)) uniqueElements.push(elm); 
  }); 

  return uniqueElements; 
}



mergeUnique([1, 3, 5], [3, 6, 9]);               // [1, 3, 5, 6, 9]
mergeUnique([2, 2, 4, 5], [1, 1, 4, 5]);         // [2, 4, 5, 1]
mergeUnique(['a', 'b', 'c'], ['c', 'd', 'e']);   // ['a', 'b', 'c', 'd', 'e']
mergeUnique([], [1, 2, 3]);                      // [1, 2, 3]
mergeUnique([1, 2, 3], []);                      // [1, 2, 3]
mergeUnique([], []);                             // []
