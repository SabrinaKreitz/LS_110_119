/* took too long to get to the core of the problem and then didn't think enough about how to solve it
 
Implement the function/method, minimum shorten.

The function shortens a sentence such that it will fit within the character limit set.
It shortens by removing vowels in the sequence of a, e, i, o, and u.

Start removing from the end of the sentence.
If it can not be shortened to fit within character limit, return an empty string. Spaces don’t count for the limit.
----------
"This is a test sentence",  18 > This is  test sentence
> has 18 characters (not counting white spaces) > therefore returned in full
"Hello World", 8 > Hllo Wrld

removed > o, e

"A vry lng sntnc with many vwls"

-----------
Rules: 
- Remove vowals from a sentence by 
  - iterating through it from the end 
  - first remove the a then e, i, o, u etc. 
- Remove until the amount of characters equals the char limit (second arg)
- If the shortened version has more chars than the given limit > return an empty string 

Logic
Keep track of: 
Does count of chars equal char limit 
 > Create an initial count of chars 
 > Decrement each time I remove a char and compare to limit 

Iterate through reversed string as long as the count of chars is larger than the char limit 
At each iteration 
  Remove the a, e, then i, o, u etc. 

Guard clause 
  > Amount of chars of input string equals or is smaller than char limit 
    > Return input string 

Final return 
  > Return shortened version only when amount of chars is equal to limit 

WhiteSpaces problem 
  > Not count whitespaces in iteration 
aeoui > loop through vowals 
  > loop through sentence reversed (from end)
    > if char is vowal > remove char and decrement count 
  "A very long sentence with many vowels"

aeiou > while limit is larger than count 
"A very long sentence with many vowels"

Data
Input: string, number
Intermediary: "Hello World"
Ouptut: string

Algorithm 
Remove vowals in the sequence of aeiou from a sentence - starting from behind - until count of characters in sentence is euqal to char limit
Return shortened if it is equal to limit in character count. 

Create countOfChars and set to count of characters in string 
If count of Chars is smaller or equal to charLimit
  Return input string 
Create string of vowals in the sequence of aeiou 
Create shortened and set reversed version of input sentence as array of single chars
Iterate through vowals aeiou
    Iterate through shortened
    If current char equals current vowal 
      Remove char from shortened 
      Decrement countOfChars
    If countOfChars is equal to charLimit
      Break the loop 
  If countOfChars is equal to charLimit
    Break the loop 
If countOfChars is greater than charLimit
  Return input sentence(arg1) 
Return shortened as string of single words and reversed

*/

function minimumShorten (sentence, charLimit) {
  let countOfChars = sentence.split('').filter(char => char !== ' ').join('')//.length; 
  //console.log(countOfChars); 
  if (countOfChars <= charLimit) return sentence; 

  let vowals = `aeiou`; 
  let shortened = sentence.split('').reverse(); 
  //console.log(shortened); 

  for (let vowal of vowals) {
    for (let idx = 0; idx <= shortened.length; idx++) {
      //console.log(shortened[idx])
      if(shortened[idx] === vowal) shortened = shor
      
    }
    console.log(shortened)
  }
}

console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
// console.log(minimumShorten("Hello World", 8)); // Hllo Wrld 
// console.log(minimumShorten("Short", 10)); // Short
// console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""