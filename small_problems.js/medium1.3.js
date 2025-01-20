/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

Rules: 
- we do as many round of rotations as we have digits
- The numbers which are being rotated start with the 0-indexed digit until the (number.length - 1)indexed digit

Data: 
- Input: Number 
  - coercion into string and array
- Output: new number

A: Rotate a number until maximum rotation: A rotation pattern that picks one digit an moves it to the end, starting with the first digit and finishing with the first to last digit. 

- Loop through input number starting at index position 0 until the first to last index position 
  - For each iteration, extract the current indexed digit and move it to the end of the number [helperfunction]
  - Finally return the new number


Helperfunction: rotateDigit (num, idx) 
- Select all elements of num that don't have the index defined by idx
- Add the digit with the index idx to the end of the number
- Return the number 

352917 > fix 1 > rotate 1-st indexed 
329175 > fix 2
321759 > fix 3
321597 > fix 4
321579 > fix 5
*/

let p = console.log;

function maxRotation (number) {
  let targetNumberAsString = String(number);

  for (let idx = 0; idx <= targetNumberAsString.length - 2; idx++) {
    targetNumberAsString = rotateDigit(targetNumberAsString, idx);
  }

  return Number(targetNumberAsString);
}

function rotateDigit (string, index) {
 return string.split('').filter((digit, idx) => index !== idx ? digit : 0).concat(string[index]).join('')
}


p(maxRotation(735291));          // 321579 
p(maxRotation(3));               // 3
p(maxRotation(35));              // 53
p(maxRotation(105));             // 15 -- the leading zero gets dropped
p(maxRotation(8703529146));      // 7321609845

//second attempt

let p = console.log;

function maxRotation (number) {
  let maxRotation = String(number);
  for (let idx = 0; idx < maxRotation.length - 1; idx ++) {
    let newRotation = maxRotation.split('').filter((num, index) => index !== idx).concat(maxRotation[idx]).join('')
    maxRotation = newRotation;
  }
  return Number(maxRotation);
}



p(maxRotation(735291));          // 321579 
p(maxRotation(3));               // 3
p(maxRotation(35));              // 53
p(maxRotation(105));             // 15 -- the leading zero gets dropped
p(maxRotation(8703529146));      // 7321609845