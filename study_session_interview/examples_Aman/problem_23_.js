/*Create a function that takes an array of integers as an argument. The function should determine the minimum integer value that can be appended to the array so the sum of all the elements equal the closest prime number that is greater than the current sum of the numbers. For example, the numbers in [1, 2, 3] sum to 6. The nearest prime number greater than 6 is 7. Thus, we can add 1 to the array to sum to 7.

Data
Input: array of numbers > [2, 12, 8, 4, 6] > sum is 32
Output: number > 5 > difference from sum of array elements to next prime > nearest prime is 37

Rules: 
> Prime number: only divisible by itself and 1 

Problem: 
Sum elements of input array 
Iterate from sum + 1 
Find next prime > only divisible by itself and 1 
Calculate difference between sum and next prime 

Logic: 
sum: 32
Iteration: 
  Outer iteration starts at sum + 1 and increments by 1 until prime is found 
    Prime is found when start has no other divisors 
      For each start, check with helperfunction if no divisors are found 
NoDivisors logic 
  Take a number increment from number - 1 and decrement by 1 until 2
    Returns false if any divisor is found 
  Else returns true 

Algorithm: 
Calculate sum of array elements 
Find the number, which added to the sum would create the next prime number 

nearestPrimeSum(array)
Create sum and set to sum of all elements of input array 
Return sum minus nextPrime(sum)

--------------
[helperfunction] nextPrime(sum)
Iterate from prime = sum + 1
  If(isPrime(prime)) return prime
-----------
[helperfunction] isPrime(num)
Iterate from divisor = num - 1 until 2 
  If num is equally divisible by divisor 
    Return false 
Return true 

*/
const p = console.log;

function nearestPrimeSum(arr) {
  let sum = arr.reduce((a, b) => a + b); 
  p(sum)
  return sum - nextPrime(sum); 
}

function nextPrime(sum) {
  for (let prime = sum + 1; true; prime ++) {
    p(prime)
    if(isPrime(prime)) return prime; 
  }
}

function isPrime(num) {
  for(let divisor = num - 1; divisor > 1; divisor --) {
    p(divisor)
    //if(num % divisor === 0) return false; 
  }
  return true; 
}




p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
// p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
// p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
// p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// // Nearest prime to 163 is 167
// p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);
