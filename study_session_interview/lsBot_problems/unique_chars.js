
/* > 17 minutes 
Unique String Characters
Given two strings, return the characters that are not common in the two strings.

"xyab","xzca" 
-> "ybzc"
-----
"xyab" -> "xzca" 
x > no
y > yes
a > no
b > yes 

---> yb
----
"xzca"  -> "xyab"
x > no
z > yes
c> yes
a > no 

--> zc

Data
Input: two strings 
Intemediate structure: 
{
  a: 1
  b: 2
  c: 1
} 
Ouptut: string > unique characters between the two strings 

Problem 
Find the characters in a string that don't exist in the other string and vice versa 

Logic
Unique character in two strings can be identified by counting appearance of characters in both strings and returning the ones for which the count is 1

Algorithm
Count the appearance of characters in two strings 
Return the characters for which the count is 1 as a new string 
----------
Create joinedString and set to input strings joined as one 
Create countObj variable and set to return value of countChars(joinedString)
Create uniqueChars variable and set to empty string 
Iterate through entries of countObj as subarrays 
  For each subarray 
    If 1st-indexed element is 1 
    Append the 0-indexed element to uniqueChars
Return uniqueChars

--------
[helperfunction] countChars
Create count variable and set to empty object 
Iterate through joinedString 
  If current char exists in count
    Increment value by 1
  Else 
    Create property of char with value of 1

*/


function uniqueStringCharacters(str1, str2) {
  let joinedString = str1 + str2; 
  //console.log(joinedString)
  let countObj = countChars(joinedString); 
  //console.log(countObj)
  let uniqueChars = ''; 

  Object.entries(countObj).forEach(sub => {
    //console.log(sub)
    if(sub[1] === 1) uniqueChars += sub[0]; 
    //console.log(uniqueChars)
  })

  return uniqueChars; 
}


function countChars(string) {
  let count = {}; 

  for (let char of string) {
    count[char] ? count[char] += 1 : count[char] = 1; 
  }

  return count; 
}


// console.log(uniqueStringCharacters("xyab","xzca") === "ybzc"); // true
// console.log(uniqueStringCharacters("a","z") === "az"); // true
// console.log(uniqueStringCharacters("abcd","de") === "abce"); // true
// console.log(uniqueStringCharacters("abc","abba") === "c"); // true
//console.log(uniqueStringCharacters("xyz","zxy") === ""); // true > no unique char

