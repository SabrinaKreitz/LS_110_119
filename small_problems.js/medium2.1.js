let p = console.log;
/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither

You may assume that the string will always contain at least one character.

P: 
- if character is lowercase letter > count and return total percentage
- if character is uppercase letter > count and return total percentage
- if character is not a letter (includes whitespace) > count and return total percentage

D: 
Input: 
String > can include any type of character
Intermediate: 
Numbers 
> totalCount: length of string 
> count of lowerCase characters
> count of upperCase characters
Ouput: 
Object >  { lowercase: "0.00", uppercase: "0.00", neither: "00.00" }
   > Each value is string version of e.g. count/ length * 100 > capped to 2 decimals 

A: Calculate the percentage of lowerCase-, upperCase-, and all other characters in a string. Return their respective percentage in an object. 

CREATE `totalCount` variable and set to length of input string
CREATE `lowerCase` variable and set to amount of lowerCase characters in input string 
[helperfunction]
CREATE `upperCase` variable and set to amount of upperCase characters in input string 
[helperfunction]
CREATE `neither` variable and set to totalCount - (lowerCase + upperCase)

Return object { lowercase: [String version of (lowerCase/totalCount * 100) capped to 2 decimals], uppercase: [same with uppercase], neither: [same with neither] }

Helperfunction countCases(string, regex)
  - Turn input string into array
  - Iterate over array 
  - Select only characters that match the regex case 
  - Return length of array with selection 
*/

function letterPercentages (letters) {
  let totalCount = letters.length;

  let lowerPercentage = countCases(letters, /[a-z]/) / totalCount * 100;

  let upperPercentage = countCases(letters, /[A-Z]/) / totalCount * 100;

  let otherPercentage = 100 - (lowerPercentage + upperPercentage);
 
  return {lowercase: String(lowerPercentage.toFixed(2)), uppercase: String(upperPercentage.toFixed(2)), neither: String(otherPercentage.toFixed(2))}
}

function countCases (string, regex) {
  return string.split('').filter(char => regex.test(char)).length;
}

//second attempt

