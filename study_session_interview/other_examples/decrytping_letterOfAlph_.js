/* 28 minutes 
You'll be given a string of random characters (numbers, letters, and symbols).
To decode this string into the key we're searching for:
(1) count the number of occurences of each ascii lowercase letter, and
(2) return an ordered string, 26 places long, corresponding to the number of 
    occurences for each corresponding letter in the alphabet.

The string returned should always be 26 characters long, and only count lowercase letters.
You can assume that each lowercase letter will appear a maximum of 9 times in the input str.


Data
Input: string >  '$aaaa#bbb*ccfff!z'
Output: string >  '43200300000000000000000001'

Cases: 
'$aaaa#bbb*ccfff!z'
count occurance of each alphabetic letter 
a: 4
b: 3
c: 2
d: 0
e: 0
f: 3
g: 0
......
y: 0
z: 1

> all the counts as string 432003000...01

Rules:
- Only count lowercase letters > no uppercase, no symbol, no digit, no whitespace 
- each lowercase letter appears a max of 9 times in input string 

Problem
Count the occurance of lowercase letters in input string 
Return a string of 26 digits, each digit represents the occurance of letters in the corresponding order of the alphabet 

Logic: 
Base structure: 00000000000000000000000000 > 26 zeros 
Corresponds to: abcdefghijklmnopqrstuvwxyz > 26 chars of alphabet 
'$aaaa#bbb*ccfff!z'
count occurance of each alphabetic letter 
{a: 4
b: 3
c: 2
d: 0
e: 0
f: 3
g: 0
......
y: 0
z: 1}

---
Create alphabet  > abcdefghijklmnopqrstuvwxyz
Iterate through alphabet and create an object with each letter of alphabet with the value of 0 
{
  a: 0, 
  b: 0 ,
  c: 0,
  ....
}
Iterate through input string: '$aaaa#bbb*ccfff!z'
Return values of object [4, 3, 2, 0...]
Return as string

Algorithm: 
Count the occurance of lowercase letters in input string 
Return a string of 26 digits, each digit represents the count of letters in input string corresponding to the order of the alphabet 

-------------
decrypt(string) 
Create alphabetList and set to return value of createAlphabet
Iterate through input string 
  If character exists in alphabetList 
    Increment value by 1
Return values of alphabetList as string 

----------
[helperfunction] createAlphabet()
Create `alphabet` string and set to lowercase letters of the alphabet 
Create `alphObj` and set to an empty object 
Iterate through `alphabet` and create entry in `alphObj` with each letter assigned to value of 0 
Return `alphObj`
*/

let p = console.log; 

function decrypt(string) {
  let alphabetList = createAlphabet(); 

  for(let char of string) {
   if(alphabetList[char] !== undefined) alphabetList[char] += 1; 
  }

  return Object.values(alphabetList).join('');
}


function createAlphabet() {
  let alphabet = `abcdefghijklmnopqrstuvwxyz`; 
  let alphObj = {}; 

  for(let char of alphabet) {
    alphObj[char] = 0; 
  }
  return alphObj; 
}
console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');
console.log(decrypt('a1b2c3D4dda') === '21120000000000000000000000');
console.log(decrypt('a1aba2aca3aDaa4dda') === '91120000000000000000000000');
console.log(decrypt('1203904942@$2') === '00000000000000000000000000');
console.log(decrypt('ABCJDK3ROKGMIS3949') === '00000000000000000000000000');
console.log(decrypt('') === '00000000000000000000000000');