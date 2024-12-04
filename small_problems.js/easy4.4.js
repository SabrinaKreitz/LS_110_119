let p = console.log;

/*Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.
*/

function isPalindromicNumber (number) {
  let numberToArray = String(number).split('');
  let reversedArray = String(number).split('').reverse();
  return numberToArray.join('') === reversedArray.join('')
}


p(isPalindromicNumber(34543));        // true
p(isPalindromicNumber(123210));       // false
p(isPalindromicNumber(22));           // true
p(isPalindromicNumber(5));            // true