/* 20 minutes
You are given an array of strings and an integer k.
Your task is to return the first longest string consisting of k consecutive strings taken in the array.

 Algorithm 
 Find all consecutive strings of k elements in input array 
 Return longest combination of strings 

 Main function - longestConsec (arr, k)
 If 
  - arr is empty OR
  - k is samller or equal to zero OR
  - k is larger than length of input array 
  Return empty string 

Create longest and set to empty string
Iterate through input array
  Create substring with k amount of elements in arr 
    If substring is longer than longest 
      Set longest to substring
Return longest
*/

function longestConsec (arr, k) {
  if(arr.length === 0 || k <= 0 || k > arr.length) return ""; 
  
  let longest = ""; 

  for (let idx = 0; idx <= arr.length - k; idx++) {
    let substring = arr.slice(idx, idx + k).join(''); 
    if (substring.length > longest.length) longest = substring; 
  }
  return longest; 
}


// Test Cases
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true

console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true

console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true

//edge cases 
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true

console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec([], 3) === ""); // true