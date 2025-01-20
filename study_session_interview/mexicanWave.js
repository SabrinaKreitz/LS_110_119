// In this simle Kata your task is to create a function that turns a string into a Mexican Wave. You will be assed a string and you must return that string in an array where an uercase letter is a erson standing u.

/*
Input: String
Output: Array with strins. 

Rules: 
- The output array will have as many string elements as the length of the input string
  - The elements of the array follow the structure of a mexican wave
    - Each character becomes a single upperCase character, starting with the 0-indexed char until the last-indexed char
    - Whitespaces are not counted


Algorithm: 
- Iterate through the characters of a string
- Create an array of strings where in each element, one of the characters of the input string is changed to upperCase

Function: 
Create a variable called 'mexicanWave' and set it to an empty array
 - Create a variable called 'currentWave' and set it to the value of the input String
  - Iterate through the characters of 'currentWave'
      - Check if the current character is equal to an empty string
        - If true
          - continue to the next iteration 
        - If false
          - Set 'currentWave' to a new value with the current indexed character changed to upperCase
      - Push 'currentWave' to 'mexicanWave'
  - Return 'mexicanWave' 
*/

function wave (string) {
let mexicanWave = [];
let currentWave = string

for(let idx = 0; idx < mexicanWave.length; idx ++) {
  if (currentWave[idx] === " "); continue
} 
}
}



console.log(wave("hello"))// == ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave(" gap "))// == [" Gap ", " gAp ", " gaP "]
console.log(wave("codewars"))// == ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
console.log(wave(""))// == []
console.log(wave("two words"))// == ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]