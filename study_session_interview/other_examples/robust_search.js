//  31 minutes - Write a function robustSearch that takes two arguments: an array of words and a query term. The function should return an array of words from the given array that match the query term. The function should be case insensitive, it should consider partial matches, and to account for keyboard typo should consider that the last two letters of the query term may have been reversed.


let p = console.log; 

function robustSearch (array, query) {
  let queryLength = query.length; 

  return array.filter(word =>  {
    for (let idx = 0 ; idx <= word.length - queryLength; idx ++) {
      let subWord = word.substring(idx, idx + queryLength).toLowerCase(); 
      let left = subWord.substring(0, queryLength - 2); 
      let right = subWord.substring(queryLength - 2); 
      let rightQuery = query.substring(queryLength - 2)

      if (left === query.substring(0, queryLength - 2) && rightQuery.includes(right[0]) && rightQuery.includes(right[1])) return word; 
    }
  })
}

// console.log(robustSearch(["develop", "develpo", "deep", "dive", "devel"], "devel")); // ["develop", "develpo", "devel"]
// console.log(robustSearch(["apple", "banAna", "cherry"], "naan")); // ["banAna"]
// console.log(robustSearch(["testing", "switch", "characters"], "testnig")); // []