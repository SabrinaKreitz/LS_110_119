/*The parseInt() method converts a string of numeric characters (including an optional
plus or minus sign) to an integer. The method takes 2 arguments where the first argument
is the string we want to convert and the second argument should always
 be 10 for our purposes. parseInt() and the Number() method behave similarly.
  In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer.
 You may not use any of the methods mentioned above.

For now, do not worry about leading + or - 
signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods 
available in JavaScript, such as String() and Number(). 
Your function should do this the old-fashioned way and calculate 
the result by analyzing the characters in the string.
*/


/*
Rules: 
- The string input should be turned into a number
- Do not use the parseInt() or Number() method or String()
- all characters will be numeric

Input: String
Output: Number

Algorithm: 
- Turn a string into it's number equivalent and return it. 

Function stringToInteger(string): 
- Set new variable called `targetNumber` and set it to the functions argument divided by 1
- Return `targetNumber`
*/

function stringToInteger(string) {
  let targetNumber = string / 1;
  return targetNumber;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true