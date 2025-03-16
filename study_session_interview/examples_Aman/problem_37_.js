/* 16 minutes 
Given a string `s`, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

Algorithm 
Find the longest substring between two equal chars in a string and return its length 

Create longest variable and set to -1 
Iterate through input string 
For each char 
Find first and last index 
  If indices are not the same 
    Calculate last index minus first index minus 1 
  If result is greater than longest 
    Set longest to result 
Return longest 
*/

function maxLengthBetweenEqualCharacters(string) {
  let longest = -1; 

  for (let char of string) {
    if(string.indexOf(char) !== string.lastIndexOf(char)) {
      let difference = string.lastIndexOf(char) - string.indexOf(char) - 1; 
      if (difference > longest) longest = difference; 
    }
  }
  return longest; 
}

console.log(maxLengthBetweenEqualCharacters("acbsewb") === 3);
console.log(maxLengthBetweenEqualCharacters("acbsewba") === 6);
console.log(maxLengthBetweenEqualCharacters("aa") === 0);
console.log(maxLengthBetweenEqualCharacters("cbzxy") === -1);