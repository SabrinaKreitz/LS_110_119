/* 2 hours
Unicode Frequency Counter (Hard)
Problem:​ Create a function called unicodeFrequencyCounter that takes a string and returns an object showing the frequency distribution of characters grouped by their Unicode category. Additionally, identify and count any special patterns (consecutive identical characters, alternating case, etc.) in the input string.

Data
Input > string
"Hello123!"

Output > Object > entries representing difference cases and patterns in input string 
Includes nested object for `pattern` key 
// { 
//   uppercase: 1,  // H
//   lowercase: 4,  // e, l, l, o
//   digits: 3,     // 1, 2, 3
//   symbols: 1,    // !
//   patterns: { consecutiveChars: 1 }  
// }

Nexted object 
patterns: {
  consecutiveChars: 0; > count of groups of consecutive equal characters
  alternatingCase: 0 > count of times that a lowerCase character is followed by uppercase character
  alternatingGroups: 0 > count of times of consecutive existance of all 4 groups
}

Logic: 

Base structure: 
{
  uppercase: 0,
  lowercase: 0,
  digits: 0,
  symbols: 0,
  patterns: {}
}

Reassign uppercase to length of input string when filtered for upperCase characters
Reassign lowercase to length of input string when filtered for lowerCase characters 
Reassign digits to length of input string when filtered for digits
Reassign symbols to length of input string when filtered for symbols
Reassign patterns to return value of identifyPattern(string)

How to identify pattern? 
Set initial object to empty object 

If consecutiveChars is not zero 
  Add consecutive Chars and value to object 

... do the same for other cases 

helperfunctions: 
  consecutiveChars: How do I find groups of consecutive chars? 
  "+++---111"
  > overall group [[+++], [---], [111]]
  > local array of current group 
  > If group is empty add current element [+]
  > If current element exists in local group 
    Add it 
  Else 
    Push local group to overall group 
    Reassign curren group to array with current valu e
  Return length of overall groups 

  alternating case: 
  "aB1!cD2@eF3#"
  ITerate through string starting at second character 
  If current character is upperCase and last character is lowercase 
    Increment count of cases 
  
  Alternating groups: 
  "aB1! cD2@ eF3#"
  All groups of 4 subarrays > Create array of subarrays with groups [[aB1!] [cD2@] [eF3#]]"
  Filter subarray group for subarrays some of the elements fits in at least one group 
  Return length of array 

----------------------------------------------

Algorithm
Make a list of count of cases of uppercase, lowercase, digits, symbols and patterns in a string. 
Patterns are: 
- counts of groups of consecutive equal characters 
- count of times a uppercase letter is preceded by lowercase letter
- count of groups for which all four cases (uppercase until symbol) appear in consecutive order 

Create frequencyCounter and set to object with the properties, uppercase, lowercsae, digits and symbols - all with a value of zero and the property pattern with the value of an empty object 

Reassign uppercase to length of input string when filtered for upperCase characters
Reassign lowercase to length of input string when filtered for lowerCase characters 
Reassign digits to length of input string when filtered for digits
Reassign symbols to length of input string when filtered for symbols
Reassign patterns to return value of identifyPattern(string)

Return frequencyCounter

[helperfunction] identifyPatterns(string) 

Create patterns and set to empty object 

If countConsecutiveChars(string) does not equal 0
  Create entry in patterns with consecutiveChars as property and countConsecutiveChars(string) as value 

If countAlternatingCase(string) does not equal 0
  Create entry in patterns with alternatingCase as property and countAlternatingCase(string) as value 

If countAlternatingGroups(string) does not equal 0
  Create entry in patterns with alternatingGroups as property and countAlternatingGroups(string) as value 

Return patterns 

[helperfunction] countConsecutiveChars(string)

Create consecutiveGroups array and set to empty array 
Create currentGroup array and set to empty array 

Iterate through input string
  If currentGroup is empty 
    Push current element 
    Continue iterating 
  If current element exists in currentGroup 
    Push current element to currentGroup 
      If current element is last element AND currentGroup has more than one element 
            Push currentGroup to consecutiveGroups and
            break the loop 
    Continue iterating 
  If currenGroup is more than 1 element 
    Push currentGroup to consecutiveGroups
  Reassign currentGroup to array with current value as element

Return length of consecutiveGroups

[helperfunction] countAlternatingCase(string)

Create count variable and set to zero 
Iterate through input string from 1st indexed element 
  If current character is upperCase AND last character is lowerCase 
    Increment count 
Return count 

// [helperfunction] countAlternatingGroups(string)

// Create groupsOfFour and set to empty array 
// Iterate through input string in steps of 4
//   Create subarray variable and set to array with element of 
//     substring of string from current char until current char + 4
//   Push subarray to groupsOfFour
// Reassign groupsOfFour to 
  // Iterate through groupsOfFour and select subarrays for which: 
  //  Iterate through element of subarray: 
  //   - Some of the elements are an upperCase letter AND
  //   - Some of the elements are a lowerCase letter AND
  //   - Some of the elements are a digit AND
  //   - Some of the elements are a symbol 
// Return length of groupsOfFour

*/



let p = console.log; 

function unicodeFrequencyCounter(string) {

  let frequencyCounter = {
    uppercase: 0,
    lowercase: 0,
    digits: 0,
    symbols: 0,
    patterns: {}
  }; 

  frequencyCounter.uppercase = string.split('').filter(char => /[A-Z]/.test(char)).length; 
  frequencyCounter.lowercase = string.split('').filter(char => /[a-z]/.test(char)).length; 
  frequencyCounter.digits = string.split('').filter(char => /[0-9]/.test(char)).length; 
  frequencyCounter.symbols = string.split('').filter(char => /[^a-zA-Z0-9]/.test(char)).length; 
  frequencyCounter.patterns = identifyPatterns(string); 

  p(frequencyCounter); 
}

function identifyPatterns(string) {
  
  let patterns = {}; 

  if(countConsecutiveChars(string)) patterns.consecutiveChars =  countConsecutiveChars(string); 
  if(countAlternatingCase(string)) patterns.alternatingCase = countAlternatingCase(string); 
  if(countAlternatingGroups(string)) patterns.alternatingGroups = countAlternatingGroups(string); 

  return patterns; 
}

function countConsecutiveChars(string) {
  
  let consecutiveGroups = []; 
  let currentGroup = []; 

  for (let idx = 0; idx <= string.length; idx ++) {
    if(currentGroup.length === 0) {
      currentGroup.push(string[idx]); 
      continue; 
    }; 
    if(currentGroup.includes(string[idx])) {
      currentGroup.push(string[idx]); 
      if(idx === string.length - 1 && currentGroup.length > 1) {
        consecutiveGroups.push(currentGroup); 
        break; 
      }
      continue; 
    }
    if(currentGroup.length > 1) consecutiveGroups.push(currentGroup); 
    currentGroup = [string[idx]]; 
    }
    return consecutiveGroups.length; 
  }

function countAlternatingCase(string) {

  let count = 0; 

  for (let idx = 1; idx < string.length; idx ++) {
    if(/[A-Z]/.test(string[idx]) && /[a-z]/.test(string[idx - 1])) count++; 
  }

  return count; 
}

function countAlternatingGroups(string) {
  let groupsOfFour = []; 

  for (let idx = 0; idx < string.length; idx += 4) {
    let subarray = [string.substring(idx, idx + 4)]; 
    groupsOfFour.push(subarray); 
  }
  groupsOfFour = groupsOfFour.filter(sub => { 
    let splitChars = sub[0].split(''); 

    let everythingIncluded = splitChars.some(chars => /[A-Z]/.test(chars)) &&
    splitChars.some(chars => /[a-z]/.test(chars)) &&
    splitChars.some(chars => /[0-9]/.test(chars)) &&
    splitChars.some(chars => /[^a-zA-Z0-9]/.test(chars)); 

    return everythingIncluded
  })
  return groupsOfFour.length; 
}


// javascript

unicodeFrequencyCounter("Hello123!");
// {
//   uppercase: 1,  // H
//   lowercase: 4,  // e, l, l, o
//   digits: 3,     // 1, 2, 3
//   symbols: 1,    // !
//   patterns: { 
//     consecutiveChars: 1  // consecutive 'l's
//   }
// }

unicodeFrequencyCounter("JavaScript");
// {
//   uppercase: 1,  // J
//   lowercase: 8,  // a, v, a, c, r, i, p, t
//   digits: 0,
//   symbols: 0,
//   patterns: { 
//     alternatingCase: 1  // 'S' in the middle of lowercase
//   }
// // }

unicodeFrequencyCounter("+++---111");
// {
//   uppercase: 0,
//   lowercase: 0,
//   digits: 3,     // 1, 1, 1
//   symbols: 6,    // +, +, +, -, -, -
//   patterns: { 
//     consecutiveChars: 3  // +++, ---, 111
//   }
// }

unicodeFrequencyCounter("aB1!cD2@eF3#");
// {
//   uppercase: 3,  // B, D, F
//   lowercase: 3,  // a, c, e
//   digits: 3,     // 1, 2, 3
//   symbols: 3,    // !, @, #
//   patterns: {
//     alternatingCase: 3,     // 
//     alternatingGroups: 3    // 
//   }


unicodeFrequencyCounter("");
// {
//   uppercase: 0,
//   lowercase: 0,
//   digits: 0,
//   symbols: 0,
//   patterns: {}
// }