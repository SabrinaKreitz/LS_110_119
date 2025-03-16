/* > initially went the wrong way because I didn't think of sort 
2.  Anagram Grouping:
Given an array of strings, write a function that groups anagrams together. Return an array of arrays where each subarray contains words that are anagrams of each other.

*/


function groupAnagrams (array) {
  if(array.length === 1) return [[array[0]]]; 

  let groups = {}

  array.forEach(elm => {
    let anagram = elm.split('').sort().join(''); 
    groups[anagram] ? groups[anagram].push(elm) : groups[anagram] = [elm]; 
  })
return Object.values(groups); 
}



 console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// // [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]

// console.log(groupAnagrams(['listen', 'silent', 'enlist']));
// // [['listen', 'silent', 'enlist']]


// console.log(groupAnagrams(['']));
// // [['']]

// console.log(groupAnagrams(['a']));
// // [['a']]







console.log(nestingDepth('(()())'));           // 2 
console.log(nestingDepth('((()))'));           // 3
console.log(nestingDepth('(())()'));           // 2
console.log(nestingDepth(''));                 // 0
console.log(nestingDepth('(()((())()))'));     // 4
console.log(nestingDepth('(()(()()))'));       // 3