/* 15 minutes
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
You may assume the given string consists of lowercase english letters only.

Algorithm 
Create leading substrings from input string 
Return true if a substring can equal input string when concatenated with itself k times. 

Iterate through input string 
  Make leading substring as long as substring is smaller or equal to length of input string 
    Create variable k and set to length of input string divided by length of substring - floored
      If the substring concatenated k times equals to input string 
        Return true 
Return false 
*/

let p = console.log; 

function repeatedSubstringPattern (string) {

  for (let end = 1; end < Math.floor(string.length/2); end++) {
    let sub = string.substring(0, end + 1); 
    let k = Math.floor(string.length / sub.length);

    if (sub.repeat(k) === string) return true;
  }

  return false;
}


p(repeatedSubstringPattern("abab") === true);
p(repeatedSubstringPattern("aba") === false);
p(repeatedSubstringPattern("abaabaabaaba") === true);