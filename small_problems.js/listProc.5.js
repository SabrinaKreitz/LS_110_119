let p = console.log;

/*
Write a function that returns a list of all substrings of a string. 
Order the returned list by where in the string the substring begins. 
This means that all substrings that start at index position 0 should come first, 
then all substrings that start at index position 1, and so on. 
Since multiple substrings will occur at each position, 
return the substrings at a given index from shortest to longest.
*/

function leadingSubstrings (substring) {
  let list = [];

  for (let idx1 = 1; idx1 <= substring.length; idx1 ++) {
    list.push((substring.substring(0, idx1)))
  }
  return list;
}

function substrings (string) {
  let substringArr = [];

  for(let idx = 0; idx < string.length; idx ++) {
    let currentBatch = leadingSubstrings(string.substring(idx));
    substringArr = substringArr.concat(currentBatch);
  }
  return substringArr;
}

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]