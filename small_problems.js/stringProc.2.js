let p = console.log;

/*
Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

*/

function removeVowels (array) {
  let newArray = [];
  array.forEach(elm => {
    newArray.push(returnConsonants(elm));
  })
  p(newArray)
}

function returnConsonants (string) {
  let newString = "";
  let vowals = ['a', 'e', 'o', 'i', 'u']
  for (let char of string) {
    if (!vowals.includes(char.toLowerCase())){
      newString += char;
    }
  }
  return newString;
}



removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]


