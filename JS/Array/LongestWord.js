/*
Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
*/

const longestWord = (str) => {
  str = str.replace(/[^a-z0-9A-Z ]/gi, "");
  let max = 0;
  let index = 0;
  str = str.split(" ");
  str.forEach((val, i) => {
    if (val.length > max) {
      max = val.length;
      index = i;
    }
    return val;
  });
  return str[index];
};

console.log(longestWord("hello!! world"));
