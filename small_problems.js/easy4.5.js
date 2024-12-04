let p = console.log;

/*
Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

*/

function runningTotal (numbers) {
  let runningTot = [];
  numbers.forEach((_, idx) => {
    let sum = numbers.slice(0, idx + 1).reduce((acc, current) => acc + current);
    runningTot.push(sum);
  })
  return runningTot;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []