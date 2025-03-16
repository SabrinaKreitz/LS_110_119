/*
Problem 6 > 17 minutes

You are given an array of strings and want to
find the sum of their numeric values.
On each string, the numeric value can be found by combining the first digit
and the last digit to form a single two-digit number.



A: 
Find the 1st and last digit in each string of an array of strings and form 2-digit numbers. 
Sum up the 2-digit numbers. 


CREATE new array from input array 
  - iterate through each string of array 
  - select only numeric char 
ITERATE through new array of numeric char 
  - select only 0-indexed and last-indexed elements 
  - turn each string into number 
  - sum all elements in array 
RETURN sum 
*/

function sumStringValues (array) {
  let onlyNumArr = array.map(word => {
    return word.split("").filter(char => Number(char))
  })

  let onlyFirstAndLast = onlyNumArr.map(arr => {
    return arr.filter((num, idx) => idx === 0 || idx === arr.length - 1).join('')
  })

  return onlyFirstAndLast.reduce((a, b) => Number(a) + Number(b)); 
}

