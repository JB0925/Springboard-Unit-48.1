// add whatever parameters you deem necessary
function createLetterCounter(groupOfLetters) {
  let letterCounter = {};
  for (let letter of groupOfLetters) {
    letterCounter[letter] = letterCounter[letter] + 1 || 1;
  }

  return letterCounter;
}

function isSubsequence(s1, s2) {
  if (s1.length > s2.length) return false;

  let s1Counter = createLetterCounter(s1);
  let s2Counter = createLetterCounter(s2);
  let correctOrder = "";
  let j = 0;

  for (let ltr in s1Counter) {
    if (!s2Counter[ltr]) return false;
  }

  for (let i = 0; i < s2.length; i++) {
    if (s1Counter[s2[i]] && s1[j] === s2[i]) {
      correctOrder += s2[i];
      j++;
    }
    if (s1 === correctOrder) return true;
  }

  return s1 === correctOrder;
}
console.log(isSubsequence("almost", "almossssss"));
module.exports = isSubsequence;
