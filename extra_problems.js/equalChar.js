/*
Given a string `s`, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

Rules: 
- if there are only unique chars -> return -1
- if there are no chars between the equal chars -> return 0 
- find the double characters in string -> return the amount of chars inbetween -> exluding the equal chars 

Data: 
- Input: string -> find the equal chars 
- Intermediary structure: array -> find equal characters -> create new array which is the substring 
- Output: Number -> length of chars between equal characters 

A: Find equal characters in string and return number of character inbetween equal characters. 

CREATE variable `stringArray` and set it to array with each char of input string as new element 
CREATE variable `equalChar` set to character in array that is not uniqee [helperfunction];
IF `equalChar` equals -1 return `equalChar`
CREATE variable `subArray`
  - start index of `equalChar` + 1 in `stringArray` to the end 
  - SET `subArray` to spliced array from 0-indexed element of `subArray` until index of `equalChar` of `subArray`

  RETURN length of `subArray`

Helperfunction findEqualChar (stringArray) 
CREATE variable `equalChar` 
ITERATE through `stringArray`
  - CREATE `subArray` with all elements, excluding current indexed element 
  - IF current element is included in `subArray` 
    - SET `equalChar` to current element

IF `equalChar` is a tuthy value 
  RETURN `equalChar` 
ELSE 
  RETURN -1



*/
let p = console.log;

function maxLengthBetweenEqualCharacters (string) {
  let stringArray = string.split('');
  let equalChar = findEqualChar(stringArray);
  //p(equalChar);
  if(equalChar === -1) return equalChar;
  let subArray = stringArray.splice((stringArray.indexOf(equalChar) + 1));
  subArray = subArray.splice(0, subArray.indexOf(equalChar));
 
  return subArray.length;
}

function findEqualChar (stringArray){
  let uniqueChar; 
  stringArray.forEach((char1, idx1) => {
    let subArray = stringArray.filter((char2, idx2) => idx2 !== idx1);
    //p(subArray);
    if(subArray.includes(char1)) {
      uniqueChar = char1;
    }
  })
  return uniqueChar ? uniqueChar : -1;
}

console.log(maxLengthBetweenEqualCharacters("acbsewb") === 3);
console.log(maxLengthBetweenEqualCharacters("acbsewba") === 6);
console.log(maxLengthBetweenEqualCharacters("aa") === 0);
console.log(maxLengthBetweenEqualCharacters("cbzxy") === -1);


// Reys solution 

function maxLengthBetweenEqualCharacters(str) {
  if ([...str].filter(el => str.indexOf(el) !== str.lastIndexOf(el)).length === 0) return -1;

  let count = 0;

  for (let i = 0; i < str.length - 1; i++) {

    for (let k = i + 1; k <= str.length - 1; k++) {
      if (str[i] === str[k] && ((k - i - 1) > count)) {
        count = k - i - 1;
      }
    }

  }

  return count;
}

console.log(maxLengthBetweenEqualCharacters("acbsewb") === 3);
console.log(maxLengthBetweenEqualCharacters("acbsewbadzzzzzzzzzzzzd") === 12);
console.log(maxLengthBetweenEqualCharacters("aa") === 0);
console.log(maxLengthBetweenEqualCharacters("cbzxy") === -1);