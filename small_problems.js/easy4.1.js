/*Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

PEDAC

Problem: Get 6 numbers from a user and check if the last number given, has been input before. 

Explicit rules: 
- The user must enter exactly 6 numbers 
- The input is only valid when it's numbers 
- The message to the user should be the following: 
  - Enter the 1st number:
  - ....
- The program returns one of two messages to the user 
  - The number [last number] appears in [input numbers 1 - 5]
  - The number [last number] does not appear in [input numbers 1 - 5]
- The messages states if the 6th number is the same as one of the number 1 to/ including 5.


Implicit rule: 
- Only integers are considere valid input
- If the input is not a number, user gets asked again to enter a number
- We do not have to state the ordered index of the number that is repeated but simply if it has been repeated or not. 

Questions: 
- Can the user enter non-integers? 
- Should the program run once or multiple times? 
- What happens if the input is not a number? 


Test cases: 

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

Data structure: 

Input: 
- string 
Inbetween data structure: 
- array 
- number
Output: 
- string 

Algorithm: 
High level: 
Write a program that requests user input. Ask the user to input a number 6 times. Then check if the 6th number is equal to any of the previously input numbers. Output a message to the user that states whether that is true or not. 

Sub-algorithm - user input: 
- Create a global variable called "inputList"
- Create a global variable called "nthMessages" which contains the elements ["1st, "2nd" ...]
- Loop through each element of "nthMessages"  
  - output message to user that asks to input a number using the string "Enter the [nthMessages] number".
  - Save the user input to the variable "number"
  - check if the input is a number
    - if input is not a number, ask user again to input a number
    - if the input is a number, save that number to "inputList"


sub-algorithm - check double numbers and user-output: 
- Create a variable called "sixthNumber" 
  - Take out the last element of "inputList" and save it to "sixthNumber"
- "inputList" should now have one element less
- Check if "sixthNumber" is included in "inputList"
  - if it is included, output a message to the user that states that the 6th number is included in the numbers 1 to 5. 
  - if it is not included, output a message to the user that states that the 6th number is not included in the numbers 1 to 5. 
- Exit the program 

*/
// install readline in current directory 
let readline = require('readline-sync');

// holds valid user input (numbers)
let inputList = [];
let nthMessages = ['1st', '2nd', '3rd', '4th', '5th', 'last'];

for (let nth of nthMessages) {
  let answer = Number(readline.question(`Enter the ${nth} number`));
  
  while(!answer) {
    console.log("This was not a number. Please enter a number.");
    answer = Number(readline.question(`Enter the ${nth} number`));
  }
  
  inputList.push(answer);
}

let sixthNumber = inputList.pop();
if(inputList.includes(sixthNumber)) {
  console.log(`The number ${sixthNumber} appears in ${inputList.join(",")}.`) 
} else {
  console.log(`The number ${sixthNumber} does not appear in ${inputList.join(",")}.`) 
}
