let p = console.log

/*
Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

Rules: 
- Count occurances of strings
  - output string plus count of numbers 
- Consider case sensitivity 

A: 
Loop through collection of strings and count occurance of each string. Return name of strings and occurances. 

Create data structure to count occurances
  - Create empty object
Loop through input array
- If current element exists in object
  - Increment occurance of existing strings
- Else 
  - Add new strings to data structure and count occurance
Loop through object
- Return strings with the structure of `key => obj[key]
  
*/

function countOccurrences (listOfCars) {
  let occuranceOfCars = {};

  listOfCars.forEach(car => {
    if(occuranceOfCars.hasOwnProperty(car)) {
      occuranceOfCars[car] += 1;
    } else {
      occuranceOfCars[car] = 1;
    }
  }
  )

  for(let key in occuranceOfCars) {
    console.log(`${key} => ${occuranceOfCars[key]}`)
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1