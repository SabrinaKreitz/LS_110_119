/* 33 minutes > way too complicated solution 

Given an array of strings made only from lowercase letters,
return an array of all characters that show up in all strings within the given array (including duplication).
For example, if a character occurs 3 times in all strings but not 4 times,
you need to include that character three time in the final answer.


Algorithm 
---------
Make lists of count of chars for each word [helperfunction]
Make commons variable and set to empty array 
Iterate through first word of input array 
  If current char exists in commons 
    Contintue iterating 
  If all lists include character 
    Take values of character from all lists 
      Sort value by smallest 
        Push k amount of this character to commons (k = smallest)
Return commons
-------

*/

let p = console.log; 

function commonChars(arr) {
  let listOfChars = arr.map(elm => makeList(elm)); 

  let commons = []

  for (let char of arr[0]) { 
    if (commons.includes(char)) continue; 
    if (listOfChars.every(obj => obj[char])) {
      let counts = listOfChars.map(obj => obj[char]).sort((a, b) => a - b);
      let common = Array(counts[0]).fill(char); 
      common.forEach(elm => commons.push(elm)); 
    }
  }
  return commons; 
}

function makeList(str) {
  let obj = []; 

  for (let elm of str) {
    obj[elm] ? obj[elm] ++ : obj[elm] = 1; 
  }
  return obj; 
}

p(commonChars(['a', 'b'])) // []
p(commonChars(['bella', 'label', 'roller'])) // ['e', 'l', 'l']
p(commonChars(['cool', 'lock', 'cook'])) // ['c', 'o']
p(commonChars(['hello', 'goodbye', 'booye', 'random'])) // ['o']

// Reys solution 

function commonChars(source) {
  let commonChars = [];
  let firstWord = source[0];
  let arr = [...source];
  // 'cool', 'lock', 'cook'
  // firstWord = cool
  for (let char of firstWord) {
    if (arr.every(word => word.includes(char))) {
      commonChars.push(char);
      arr = arr.map(word => word.replace(char, ''));
    }
  }


  return commonChars;
}
let p = console.log;

p(commonChars(['a', 'b'])) // []
p(commonChars(['belllla', 'abelll', 'rolller'])) // ['e', 'l', 'l', 'l']
p(commonChars([])) // ['c', 'o']
p(commonChars(['hello', 'goodbye', 'booye', 'random'])) // ['o']