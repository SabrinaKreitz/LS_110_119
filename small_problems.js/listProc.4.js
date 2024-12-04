let p = console.log;

/*
Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

*/

function leadingSubstrings (string) {
  let list = [];

  for (let idx1 = 1; idx1 <= string.length; idx1 ++) {
    list.push((string.substring(0, idx1)))
  }
  return list;
}


leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]