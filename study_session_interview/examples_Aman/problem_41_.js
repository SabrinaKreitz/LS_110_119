/* 43 minutes > got everything down in 25 but then tripped over first test case because Number(`0`) is a falsy value

Your job is to write a function which increments a string to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number, the number 1 should be appended to the new string.


Algorithm
If a string ends with a number character return a new string with the number value incremented by 1 
If a string ends with alphabetic character, return string concatenated with `1`. 

-------------------

If last character of input string is not a number
  return string concatenated with `1`
If entire string is a number 
  return string turned number, incremented by 1, turned string
Else 
  Return incrementNum(input string)
----------

[helperfunction] incrementNum(string)
create lastNum and set to empty string
Iterate from last element in string 
  If current element is a number 
    append to lastNum 
  Else 
    break 

create oldString and set to substring of input string minus length of lastNum 
set lastNum to it's number value incremented by 1 turned string 
return oldString + lastNum 
*/

function incrementString(string) {
  if (typeof (Number(string[string.length - 1])) !== 'number') return string + `1`; 
  if (Number(string)) return String(Number(string) + 1)

  return incrementNum(string); 
}

function incrementNum(string) {
  let lastNum = ''; 
  let lastToFirst = string.split('').reverse().join('')

  for(let char of lastToFirst) {
    if (Number(char) || Number(char) === 0) {
      console.log(char)
      lastNum += char
     } else {
      break; 
     } 
  }

  let oldString = string.substring(0, string.length - lastNum.length); 
  lastNum = String(Number(lastNum) + 1); 

  return oldString + lastNum; 
}

console.log(incrementString("foobar0")); // "foobar1" > ends with number  > increment by 1
 //console.log(incrementString("foobar999")); // "foobar1000" > ends with number > increment by 1 
// console.log(incrementString("foo")); // "foo1" > doesn't end with number > add 1 
// console.log(incrementString("foobar1")); // "foobar2" > ends with number > increment number 
// console.log(incrementString("1")); // "2"
// console.log(incrementString("9")); // "10"
// console.log(incrementString("fo99obar99")); // "fo99obar100" >> only increment last number 