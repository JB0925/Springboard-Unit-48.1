// add whatever parameters you deem necessary
function countPairs(arr, k) {
  let seen = new Set();
  let total = 0;

  for (let number of arr) {
    let target = k - number;
    if (!seen.has(target)) {
      seen.add(number);
    } else {
      total++;
    }
  }

  return total;
}

module.exports = countPairs;
