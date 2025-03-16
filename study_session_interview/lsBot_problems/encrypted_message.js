/* 37 minutes 
Encrypted Message Decoder (Hard)
Problem:​ You are working on a system that decrypts encoded messages. The encryption method follows this pattern: 

>> each character's position in the original message is represented by a pair of numbers in the encoded message. 

>> These pairs are arranged so that the first number of each pair represents the original character's position counting from the beginning of the string, while the second number represents its position counting from the end of the string.

>>For example, in the word "HELLO", the 'H' is at position 1 from the beginning and position 5 from the end, so it would be represented as [1,5]. The full encoding would include pairs for each character.

Your function should take an array of number pairs and a string, and determine if the array could be a valid encoding of the string using this system. The function should return true if the encoding is valid, and false otherwise.



Rules: 
- Order of encrypted subarrays doesn't matter 
- for an empty string, the encrypted output is an empty array 
- Position starts at 1 and ends with length of string 

Data: 
Input 1 > array of subarrays > each subarray is the position of a letter in string read from the beginning and end > position is 1-indexed 
[[1,5],[2,4],[3,3],[4,2],[5,1]]

Input2 > string
 "HELLO"

 Output > boolean > runs true if encrypted subarrays match string
 `true` 

Logic: 
[[1,5],[2,4],[3,3],[4,2],[5,1]] ,  "HELLO" > true
H
length = 5 
start index = 0
beginning = index + 1 > 1 
end = length + 1 > 6 - beginning > 5
E
length = 5
index = 1
beginning = index + 1 > 2
end = 6 - beginning > 4

1. Iterate through message 
2. Identify encrypted numbers position beginning and end 
3. Iterate through each subarray of encypted array
4. Check if both numbers exist in any of the subarrays at the correct position 
5. If any of the numbers don't exist, return false 
6. Return true 

Algorithm 
1. Identify encrypted numbers for each letter of message
2. Check if both numbers exist in any of the subarrays of encrypted array at the correct position 

Create lengthMessage variable and set to length of `message` plus 1
Iterate from index 1 and increment by 1 until length of `message` 
  Create beginning and set to index
  Create end and set to `lengthMEssage` - beginning 

  Iterate through encryption array 
  If any of the subarrays doesn't have the value beginning at index 0 AND the value end at index1 
    Return false 
Return true 

*/

// let original = [[1,5],[2,4],[3,3],[4,2],[5,1]] ; 
// let ourOwn = [1,5]; 
// console.log(original.some(sub => sub[0] === 1 && sub[1] === 5))


function isValidEncoding (encrypted, message) {
  let lengthMessage = message.length + 1; 
  
  for (let idx = 1; idx <=  message.length; idx++) {

    let beginning = idx; 
    let end = lengthMessage - beginning; 

    if (!encrypted.some(sub => sub[0] === beginning && sub[1] === end)) return false; 
  }
  return true; 
}

console.log(isValidEncoding([[1,5],[2,4],[3,3],[4,2],[5,1]], "HELLO")); // true

console.log(isValidEncoding([[1,3],[2,2],[3,1]], "ABC")); // true

console.log(isValidEncoding([[1,4],[2,3],[3,2],[4,1]], "ABCD")); // true

console.log(isValidEncoding([[1,6],[2,5],[3,4],[4,3],[5,2],[6,1]], "ABCDEF")); // true

console.log(isValidEncoding([[2,4],[1,5],[4,2],[3,3],[5,1]], "HELLO")); // true 
console.log(isValidEncoding([], "")); // true 

//-----------
console.log(isValidEncoding([[1,5],[2,4],[3,3],[4,2],[6,1]], "HELLO")); // false 

console.log(isValidEncoding([[1,5],[2,4],[3,3],[4,2]], "HELLO")); // false 

console.log(isValidEncoding([[1,3],[3,1]], "ABC")); // false 

console.log(isValidEncoding([[0,3],[1,2],[2,1]], "ABC")); // false 


