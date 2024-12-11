let p = console.log;

/*

A p(triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid p(triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the p(triangle is invalid.

Write a function that takes the lengths of the three sides of a p(triangle as arguments and returns one of the following four strings representing the p(triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

Rules: 
- Equilateral: l1 = l2 = l3
- Isosceles: l1 = l2 != l3 || l1 != l2 = l3 || l1 = l3 != l2
- Scalene : l1 != l2 != l3 != l1
- Invalid: [l1, l2, l3] > when sorted ascended >  if [l1 + l2] is smaller than [l3] OR one of [l1, l2, l3] === 0
- Numbers can have decimals 

D: 
Input: Number > l1, l2, l3
Intermediate: Array > sort length or sides > check if one of the sides is zero 
Output: string 

A: Compare the length of the sides of a triangle. Return a string based on the result of the comparison. 

CREATE the variable `sides` and set it to an array containing the three input arguments as numbers in ascended order 

IF one of the elements in `sides` is zero OR the 0-indexed and 1st-indexed elements of  `sides` added are smaller than the 2nd-indexed element 
  RETURN `INVALID` 
IF all elements in the `sides` are the same 
  RETURN the string `Equilateral`
IF two of the elements in `sides` are the same
  RETURN the string `Isosceles`
ELSE none of the elements in `sides` are the same 
  RETURN `Scalene` 

*/

function triangle (l1, l2, l3) {
  let sides = [l1, l2, l3].sort((a, b) => a-b);

  let sumOfSmallSides = sides[0] + sides [1]

  if(sides.includes(0) || sumOfSmallSides < sides[2]) return `invalid`;
  if(sides.every(side => side === sides[0])) return `equilateral`;
  if(sides.slice(1).includes(sides[0]) || sides.slice(0,2).includes(sides[2])) return `isosceles`

  return `scalene`
 
}


p(triangle(3, 3, 3));        // "equilateral"
p(triangle(3, 3, 1.5));      // "isosceles"
p(triangle(3, 4, 5));        // "scalene"
p(triangle(0, 3, 3));        // "invalid"
p(triangle(3, 1, 1));        // "invalid"

//note for next time: target solution: 

function triangle(n1, n2, n3) {
  let [small, med, large] = [n1, n2, n3].sort((a, b) => a - b);

  if (small <= 0 || small + med <= large) return 'invalid';
  if (small === med && med === large) return 'equilateral';
  if (small === med || med === large) return 'isoceles';
  else return 'scalene';
}