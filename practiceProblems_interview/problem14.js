/*
Create a function that takes a single integer argument and returns the sum of all the multiples of 7 or 11 that are less than the argument. If a number is a multiple of both 7 and 11, count it just once.

For example, the multiples of 7 and 11 that are below 25 are 7, 11, 14, 21, and 22. The sum of these multiples is 75.

If the argument is negative, return 0.

A: Find all unique values that are multiples of seven or eleven and are lower than the input number. Sum up those multiples. 

IF input number is smaler or equal to 0 
RETURN 0
CREATE `multiples` array and set to empty array 
LOOP starting at 7, incrementing by 1 and going as long as current number is smaller than input number 
IF current number is included in `multiples` array, continue looping 
IF current number is a multiple of 7 OR 11 
  ADD to multiple array 
RETURN sum of all elemnts in multiple array
*/


const p = console.log;


function sevenEleven (number) {
  if (number <= 0) return 0;
  let multiples = [];

  for (let idx = 7; idx < number; idx++) {
    if (multiples.includes(idx)) continue;
    if (idx % 7 === 0 || idx % 11 === 0) multiples.push(idx);
  }

return multiples.reduce((a, b) => a + b);
}



p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);