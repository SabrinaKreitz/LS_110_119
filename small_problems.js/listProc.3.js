let p = console.log;

/*
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

Rules: 
- Output array should contain the product of all possible number pair combination from two arrays 
- They should be sorted in ascending order
- The output array will have as many element as the product of the length of the first and second array 

A: Calculate product of all possible pairs from two number arrays and sort them in ascending order. 

Create output variable and set to empty array 
Loop over input array 1
  - for Each element loop over input array 2
    - add product of current elm1 and elm2 to output variable 
Sort ouput array in ascending order 
Return output variable 
*/


function multiplyAllPairs (arr1, arr2) {
  let pairsProduct = [];

  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      pairsProduct.push(num1 * num2);
    })
  })
  return pairsProduct.sort((a, b) => a - b);
}

p(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

//second attempt: same result 