let p = console.log

/*
Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

A: 
Extract the digits from a number and store them in an array

Create `output` variable 
  - set to empty array
Loop through input variable 
  - set `count` variable to value of input variable 
  - create a loop that runs as long as `count` is larger than `0`
  - at each iteration 
    - set `digit` variable to the remainder of `count` divided by 10 
    - prepend `digit` to output variable 
    - set `count` to it's value divided by 10 rounded down 
Return `output` variable
*/

function digitList (number) {
  let list = [];
  let count = number;
  do{
    let digit = count % 10; 
    list.unshift(digit);
    count = Math.floor(count / 10);
  } while (count > 0)
  return list;
}

p(digitList(12345));       // [1, 2, 3, 4, 5]
p(digitList(7));           // [7]
p(digitList(375290));      // [3, 7, 5, 2, 9, 0]
p(digitList(444));         // [4, 4, 4]
