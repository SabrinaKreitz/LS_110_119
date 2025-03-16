
/*
Nested String Iteration:
Write a function that takes a string containing nested parentheses and returns the deepest level of nesting. 
For example, "(()())" should return 2, and "((())())" should return 3.

*/

function nestingDepth (string) {
  let leftHalf = string.substring(0, string.length / 2 + 1); 
  let count = 0; 
  console.log(leftHalf)

  if(leftHalf[leftHalf.length] === ')') leftHalf = leftHalf.substring(0, leftHalf.length); 

  for (let char of leftHalf) {
    if(char === '(') count += 1; 
    if(char === ')') count -= 1; 
  }

  return count; 
}

console.log(nestingDepth('(()())'));           // 2
console.log(nestingDepth('((()))'));           // 3
console.log(nestingDepth('(())()'));           // 2
console.log(nestingDepth(''));                 // 0
console.log(nestingDepth('(()((())()))'));     // 4
console.log(nestingDepth('(()(()()))'));       // 3


// split in middle
// Take first half 
// If last element of first half is closing bracket 
// remove closing bracket 
// Increment by 1 for opening bracket and decrement by 1 for closing bracket 