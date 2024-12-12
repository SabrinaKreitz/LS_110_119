/*
Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

- square of the sum of the first count positive integers 
- 1, 2, 3 -> sum = 6 -> square = 36 
minus
- sum of the squares of the first count positive integers 
- 1 **1 + 2**2 + 3**3 

Rules: 
Calculate squareOfSums
  - Generate all integers from 1 to and including count 
  - Sum those integers
  - Square the sum 
Calculate sumOfSquares
- Generate all integers from 1 to and including count
- Square each integers
- Sum up the squares 
Calculate suareOfSums - sumOfSquares

D: 
Input -> Number 
Intermediary -> Array of integers from 1 to and including input number 
Output -> Number 

A: When given a number, calculate the result of substracting the count of all integers squared minus the count of all integers squared and them summed up. 

CREATE `arrayOfIntegers` variable and set it to array with all integers from 1 to and including input number
CREATE squareOfSum variable and set it to the sum of all integers in `arrayOfIntegers squared
CREATE sumOfSquares variable and set it to the sum of all integers in `arrayOfIntegers` squared
RETURN result of substracting squareOfSum from sumOfSquares
*/
let p = console.log;

function sumSquareDifference (number) {
  let arrayOfIntegers = [];
  for(let integer = 1; integer <= number; integer ++) {
    arrayOfIntegers.push(integer);
  }

  let squareOfSum = Math.pow(arrayOfIntegers.reduce((a, b) => a + b), 2);

  let sumOfSquares = arrayOfIntegers.map(int => Math.pow(int, 2)).reduce((a, b) => a + b);

  return squareOfSum - sumOfSquares;
}

p(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
p(sumSquareDifference(10));     // 2640
p(sumSquareDifference(1));      // 0
p(sumSquareDifference(100));    // 25164150