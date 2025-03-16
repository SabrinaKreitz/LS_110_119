/* 30 minutes 

Select first and last digit from each string in array and sum them up. 

Data: 
Input > array of strings 
[
'1abc2',
'pqr3stu8vwx',
'a1b2c3d4e5f',
'treb7uchet',
]

Intermediate structure: >> array of number pairs as strings 
[
`12`, 
`28`, 
25
77
]

Output > number > sum of all number values from input strings - formed from first and last digit of each string 
142

Rules: 
- If only one digit is present in string > double the digit into a double - digit number 

Problem: 
- Find the first and last digit of each string 
- Form two-digit numbers 
- Sum the numbers 

Logic: 

[
'1abc2',
'pqr3stu8vwx',
'a1b2c3d4e5f',
'treb7uchet',
]

Digits: 
12
28
25
77
>> 142

Get number pairs: 
Iterate over string from beginning and from end > take out first number encountered > merge them into a double-digit number 

Identify numbers: 
Character is between charcode `0` and `9` 

Coercion from string into number: 
Coerce each pair into number before summing up 

Algorithm
- Find the first and last digit of each string 
- Form two-digit numbers 
- Sum the numbers 

Create digitPairs array and set to empty array 
Iterate over strings of input array 
  Create firstDigit and set to return value of firstNumber(string)
  Create reversedString variable and set to 
    current string as array of single chars
    reversed in order 
    returned as new string
  Create lastDigist and set to return value of firstNumber(reversedString)
  Push sum of firstDigit and lastDigit to digitPairs
Return 
  Iterate over digitPairs 
  Return sum of all pairs as numbers 

[helperfunction] firstNumber(string)

Iterate over input string 
  If current char is a string between `0` and `9`
    Return char
*/

let p = console.log; 

function sumStringValues(array) {

  let digitPairs = []; 

  array.forEach(str => {
    let firstDigit = firstNumber(str); 
    let reversedString = str.split('').reverse().join(''); 
    let lastDigit = firstNumber(reversedString); 
    
  digitPairs.push(firstDigit + lastDigit); 
  })

  return digitPairs.reduce((a, b) => Number(a) + Number (b)); 
}

function firstNumber(str) {

  for(let char of str) {
    if(char >= `0` && char <= `9`) return char; 
  }
}

console.log(sumStringValues(['1abc2',
'pqr3stu8vwx',
'a1b2c3d4e5f',
'treb7uchet',
])); // 142

console.log(sumStringValues([
  'ninesixthree8six8',
'5tnzrrzmcsnfivefeightrjninexrhnnfbcb',
'dcjcj2',
'4fhcmhdtfourlzdphfxvlmvm6',
])); // 211