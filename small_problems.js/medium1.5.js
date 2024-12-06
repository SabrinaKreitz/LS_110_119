/*
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. Fibonacci numbers often appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

Data: 
- Input: bigInt number > defining target amount of digits
- Ouput: bigInt number > indicating index of target number
- Intermediate: array to create Fibonacci numbers

A: 
Create an array of Fibonacci numbers until the length of the last Fibonacci number has the amount of digits indicated by the argument. Return the index of that number. 

CREATE `fibonacci` variable and set it to an empty array
CREATE a loop 
  - Stop the loop as soon as the last added number has the amount of digits indicated by the argument 
    - Coerce the number into a string and compare it's length as bigInt to the input argument 
  - As long as the array has fewer than 2 elements
    - fill the array with the number 1
  - As soon as the array has 2 elements 
    - continue adding numbers to the array by adding up the last two numbers of the array 
RETURN the index of the last element of the array plus 1 as bigInt
  
*/
let p = console.log;

function findFibonacciIndexByLength (countOfDigits) {
 let fibonacci = [1];

 while (BigInt((String(fibonacci[fibonacci.length - 1]).length)) !== countOfDigits){
   if(fibonacci.length < 2) {
     fibonacci.push(1);
   } else {
     fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
   }
 }

 return BigInt(fibonacci.indexOf(fibonacci[fibonacci.length - 1]) + 1)
}

p(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
p(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
p(findFibonacciIndexByLength(10n) === 45n);
p(findFibonacciIndexByLength(16n) === 74n);
//p(findFibonacciIndexByLength(100n) === 476n);
//p(findFibonacciIndexByLength(1000n) === 4782n);
//p(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.