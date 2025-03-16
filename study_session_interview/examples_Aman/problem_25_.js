/*
You have to create a function that takes a positive integer number
and returns the next bigger number formed by the same digits

-----------------
Algorithm: 
Increment input number until the next number is found that includes all digits from input number 

Main function: 
If noBiggerNum(inputNumber) returns true 
  Return -1

Iterate from next = input number + 1, incrementing by 1 
  If sameDigits(input number, next) returns true 
    Return next 
    Break the loop 

-----------
sameDigits(inputNumber, next)
Iterate through inputNumber
  If all digits of inputNumber are included in next
    Return true 
  Else 
    Return false 


---------
noBiggerNum(inputNumber)
Iterate over inputNumber as array of digits
  If every digit in the array is equal to it's 0-indexed digits 
    Return true 

Create sorted and set to 
  inputNumber as array of digits 
  sorted descending 
  turned back into a number 

If sorted and inputNumber are equal 
  Return true 

Return false 
*/
let p = console.log; 

function nextBiggerNum(num) {

  if (noBiggerNum(num)) return -1; 

  for (let next = num + 1; true; next ++) {
    if (sameDigits(num, next)) {
      //console.log(next)
      return next; 
      break; 
    }
  }
}

function sameDigits(num, nextNum) {
  if(String(num).split('').every(digit => String(nextNum).includes(digit))) return true; 

  return false; 
}

function noBiggerNum(num) {
  if (String(num).split('').every(dig => dig === String(num)[0])) return true; 

  let sorted = Number(String(num).split('').sort((a, b) => Number(b) - Number(a)).join('')); 
  if (sorted === num) return true; 
  
  return false; 
}

p(nextBiggerNum(1432) === 2134)
p(nextBiggerNum(12) === 21);
p(nextBiggerNum(513) === 531);
p(nextBiggerNum(2017)=== 2071);
 p(nextBiggerNum(123456789) === 123456798);

//edge cases
 p(nextBiggerNum(111) === -1);
p(nextBiggerNum(531) === -1);