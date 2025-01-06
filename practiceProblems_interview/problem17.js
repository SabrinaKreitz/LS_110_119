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
