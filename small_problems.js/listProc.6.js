let p = console.log;

/*
Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

*/

function substrings (string) {
  let subs = [];
  let stringToArray = string.split(' ');

  stringToArray.forEach(word => {
    for(let idx1= 0; idx1 < word.length; idx1 ++) {
      for(let idx2 = idx1 + 2 ; idx2 <= word.length; idx2 ++) {
        subs.push(word.substring(idx1, idx2));
      }
    }
  })
  return subs;
}


function isPalindrome (subs) {
  let reversed = subs.split('').reverse().join('')
  return reversed === subs ? true : false;
}

function palindromes (string) {
  let substring = substrings(string)
  let palindrome = substring.filter(sub => isPalindrome(sub))
  return palindrome;
}


palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

p(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]




