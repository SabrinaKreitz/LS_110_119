/*
minutes: 15

Create a function that takes a string argument that consists entirely of numeric digits and computes the greatest product of four consecutive digits in the string. The argument will always have more than 4 digits.

A: Find the highest product of 4 consecutive numbers in a string of numbers 

CREATE `products` array and set to empty array 
LOOP through input string - start at 0-indexed element, increment by 1, run as long as idx + 4 is smaller than length of input string
  - CREATE substring variable and set to substring from current indexed element + 4
  - PUSH return value of `calculateProduct(substring)` [helperfunction] to `products`
SORT `product` in descending order and return 0-indexed element

calculateProduct(string)
CREATE numbersArray array with string argument turned into array with each char as new element 
RETURN product of all elements of `numbersArray` as numbers

*/
const p = console.log;

function greatestProduct (string) {
  let products = [];

  for(let idx = 0; idx + 4 <= string.length; idx ++) {
    let substring = string.substring(idx, idx + 4);
    products.push(calculateProduct(substring));
  }
  products.sort((a, b) => b-a);
  return products[0];
}

function calculateProduct (string) {
  let numbersArray = string.split('');
  return numbersArray.reduce((a, b) => Number(a) * Number(b))
}

p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6
