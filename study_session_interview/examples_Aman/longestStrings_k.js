// You are given an array of strings and an integer k.
// Your task is to return the first longest string consisting of k consecutive strings taken in the array.

/* 24 minutes

A: Create all leading subarrays of k elements and return the longest possible string of concatenated subarrays. 

main function longestConsec(array, k)
-------------------------------------
IF k is smaller or equal to zero 
  RETURN empty string 
IF k is greater than length of array 
  RETURN empty string 
IF array is empty
  RETURN empty string 

CREATE longestString variable and set to empty string 
ITERATE through input array starting at idx = 0, running as long as idx i smaller than or equal to length of array minus k 
  CREATE subarray variable and set to part of array from idx1 to idx1 + k (not including) 
  IF concatenated elements of subarray is longer than longestString 
    SET longestString to concatenated elements of subarray
RETURN longestString
*/


function longestConsec (array, k) {
  if(k <= 0 || k > array.length || array.length === 0) return "";

  let longest = ""; 

  for (let idx = 0; idx <= array.length - k; idx++) {
    let concatString = array.slice(idx, idx + k).join('');
    if(concatString.length > longest.length) longest = concatString; 
  }
return longest; 
}



// // Test Cases
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); 
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) === "abigailtheta"); 
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true

console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); 
console.log(longestConsec([], 3) === ""); 

console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); 

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); 
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); 

console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); 
