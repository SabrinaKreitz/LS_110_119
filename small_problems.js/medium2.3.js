let p = console.log;
/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

*/

function triangle (a1, a2, a3) {
  let angles = [a1, a2, a3];
  let sum = angles.reduce((acc, curr) => acc + curr);

  if(sum !== 180 || angles.includes(0)) return `invalid`;
  if(angles.includes(90)) return `right`;
  if(angles.every(a => a < 90)) return `acute`;

  return `obtuse`;
}

p(triangle(60, 70, 50));       // "acute"
p(triangle(30, 90, 60));       // "right"
p(triangle(120, 50, 10));      // "obtuse"
p(triangle(0, 90, 90));        // "invalid"
p(triangle(50, 50, 50));       // "invalid"