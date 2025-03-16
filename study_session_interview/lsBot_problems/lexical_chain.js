/* 25 minutes
Lexical Call Chain (Hard)
Problem:
​ Write a function called lexicalChain that analyzes a series of function calls and determines if they follow a lexical ordering pattern. The function takes a string representing a sequence of function calls, where each function is represented by a single lowercase letter.

A function call is represented by a letter followed by parentheses containing either nothing or another function call. For example, "a()" represents a call to function a, and "a(b())" represents a call to function a that takes the result of calling function b as an argument.

A sequence follows the lexical ordering pattern if each inner function call alphabetically precedes the function that calls it. Return true if the entire sequence follows this pattern, and false otherwise.

Rule: 
- Each inner function call alphabetically precedes the function that calls it.
- If the input argument is an empty string > return false 

Logic: 
"m(l(k(j())))" > true 

1. Identify all alphabetic characters in a string and reverse their order
2. Check if the order of characters follows an alphabetical pattern 

Algorithm 
Filter out all alphabetic characters from string and reverse their order
Check if they follow the alphabetic order 

If input string is empty string 
  Return false 

Create pattern variable and set to 
  Iterate through input string as array of single chars
  Select all characters that are alphabetic 
  Reverse their order 
  Join array as string 
Create orderedPattern and set to 
  Iterate through pattern as array of single chars 
  Change the index of each char so that it follows the alphabetic order 
  Return array as string 
If pattern and orderedPattern are equal 
  Return true 
Else 
  Return false 


*/

let p = console.log; 

function lexicalChain(functionCalls) {
  let pattern = functionCalls.split('').filter(char => /[a-z]/.test(char)).reverse().join(''); 
  let orderedPattern = [...pattern].sort().join(''); 
  
  return pattern === orderedPattern;
}



p(lexicalChain("a()")); // true
p(lexicalChain("b(a())")); // true
p(lexicalChain("c(b(a()))")); // true
p(lexicalChain("m(l(k(j())))")); // true

p(lexicalChain("z(a(b(c(d()))))")); // false
p(lexicalChain("a(b(c()),d())")); // false
p(lexicalChain("f(g())")); // false
p(lexicalChain("a(z())")); // false
p(lexicalChain("c(a(b()))")); // false
