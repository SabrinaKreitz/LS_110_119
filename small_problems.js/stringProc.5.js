let p = console.log;

/*
Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.
*/

function swapCase (string) {
  let swapped = '';
  for (let char of string) {
    if(char === char.toLowerCase()) {
      swapped += char.toUpperCase();
    } else {
      swapped += char.toLowerCase();
    }
  }
  return swapped;
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"