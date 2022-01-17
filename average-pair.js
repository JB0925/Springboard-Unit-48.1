// add whatever parameters you deem necessary
function averagePair(arrayOfNumbers, averageToFind) {
  if (!arrayOfNumbers.length) return false;

  let leftPointer = 0;
  let rightPointer = arrayOfNumbers.length - 1;

  while (leftPointer < rightPointer) {
    let startingValue = arrayOfNumbers[leftPointer];
    let endingValue = arrayOfNumbers[rightPointer];

    let averageOfBoth = (startingValue + endingValue) / 2;

    if (averageOfBoth === averageToFind) return true;
    else if (averageOfBoth < averageToFind) leftPointer++;
    else rightPointer--;
  }
  return false;
}

module.exports = averagePair;
