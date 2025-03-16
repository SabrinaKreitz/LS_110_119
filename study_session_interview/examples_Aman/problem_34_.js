/* 11 minutes
Your task is to write a function maskify, which changes all but the last four characters into '#'.

Algorithm 
Split a string into the last four numbers and the rest 
Turn the rest into # and concatenate with the last 4 numbers

If length of input string is smaller than 4
  Return input string 
Create variable last4 and set to last four characters of input string 
Create variable of hashes and set to 
  - array with k amount of elements (k = length of input string - 4)
  - filled with the symbol # 
  - joined as a string 
Return string concatanation of hashes and last4
*/

function maskify (str) {
  if (str.length < 4) return str; 

  let last4 = str.substring(str.length - 4); 
  let hashes = Array(str.length - 4).fill(`#`).join(''); 
  
  return hashes + last4; 
}


console.log(maskify("4556364607935616"));                         // "############5616"
console.log(maskify("64607935616"));                              // "#######5616"
console.log(maskify("Nananananananananananananananana Batman!")); // "####################################man!"
console.log(maskify("Skippy"));                                   // "##ippy"

// console.log(maskify("1"));                                        // "1"
// console.log(maskify(""));                                         // ""
// console.log(maskify("cnw"));