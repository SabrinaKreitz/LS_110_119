/* 15 minutes 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts,
pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item.
It must return the display text as shown in the examples:

Algorithm
Take the names from an array and return them into a string with a sensible organisation of the names and the right declination of the verb. 

Create variable verb
If input array is empty OR input array has 1 elements 
  Set verb to `likes` 
Else 
  Set verb to `like` 

Create variable people 
If input array has 0 elements 
  Set people to `no one` 
If input array has 1 element 
  Set people to element 
If input array has 2 elements 
  Set people to `elm1 and `elm2` 
If input array has 3 elements 
  Set people to `elm1, elm2 and elm3`
If input array has more than 3 elements 
  Set people to `elm1, elm2 and k others` > k = length of input array minus 2

Return people + verb + this 
*/

function likes (arr) {
  let verb; 
  arr.length === 0 || arr.length ===1 ? verb = 'likes' : verb = 'like'; 

  let people; 
  if (arr.length === 0) people = `no one`; 
  if (arr.length === 1) people = arr[0]; 
  if (arr.length === 2) people = `${arr[0]} and ${arr[1]} `; 
  if (arr.length === 3) people = `${arr[0]}, ${arr[1]} and ${arr[2]} `; 
  if (arr.length > 3) people = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others`; 

  return people + ` ` + verb + ` ` + `this`
}


console.log(likes([]));                              // -->  "no one likes this"
console.log(likes(["Peter"]))                        // -->  "Peter likes this"
console.log(likes(["Jacob", "Alex"]))                // -->  "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"]))          // -->  "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])) // -->  "Alex, Jacob and 2 others like this"