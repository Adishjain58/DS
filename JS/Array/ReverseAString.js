// Always put validations to make sure that we receive the right data
const reverseStringUsingreverseMethodNaive = (str) => {
  return str
    .split(" ")
    .map((val) => val.split("").reverse().join(""))
    .reverse()
    .join(" ");
};

const reverseStringUsingreverseMethodOptimized = (str) =>
  str.split("").reverse().join("");

const reverseStringNaive = (str) => {
  let wordsArray = str.split(" ");
  let reverseWordsArray = [];
  let finalArray = [];
  for (let i = 0; i < wordsArray.length; i++) {
    let wordArray = wordsArray[i].split("");
    let reverseWordArray = [];
    for (let j = wordArray.length - 1; j >= 0; j--) {
      reverseWordArray.push(wordArray[j]);
    }
    reverseWordsArray.push(reverseWordArray.join(""));
  }
  for (let i = reverseWordsArray.length - 1; i >= 0; i--) {
    finalArray.push(reverseWordsArray[i]);
  }
  return finalArray.join(" ");
};

const reverseStringOptimized = (str) => {
  let reverseArray = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reverseArray.push(str[i]);
  }
  return reverseArray.join("");
};

console.log(reverseStringUsingreverseMethodOptimized("Hi, How are you"));
console.log(reverseStringOptimized("Hi, How are you"));
console.log(reverseStringUsingreverseMethodNaive("Hi, How are you"));
console.log(reverseStringNaive("Hi, How are you"));
