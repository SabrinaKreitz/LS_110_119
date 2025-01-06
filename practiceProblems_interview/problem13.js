/*
7 minutes
Create a function that takes two strings as arguments and returns `true` if some portion of the characters in the first string can be rearranged to match the characters in the second. Otherwise, the function should return `false`.

You may assume that both string arguments only contain lowercase alphabetic characters. Neither string will be empty.


A: Check if each letter of input string 1 can be found in input string 2 

LOOP through input string 2 
  - IF current element is NOT included in input string 1 
    - RETURN false 
RETURN true 
*/

const p = console.log;

function unscramble (str1, str2) {
  for (let char of str2) {
    if(!str1.includes(char)) return false;
  }
  return true;
}


p(unscramble('ansucchlohlo', 'launchschool') === true);
p(unscramble('phyarunstole', 'pythonrules') === true);
p(unscramble('phyarunstola', 'pythonrules') === false);
p(unscramble('boldface', 'coal') === true);

