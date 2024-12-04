let p = console.log;
/*
Write a function that takes a positive integer as an argument and returns that number with its digits reversed.
*/

function reverseNumber (number) {
  let reverse = String(number).split('').reverse();
  let cleaned = removeStartingZeros(reverse)
  return Number(cleaned.join(''))
}

function removeStartingZeros (array) {
  let cappedZeros = array.slice(array.indexOf(array.find((digit => digit > 0))))
  return cappedZeros;
}
p(reverseNumber(12345));    // 54321
p(reverseNumber(12213));    // 31221
p(reverseNumber(456));      // 654
p(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
p(reverseNumber(1));        // 1

