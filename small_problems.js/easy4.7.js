let p = console.log;

/*
Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

*/

function wordSizes (sentence) {
  let count = {};
  let arrayOfWords = sentence.split(' '); 
  if (arrayOfWords[0].length === 0) return count;

  arrayOfWords.forEach (word => {
    let cleanedWord = onlyLetters(word);
    let length = cleanedWord.length
    if(!count.hasOwnProperty(length)) {
      count[length] = 1;
    } else {
      count[length] += 1
    }
  })
  return count;
}

/*
Remove special characters from string
*/

function onlyLetters (word) {
  let letters = "";
  for(let char of word) {
    if(char >= 'a' && char <= 'z') {
      letters += char
    }
  }
  return letters
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}