/* time: 33
Object Manipulation:
Write a function that takes an object and a string as arguments. The string will be a path to a property in the object, with each level separated by dots. The function should return the value of the property at the end of this path. If the path is invalid, return undefined.


Problem
Extract the alphabetic chars from string and consecutively access their property in object 

Create currentValue variable and set to input obj
Iterate through input string 
If char is alphabetic 
  If char exists in currentValue as a property
    set currentValue to currentValue[char]
  Else return undefined 
Return currentValue
*/

let obj = {
  a: {
    b: {
      c: 42
    }
  },
  x: {
    y: 'z'
  }
};

function getNestedProperty (obj, path) {
  let currentValue = obj; 

  for (let char of path) {
    if(char !== '.') {
      if(currentValue.hasOwnProperty(char) ) {
        currentValue = currentValue[char];
      } else return undefined; 
    }
  }
  return currentValue; 
}

//Rey's solution 
// function getNestedProperty(obj, path) {
//  let myObj = obj;
//  let keys = path.split('.');

//  for (let key of keys) {
//    if (myObj[key] === undefined) return undefined;

//    myObj = myObj[key];
//  }

//  return myObj;
// }

console.log(getNestedProperty(obj, 'a.b.c'));     // 42
console.log(getNestedProperty(obj, 'x.y'));       // 'z'
console.log(getNestedProperty(obj, 'a.b.d'));     // undefined
console.log(getNestedProperty(obj, 'p.q.r'));     // undefined