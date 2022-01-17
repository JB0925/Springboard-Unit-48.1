// add whatever parameters you deem necessary
function separatePositive(arrayOfNumbers) {
  let i = 0;
  while (i < arrayOfNumbers.length) {
    let number = arrayOfNumbers[i];

    if (number > 0) {
      let value = arrayOfNumbers.splice(i, 1);
      arrayOfNumbers.unshift(value.pop());
    }
    i++;
  }

  return arrayOfNumbers;
}

module.exports = separatePositive;
