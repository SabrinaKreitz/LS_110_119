/*
Problem 3 // 21 minutes 

You'll be given a string of random characters (numbers, letters, and symbols).
To decode this string into the key we're searching for:
(1) count the number of occurences of each ascii lowercase letter, and
(2) return an ordered string, 26 places long, corresponding to the number of 
    occurences for each corresponding letter in the alphabet.

The string returned should always be 26 characters long, and only count lowercase letters.
You can assume that each lowercase letter will appear a maximum of 9 times in the input str.

A: 
Count the amount of times that each lowercase letter of the alphabet appears in input string
Return a string of all counts

CREATE count obj  
  - iteate from letter a to letter z
  - add property of letter with value of 0 to count 
ITERATE through input string 
  IF char is lowercase letter 
    - increment corresponding property in obj by 1 
RETURN 
  - values of obj
  - extract string numbers 
  - join them to one string 
*/

function decrypt (crypt) {
  let count = {}; 

  for(let code = `a`.charCodeAt(); code <= `z`.charCodeAt(); code++) {
    count[String.fromCharCode(code)] = 0; 
  }

  for(let char of crypt) {
    if(char >= `a` && char<= `z`) count[char] += 1; 
  }

  return Object.values(count).join(''); 
}



console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');
console.log(decrypt('a1b2c3D4dda') === '21120000000000000000000000');
console.log(decrypt('a1aba2aca3aDaa4dda') === '91120000000000000000000000');
console.log(decrypt('1203904942@$2') === '00000000000000000000000000');
console.log(decrypt('ABCJDK3ROKGMIS3949') === '00000000000000000000000000');
console.log(decrypt('') === '00000000000000000000000000');

