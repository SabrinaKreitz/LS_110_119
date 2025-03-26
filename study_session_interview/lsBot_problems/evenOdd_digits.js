/* 22
Write a function called digitGroups that takes an array of numbers and returns an object with three properties:
•   even: An array of numbers with an even number of digits
•   odd: An array of numbers with an odd number of digits
•   neither: An array of non-integers

Data
Input > array of numbers > can be negative or decimal number 
[1234, 32, 5, 9.1, 7, -13]

Output > object with arrays of numbers that have even or odd count of digits and numbers that aren't integers
{ even: [23], odd: [1, 456, 9], neither: [7.8] }

Problem: 
Identify if number is integer and how many digits they have and list them accoringly 

Logic: 

Base structure
{
  even: [], 
  odd: [], 
  neither: []
}

[1234, 32, 5, 9.1, 7, -13]
1. Check if num is not integer and if true add to neither 
2. Filter digit for only number values 
3. Get count of digits 
4. If even add to even if odd add to odd 

Algorithm
Identify if number is integer, how many digits they have and list them in the categories odd number of digits, even number of digits and neither 

Create groups object and set to object with the properties even, odd and neither, each of which has an empty array as value 
Iterate through input array 
  If current num is not an integer 
    Add to object property neither
    Continue iterating 
  Create numberOfDigits value and set to 
    absolute number of current num 
    coerced to string 
    return length of string 
  If numberOfDigits is even 
    Add to object property even 
  Else 
    Add to object property odd
return groups object
    */

function digitGroups(array) {
  let groups = {
    even: [], 
    odd: [], 
    neither: []
  }; 

  for (let num of array) {
    if(!Number.isInteger(num)) {
      groups.neither.push(num); 
      continue; 
    }
    
    let numberOfDigits = String(Math.abs(num)).length
    
    numberOfDigits % 2 === 0 ? groups.even.push(num) : groups.odd.push(num); 
  }
  return groups; 
}

//console.log(String(-13).split('').filter(num => /[0-9]/.test(num)).length)

// console.log(digitGroups([1, 23, 456, 7.8, 9.0])); 
// // { even: [23], odd: [1, 456, 9], neither: [7.8] }

console.log(digitGroups([1234, 32, 5, 9.1, 7, -13])); 
// { even: [1234, 32], odd: [5, 7, -13], neither: [9.1] }