// const checkForSpam = function (message) {
//   let words = message.toLowerCase().split(" ");
//   console.log(words);
//   for (const word of words) {
//     if (word.includes("spam") || word.includes("sale")) {
//       words = true;
//       break;
//     } else words = false;
//   }
//   return words;
// };

const checkForSpam = function (message) {
    let words = message.toLowerCase()
    return words.includes("spam") || words.includes("sale") ? true : false;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

