/* 26 minutes 
String Compression:
Implement a method to perform basic string compression using the counts of repeated characters. If the "compressed" string would not become smaller than the original string, your method should return the original string.

'aabcccccaaa' > 'a2b1c5a3'
> Each character is compressed to one value of it's sort plus the count of following characters of the same sort 
> aaa > a1
b > b1
ccccc > c5
aaa > a3

> the compression happens only for consecutive characters of the same sort 
-------

'aabb' > 'aabb'
aa > a2
bb > b2
>>>> a2b2 > has the same length as original string > is as such not compressed 

----

Problem 
Find the count of consecuetive, equal characters in a string 
Create a new string with each of those characters and it's count concatenated 


Rules
If compressed version is not smaller than original version 
  > Return original version 
If input is empty string
  > Return empty string


Logic
Find consecutive equal characters by checking if current and next is the same 

Algorithm 
1. Find the count of consecuetive, equal characters in a string 
2. Create a new string with one representiative of each consecutive equal char and it's count concatenated into compressed string. 
3. Return compressed string if it's smaller than original string. 
--------------------
Create compressed and set to empty string 
Create current chunk and set to empty string 
Iterate through input string 
  If length of chunk is 0 
    Add current element ot chunk 
  If next element is equal to last element of chunk 
    Add next element to chunk 
    Else 
      Add 0-indexed element of chunk + length of chunk as string to compressed 
      Set chunk to empty string 
If length of compressed is smaller than input string 
  Return compressed 
Else 
  Return input string 
*/

function compressString(string) {
  let compressed = ''; 
  let chunk = ''; 

  for (let current = 0; current < string.length; current++) {
    if (chunk.length === 0) chunk += string[current]; 
    
    if(string[current] === string[current + 1]) {
      chunk += string[current + 1]; 
    } else {
      compressed += chunk[0] + chunk.length; 
      chunk = ''
    }
  }

  return compressed.length < string.length ? compressed : string; 
}

//Compressed 

console.log(compressString('aabcccccaaa'));   // 'a2b1c5a3' > tricky due to double a 
console.log(compressString('aabbbcccc'));     // 'a2b3c4'

//Not compressed 
console.log(compressString('ab'));            // 'ab'
console.log(compressString('abc'));           // 'abc'
console.log(compressString('aabb'));          // 'aabb'

//Edge case > empty string 
 console.log(compressString(''));              // ''
