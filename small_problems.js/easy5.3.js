/*
Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

Rules: 
- Split one array into two nested arrays
  - When even elements : split by half 
  - When uneven elements: first array gets more 
  - When only one elment: Return empty second array
  - When no empty array: split into two nested empty arrays


Algorithm: 
Split the elements on an array into two nested arrays. Divide the elements equally or with unequal number of elements with one more element in the first array. 

SET target structure of array to empty array
IF length of input array is even
  - Split input array from 0 indexed to index of length/2 
    - append to target array
  - SET `secondHalf` to remaining input array
    - append to target array
  Return target array

  IF length of input array is uneven 
    - Split input array from 0 indexed to index of length/2 + 1 rounded down 
    - append to target array
  - SET `secondHalf` to remaining input array
    - append to target array
  Return target array
*/

function halvsies (array) {
  let halvedArray = [];
  if(array.length % 2 === 0) {
    let firstHalf = array.splice(0, (array.length/2))
    halvedArray.push(firstHalf, array);
  }
  else if(array.length % 2 === 1) {
    let biggerFirstHalf = array.splice(0, ((array.length/2) + 1))
    halvedArray.push(biggerFirstHalf, array);
  }
  return halvedArray;
}


halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
 halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]