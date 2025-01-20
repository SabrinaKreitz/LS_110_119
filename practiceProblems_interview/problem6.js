/*
Create a function that takes a string argument and returns a hash in which the keys represent the lowercase letters in the string, and the values represent how often the corresponding letter occurs in the string.

*/


const p = console.log;

function countLetters (string) {
  let count = {};
  for(let char of string) {
    if(/[a-z]/.test(char)) {
      count[char] ? count[char] += 1 : count[char] = 1;
    }
  }
  return count;
}


const objeq = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (! keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

let expected = {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1};
p(objeq(countLetters('woebegone'), expected));

expected = {'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
            'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2};
p(objeq(countLetters('lowercase/uppercase'), expected));

expected = {'u': 1, 'o': 1, 'i': 1, 's': 1};
p(objeq(countLetters('W. E. B. Du Bois'), expected));

p(objeq(countLetters('x'), {'x': 1}));
p(objeq(countLetters(''), {}));
p(objeq(countLetters('!!!'), {}));

/* second attempt 9 minutes
Create a function that takes a string argument and returns a hash in which the keys represent the lowercase letters in the string, and the values represent how often the corresponding letter occurs in the string.

Problem: 
count the occurances of a lowercase letter in a string
  - iterate through the string 
  - if the char is a lowercase letter 
  - add it to count object 
  - if no occurance is found return emptpy object 

A: count the occurances of a lowercase letter in a string and return them in an object. 

- CREATE `count` object and set to empty object 
- ITERATE through input string 
  - if current char is a lowercase letter 
    - if char exists as property in `count` 
      - increment `char` in `object` by 1 
    - else 
      - create property `char` in `count` and set to 1 
- RETURN `count` 
*/
let p = console.log; 

function countLetters (string) {
  let count = {};

  for (let char of string) {
    if(char >= 'a' && char <= `z`) {
      count[char] ? count[char] += 1 : count[char] = 1; 
    }
  }
  return count;
}