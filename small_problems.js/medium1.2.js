let p = console.log;
/*
Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

Rules: 
- arg2: Defines which digit gets rotated > negative index starting at 1
- arg1: Number which gets rotated > selected digit moves to the end, rest remains the same 

Data: 
- Input: number 
  Intermediate > array 
- Ouput: new number 

A: Select a digit in a row of numbers, extract it and move it to the end of the number

SET `index` to length of string - arg2
SET `selectedNumber` to the digit defined by `index` 
ITERATE through input number arg1
  - Select all digits which don't have the index of `index`
  - Add `selectedNumber` 
  - Return new number
*/

function rotateRightmostDigits(num1, num2) {
  let index = String(num1).length - num2;
  let selectedNumber =  String(num1)[index];

  let otherNumbers = String(num1).split('').filter((dig, idx) => {
    if (idx !== index) return dig
  });
  
  let newNumber = Number(otherNumbers.concat(selectedNumber).join(''));
  return newNumber;
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917