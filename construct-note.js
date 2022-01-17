// add whatever parameters you deem necessary
function createLetterCounter(groupOfLetters) {
  let letterCounter = {};
  for (let letter of groupOfLetters) {
    letterCounter[letter] = letterCounter[letter] + 1 || 1;
  }

  return letterCounter;
}
function constructNote(message, characters) {
  let letterCounter = createLetterCounter(characters);
  for (let letter of message) {
    if (!letterCounter[letter]) {
      return false;
    }

    letterCounter[letter]--;
  }

  return true;
}

console.log(constructNote("abcd", ""));
console.log(constructNote("", "abc"));
console.log(constructNote("aa", "abcd"));
console.log(
  constructNote("skbjjjvnnd", "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd")
);
console.log(constructNote("abc", "abcd"));
module.exports = constructNote;
