let p = console.log;
/*
Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.
*/

function reverseWords (sentence) {
  let array = sentence.split(' ');
  let reversedArray = array.map(word => {
    if(word.length >= 5) {
    return word.split('').reverse().join('')
    } else {
      return word;
    }
  });
  return reversedArray.join(' ');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"