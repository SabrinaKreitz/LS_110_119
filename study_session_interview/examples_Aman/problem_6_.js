/* 15 minutes
You are given an array of strings and want to
find the sum of their numeric values.
On each string, the numeric value can be found by combining the first digit
and the last digit to form a single two-digit number.

For example:
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet7

In this example, the numeric values of these four strings are 12, 38, 15 and 77.
Adding these together produces 157

Consider your entire array. What is the sum of all of the numeric values?

Algorithm
Find the two digit number in each string - in an array of strings - consisting of the first and last number in the string and return the sum of numbers

Create sum variable 
Iterate through input array 
From current word, form an array of single characters 
  Filter for the characters that are numbers 
Form string of two digits from 0-indexe and last-indexed element of array
Add that string as Number to sum
Return sum 
*/

function sumStringValues (array) {
  let sum = 0 

  array.forEach(word => {
    let arrayOfNumbers = word.split('').filter(char => Number(char)); 

    sum += Number(arrayOfNumbers[0] + arrayOfNumbers[arrayOfNumbers.length - 1]); 
  })
  return sum; 
}


console.log(sumStringValues(['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet7'])); // 142

