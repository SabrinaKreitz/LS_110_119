function isPalindrome(string) {
  let stringOriginal = string;
  let stringReversed = "";

  stringReversed = stringOriginal.split("").reverse().join("");
  
  return stringOriginal === stringReversed;
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

sring.split(" ")