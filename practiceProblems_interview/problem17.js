/*
> 45 minutes > took some time to come up with a good solution to find prime number

Create a function that takes an array of integers as an argument. The function should determine the minimum integer value that can be appended to the array so the sum of all the elements equal the closest prime number that is greater than the current sum of the numbers. For example, the numbers in `[1, 2, 3]` sum to 6. The nearest prime number greater than 6 is 7. Thus, we can add 1 to the array to sum to 7.

Notes:

- The array will always contain at least 2 integers.
- All values in the array must be positive (> 0).
- There may be multiple occurrences of the various numbers in the array.


A: Find next biggest prime number of the sum of an array. Calculate difference from next prime to sum and add that number to array. 

CREATE `sum` variable and set to sum of all elements in input array 
CREATE `nextPrime` variable and set to return value of `findNextLargestPrime(sum)`[helperfunction]
RETURN result of `nextPrime` minus `sum`

findNextLargestPrime(number) 
CREATE `prime` and set it to input number + 1
LOOP indefinitely 
  - CREATE `smallerNumbers` array and fill with all numbers smaller than `prime` number but greater than 1 
  - IF `prime` is NOT equally divisible by every number in `smallerNumbers` 
    - BREAK the loop 
  - ELSE  
    - increment `prime` by 1
RETURN `prime`
*/

const p = console.log;

function nearestPrimeSum (array) {
  let sum = array.reduce((a, b) => a+b);
  let nextPrime = findNextLargestPrime(sum);
  return nextPrime - sum; 
}

function findNextLargestPrime(number) {
  let prime = number + 1;

  while (true) {
    let smallerNumbers = [];
    for (let idx = prime - 1; idx > 1; idx --) {
      smallerNumbers.push(idx);
    }
    if(smallerNumbers.every(num => prime % num !== 0)) break; 
    prime += 1;
  } 
  return prime;
}

p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);


/* 
Create a function that takes an array of integers as an argument. 
The function should determine the minimum integer value that can be appended 
to the array so the sum of all the elements equal the closest prime number 
that is greater than the current sum of the numbers. 
For example, the numbers in `[1, 2, 3]` sum to 6. 
The nearest prime number greater than 6 is 7. Thus, we can add 1 to the array to sum to 7.

Problem: 
Find next prime from n 

not prime: 
- smaller or equal to 1 
- equally divisible by 2 or 3 
- equally divisible k6 +/1

Calculate difference 
  - make sum of array > n
  - return findPrime(n + 1)


A: Find the next biggest prime number of a product of numbers in an array. Calculate the difference between the prime number and the product. 

Main function 
-------
RETURN 
  - calculate product of numbers in array 
  - calculate divident of product and return value of findPrime(product + 1)[helperfunction]

Helper function [findPrime]
------
ITERATE from input number, increment by 1  
SET flag to `true` 
  IF current number is smaller or equal to 1
    - continue iterating
  IF curren number is smaller or equal to 3 
    - return number
  IF  number is equally divisible by 2 or 3 
    - continue iterating 
  IF 
      - loop from idx = 5 as long as idx is smaller than square root of number, increment by 6 
       - if number is equally divisible by idx OR equally divisible by idx + 2
        - set flag to false 
  IF flag is true 
  RETURN number 
*/



let p = console.log; 

function nearestPrimeSum (array) {
  let sum = array.reduce((a, b) => a + b); 
  return nextPrime(sum) - sum; 
}

function nextPrime (n) {

  for (let prime = n + 1; true; prime++) {
    let flag = true; 

    if (prime <= 1) continue; 
    if (prime <= 3) return prime; 
    if (prime % 2 === 0 || prime % 3 === 0) continue; 

    for (let k = 5; k <= Math.sqrt(prime); k += 6) {
      if (prime % k === 0 || prime % k + 2 === 0) flag = false; 
    }

    if(flag) return prime; 
  }
}

p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);