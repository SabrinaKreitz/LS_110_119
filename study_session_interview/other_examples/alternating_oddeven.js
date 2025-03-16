/* 55 minutes > had the right logic but made a bunch of silly mistakes when coding 
Write a function that returns the maximum possible consecutive alternating odd and even (or even and odd) numbers. Minimum possible length is 2. If there’s none return [].


CREATE longAltSub set to empty array 
ITERATE over input array idx1
  ITERATE over input array idx 2 = idx 1 + 1
    CREATE subarray and set to array[idx1]
      IF last elm of subarray is even and elm of idx2 in input array is even break iteration 
      IF last elm of subarray is odd and elm of idx2 in input array is odd break iteration 
      ELSE add idx2 of input array to subarray 
    IF length of subarray is greater than 1 and greater than length of longAltSub
    SET longAltSub to current subarray 
RETURN longAltSub
*/

let p = console.log;

function longestAlternatingSubarray (array) {
  let longAltSub = [];
  for (let idx1 = 0; idx1 < array.length; idx1 ++) {
    let subarray = [array[idx1]]; 
    for (let idx2 = idx1 + 1; idx2 < array.length; idx2 ++) {
      let last = subarray[subarray.length - 1]; 
      if(last % 2 === 0 && array[idx2] % 2 === 0) break; 
      if(last % 2 !== 0 && array[idx2] % 2 !== 0) break; 
     subarray.push(array[idx2]); 
    }
    if(subarray.length > 1 && subarray.length > longAltSub.length) longAltSub = subarray; 
  }
  return longAltSub; 
}


console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []  
console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: 6, 7, 12, 11]


/* 32 minutes
Write a function that returns the maximum possible consecutive alternating odd and even (or even and odd) numbers. Minimum possible length is 2. If there’s none return [].

A: Find longest possible subarray of consecutive alternating odd and even numbers in array 
---------
mainfunction (array) 
CREATE longest variable and set to empty array 
  ITERATE over input array starting at idx1 = 0, run until second to lastElm element 
      CREATE subarray element and set to array with elm[idx1]
    ITERATE over input array starting at idx2 = idx1 + 1, run until lastElm element 
        IF the sum of lastElm element of subarray and the current elm[idx2] is odd 
          push elm[idx2] to longest 
        IF length of subarray is greater than 1 and greater than length of longest 
            longest = subarray 
        IF the sum of lastElm element of subarray and the current elm[idx2] is even 
            break the loop 
RETURN longest
*/
let p = console.log; 

function longestAlternatingSubarray(array) {
  let longest = []; 
  
  for (let idx1 = 0; idx1 < array.length - 1; idx1++) {
    let subarray = [array[idx1]]; 

    for (let idx2 = idx1 + 1; idx2 < array.length; idx2++) {
      let lastElm = subarray[subarray.length - 1]; 
      if((lastElm + array[idx2]) % 2 !== 0 ) subarray.push(array[idx2]); 

      if (subarray.length > 1 && subarray.length > longest.length) longest = subarray; 

      if((lastElm + array[idx2]) % 2 === 0 ) break; 
      }
    }
  return longest; 
  }

console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []  
console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: 6, 7, 12, 11]