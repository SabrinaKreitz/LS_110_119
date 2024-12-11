let p = console.log;
/*
A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

Rules: 
Featured numbers are: 
- odd -> number modular 2 is 1
- multiple of 7 -> number modular 7 is 0
- each digit is unique -> each digit is included only once in entire number 
- largest possible feature number is 9876543201 -> stop searching at this number -> if no feature number smaller than this number is found, return error message 

Goal value: 
- next featured number greater than input integer -> find the next number divisible by 7 and increment by 7 from there on -> then check if next number is odd and unique in digits 
  - find first number divisible by 7 -> start with curr number -> check if divisible by 7 -> if not increment by 1 -> if divisible by 7 and does not meet other criteria -> increment by 7 
- if not found, return error message 

D: 
Input: number 


A: When given an integer, find the next largest integer, which meets the conditions of a featured number (divisible by 7, odd, unique numbers)

CREATE variable `MAX_FEATURED` and set to 9876543201
CREATE variable `nextFeaturedNumber` and set to first integer larger than input number, which is divisible by 7 
  - [helperfunction]
LOOP from `nextFeaturedNumber` to `MAX_FEATURED` while incrementing `nextFeaturedNumber` by 7 at each iteration 
  - IF `nextFeaturedNumber` is odd && all digits of `nextFeaturedNumber` are unqique [helperfunction] 
    - RETURN `nextFeaturedNumber` and stop looping 
RETURN "There is no possible number that fulfills those requirements."

helperfunction `findStartingNumber`(number) 
CREATE nextFeaturedNumber and set to number plus 1
LOOP from `nextFeaturedNumber` and increment by 1
  - if `nextFeaturedNumber is divisible by 7
    - return starting number

helperfunction `checkUniqueDigits` (number) 
CREATE `numberArray` and set to array with each element representing a digit from input number
CREATE `unique` variable and set to boolean value `true` 
ITERATE through `numberArray` 
  - CREATE new array with only the elements which don't have the index of current element 
  - IF current element is included in new array 
  - SET `unique` to false 
RETURN `unique`

*/

function featured(number) {
  const MAX_FEATURED = 9876543201;

  for (let nextFeaturedNumber = findStartingNumber(number); nextFeaturedNumber <= MAX_FEATURED; nextFeaturedNumber += 7) {
    if(nextFeaturedNumber % 2 === 1 && checkUniqueDigits(nextFeaturedNumber)) return nextFeaturedNumber;
  }

 return "There is no possible number that fulfills those requirements.";
}

function findStartingNumber (number) {
  for(let start = number + 1; true; start ++) {
    if(start % 7 === 0)return start;
  }
}

function checkUniqueDigits (number) {
  let numberArray = String(number).split('');
  let unique = true;
  numberArray.forEach ((num, idx1)=> {
    let newArray = numberArray.filter((num, idx2) => idx2 !== idx1)
    if(newArray.includes(num)) {
      unique = false;
    }
  })

  return unique;
}



p(featured(12));           // 21
p(featured(20));           // 21
p(featured(21));           // 35
p(featured(997));          // 1029
p(featured(1029));         // 1043
p(featured(999999));       // 1023547
p(featured(999999987));    // 1023456987
p(featured(9876543186));   // 9876543201
p(featured(9876543200));   // 9876543201
p(featured(9876543201));   // "There is no possible number that fulfills those requirements."