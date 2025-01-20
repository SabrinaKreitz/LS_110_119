/*A prime number is a positive number that is evenly divisible only by itself and 1. Thus, 23 is prime since its only divisors are 1 and 23. However, 24 is not prime since it has divisors of 1, 2, 3, 4, 6, 8, 12, and 24. Note that the number 1 is not prime.

Write a method that takes a positive integer as an argument and returns true if the number is prime, false if it is not prime.
*/


function is_prime (number) {
  if(number === 1) return false;
  let sqRt = Math.sqrt(number);

  for(let idx = 2; idx <= sqRt; idx ++) {
    if(number % idx === 0) return false; 
  }
  return true;
}

console.log(is_prime(1) === false)            // true
console.log(is_prime(2) === true)             // true
console.log(is_prime(3) === true)             // true
console.log(is_prime(4) === false)            // true
console.log(is_prime(5) === true)             // true
console.log(is_prime(6) === false)            // true
console.log(is_prime(7) === true)             // true
console.log(is_prime(8) === false)            // true
console.log(is_prime(9) === false)            // true
console.log(is_prime(10) === false)           // true
console.log(is_prime(23) === true)            // true
console.log(is_prime(24) === false)           // true
console.log(is_prime(997) === true)           // true
console.log(is_prime(998) === false)          // true
console.log(is_prime(3_297_061) === true)     // true
console.log(is_prime(23_297_061) === false)   // true


// second attempt 

/*A prime number is a positive number that is evenly divisible only by itself and 1. Thus, 23 is prime since its only divisors are 1 and 23. However, 24 is not prime since it has divisors of 1, 2, 3, 4, 6, 8, 12, and 24. Note that the number 1 is not prime.

Write a method that takes a positive integer as an argument and returns true if the number is prime, false if it is not prime.

A: Check if a number is prime. 

IF number is smaller or equal to 1
  - RETURN false 
IF number is smaller or equal to 3 
  - RETURN true 
IF number is equally divisible by 2 OR 3 
  - RETURN false 
LOOP starting at `idx` 5 in increments of 6 as long as `idx` is smaller or equal to square root of input number 
  IF input number is equally divisible by `idx` OR is equally divisible by `idx` + 2 
    - RETURN false 
RETURN true
*/

let p = console.log;

function is_prime (number) {
  if (number <= 1) return false; 
  if (number <= 3) return true; 
  if (number % 2 === 0 || number % 3 === 0) return false; 

  for (let idx = 5; idx <= Math.sqrt(number); idx += 6) {
    if (number % idx === 0 || number % idx + 2 === 0) return false; 
  }
  return true; 
}


p(is_prime(1) === false)            // true
p(is_prime(2) === true)             // true
p(is_prime(3) === true)             // true
p(is_prime(4) === false)            // true
p(is_prime(5) === true)             // true
p(is_prime(6) === false)            // true
p(is_prime(7) === true)             // true
p(is_prime(8) === false)            // true
p(is_prime(9) === false)            // true
p(is_prime(10) === false)           // true
p(is_prime(23) === true)            // true
p(is_prime(24) === false)           // true
p(is_prime(997) === true)           // true
p(is_prime(998) === false)          // true
p(is_prime(3_297_061) === true)     // true
p(is_prime(23_297_061) === false)   // true