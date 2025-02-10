/*
Problem 5
> 1h
Group Anagrams

Write a function groupAnagrams(words) that takes an array of words 
as input and groups the anagrams together. Anagrams are words that 
have the same characters but in a different order.

Your function should return an array of arrays, where each inner 
array represents a group of anagrams. 

The order of the groups and the order of words within each group 
does not matter.

mainfunction groupAnagrams (array)
--------
CREATE groups obj and set to empty object 
ITERATE through input array 
  CREATE allAnagrams variable and set to createAnagrams(current element to lowerCase)
  IF ANY of the elements of allAnagrams exist in groups
  SELECT the element that exists - access it in groups object and push current value of input array to that property 
RETURN values of groups obj as nested array 


helperfunction createAnagrams (string_lowerCased)
---------
CREATE allAnagrams array and set to array with string as element 
LOOP as long as length of allAnagrams is smaller than length of string * 2
CREATE lastAnagram variable and set to last element of allAnagrams 
ITERATE through lastAnagram as long as current index is smaller than length of input string 
  SWITCH element of current index with element of next biggest index and assign to currentAnagram
  PUSH currentAnagram to allAnagrams
RETURN allAnagrams 
*/

let p = console.log; 

function groupAnagrams(array) {
  let groups = {}; 
  
  array.forEach(string => {
    let allAnagrams = createAnagrams(string.toLowerCase()); // creates all anagrams of current string
    let selectMatch = allAnagrams.filter(anagram => groups[anagram]); //selects the anagram that exists as property in `groups` - otherwise returns empty array 
    selectMatch.length === 0 ? groups[string.toLowerCase()] = [string] : groups[selectMatch[0]].push(string); // creates property - value pair if anagram doesn't exist yet, otherwise adds it to anagram group in object 
  })
  return Object.values(groups); 
}


function createAnagrams (string) { // creates all anagrams of a string 
  let allAnagrams = [string]; 

  while (allAnagrams.length < (string.length * 2)) {
    let lastAnagram = allAnagrams[allAnagrams.length - 1].split(''); 
    for (let idx = 0; idx < string.length - 1; idx++) {
      let currentLetter = lastAnagram[idx];
      let nextLetter = lastAnagram[idx + 1]; 
      lastAnagram[idx] = nextLetter; 
      lastAnagram[idx + 1] = currentLetter; 
      allAnagrams.push(lastAnagram.join('')); 
    }
  }
  return allAnagrams; 
}



console.log(groupAnagrams(["Act", "ogd", "cat"])); // [["Act", "cat"], ["ogd"]]
console.log(groupAnagrams(["School", "mama", "amam", "maam"])) // [["School"], ["mama", "amam", "maam"]]
console.log(groupAnagrams([''])); // [['']]

console.log(groupAnagrams(['Cat', 'dog', 'tac', 'god', 'act']));
// Output: [['Cat', 'tac', 'act'], ['dog', 'god']]