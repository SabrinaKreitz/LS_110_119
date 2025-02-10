/*
Create a function that takes an array of integers as an argument and returns the number of identical pairs of integers in that array. For instance, the number of identical pairs in [1, 2, 3, 2, 1] is 2: there are two occurrences each of both 2 and 1.

A: 
IF input array is empty or has a length of smaller than 2
  - return 0
CREATE count object 
ITERATE through input array 
  - IF element exists in `count`
    - increment it's value by 1
  - ELSE 
    - CREATE property from element in `count` and set it to 1
CREATE `single pairs` and set it to array with all values from `count`
SELECT the values that are greater or equal to 2
TRANSFORM each value to the integer part of the result of it's value divided by 2
RETURN the sum of all tranformed elements 
*/

function pairs (array) {
  if(array.length < 2) return 0;
let count = {}

for(let digit of array) count[digit] ? count[digit] += 1 : count[digit] = 1;

let singlePairs = Number(Object.values(count).filter(num => num > 1).map(num => Math.floor(num/2)).reduce((a, b) => a + b))

return singlePairs
}

const p = console.log;
p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairs([]) === 0);
p(pairs([23]) === 0);
p(pairs([997, 997]) === 1);
p(pairs([32, 32, 32]) === 1);
p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);

/* 2nd attempt: 22 minutes > initially I had a mental breakdown and then when I came back to it it was 22 minutes so technically I took longer. 
Create a function that takes an array of integers as an argument and returns the number of identical pairs of integers in that array. For instance, the number of identical pairs in [1, 2, 3, 2, 1] is 2: there are two occurrences each of both 2 and 1.

Logic: Pairs can be determined by summing all individual values that exists more than once. Then dividing that sum by 2 and return the floored result (since a pair is at least 2). 

A: Find the amount of identical pairs in an array. 

IF input array has fewer than 2 elements 
  RETURN 0 
CREATE countObj and set to empty object 
ITERATE through input array 
  IF elm exist in countObj increment it's value 
  ELSE create elm as property and set to 1 
RETURN 
  - countObj as array of values 
  - filter values greater than 1 
  - sum those values 
  - divide the sum and return the floored result /
*/


const p = console.log;

function pairs (array) {

  if(array.length < 2) return 0; 

  let countObj = {}; 

  for (let digit of array) {
    countObj[digit] ? countObj[digit] += 1 : countObj[digit] = 1; 
  }
  
  let countOfPairs = Math.floor(Object.values(countObj).filter(dig => dig > 1).reduce((a, b) => a + b) / 2); 
  return countOfPairs; 
}

p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairs([]) === 0);
p(pairs([23]) === 0);
p(pairs([997, 997]) === 1);
p(pairs([32, 32, 32]) === 1);
p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);
