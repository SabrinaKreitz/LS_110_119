let p = console.log;

/*
Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

*/

function wordSizes (sentence) {
  let count = {};
  let arrayOfWords = sentence.split(' '); 
  if (arrayOfWords[0].length === 0) return count;

  arrayOfWords.forEach (word => {
    let length = word.length
    if(!count.hasOwnProperty(length)) {
      count[length] = 1;
    } else {
      count[length] += 1
    }
  })
  return count;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
p(wordSizes(''));                                            // {}