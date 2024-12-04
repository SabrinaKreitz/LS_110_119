/*
Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

Logic: 
- Plus 1 for opening paranthesis 
- Minus 1 for closing paranthesis
- IF each opening has a closing, then result should be 0 
- IF result ever drops below zero, then a closing paranthesis has come before an opening paranthesis 
*/


function isBalanced (string) {
  const OPEN = '(';
  const CLOSE = ')'
  let balanceCount = 0;
  let paranth = string.split('').filter(char => char === OPEN || char === CLOSE);
  
  for (let char of paranth) {
    if (balanceCount < 0) {
      return false
    } else if(char === OPEN) {
      balanceCount += 1;
    } else {
      balanceCount -= 1;
    }
  }

  return balanceCount === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);