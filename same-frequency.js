// add whatever parameters you deem necessary
function createCounter(number) {
  let stringNumber = number.toString();
  let numberCounter = {};

  for (let number of stringNumber) {
    numberCounter[number] = numberCounter[number] + 1 || 1;
  }

  return numberCounter;
}

function sameFrequency(firstNumber, secondNumber) {
  let firstNumberCounter = createCounter(firstNumber);
  let secondNumberCounter = createCounter(secondNumber);

  for (let number in firstNumberCounter) {
    if (!secondNumberCounter[number]) return false;
    if (firstNumberCounter[number] !== secondNumberCounter[number])
      return false;
  }

  return true;
}

module.exports = sameFrequency;
