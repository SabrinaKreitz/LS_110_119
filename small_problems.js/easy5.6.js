let p = console.log

/*
Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

*/

function multiplicativeAverage(array) {
  let multiply = array.reduce((acc, currentValue) => acc * currentValue);
  let division = multiply / array.length
  let rounded = division.toFixed(3);
  let string = String(rounded);
  return string;
}


p(multiplicativeAverage([3, 5]));                   // "7.500"
p(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"