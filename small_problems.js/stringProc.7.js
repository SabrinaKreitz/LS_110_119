let p = console.log;

/*
Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

*/
function staggeredCase (string) {
  let staggered = ''
  let count = 0;

 for(let idx = 0; idx < string.length; idx ++) {
  if(!(string[idx].toLowerCase() >= 'a' && string[idx].toLowerCase() <= 'z' )) {
    staggered += string[idx];
  } else if (count % 2 === 0) {
    staggered += string[idx].toUpperCase();
    count ++;
  } else {
    staggered += string[idx].toLowerCase();
    count ++;
  }
 }
 return staggered;
}



console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);