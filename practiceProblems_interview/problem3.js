/*
Time: 23 minutes
Create a function that takes a string argument and returns a copy of the string with every second character in every third word converted to uppercase. Other characters should remain the same.

Problem: 
Find word > find every third word in a string 
  - convert the string into an array 
  - iterate over array and transform every third word > mutate each word for which it's index+1 is evenly divisible by 3
Mutate word > change every second character of word to uppercase [helperfunction]
  - convert word into array
  - iterate array and transform every second character to uppercase > transform each character for which it's index + 1 is evenly divisible by 2 

Data: 
Input > string > converted to array > each string element gets passed to helperfunctin > gets converted to array > returned as string 
Ouput: Mutated array > converted into string and returned 

A: Find every third word in a string and convert every second character of that word to uppercase. 

ITERATE over each word of array version of input sentence
MUTATE every third word 
  > IF index+1 is evenly divisible by 3
  > return toUpperCase(word)
  > ELSE 
  > return word
RETURN stringified version of mutated array

helperfunction toUpperCase(word)
ITERATE over each character of array version of input word
MUTATE every second character
  > IF index+1 is evenly divisible by 2
  > return character to uppercase
  > ELSE 
  > return character
RETURN stringified version of mutated word
*/

let p = console.log; 

function toWeirdCase (sentence) {
 return sentence.split(" ").map((word, idx) => {
    return (idx + 1) % 3 === 0 ? toUpperCase(word) : word
}).join(' ')
}

function toUpperCase (word) {
  return word.split("").map((char, idx) => {
    return (idx + 1) % 2 === 0 ? char.toUpperCase() : char;
}).join('');
}

let original = 'Lorem Ipsum is simply dummy text of the printing world';
let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
p(toWeirdCase(original) === expected);

original = 'It is a long established fact that a reader will be distracted';
expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
p(toWeirdCase(original) === expected);

p(toWeirdCase('aaA bB c') === 'aaA bB c');

original = "Mary Poppins' favorite word is " +
           "supercalifragilisticexpialidocious";
expected = "Mary Poppins' fAvOrItE word is " +
           "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
p(toWeirdCase(original) === expected);