// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
  if (!keys.length && !values.length) return {};

  let returnObject = {};

  for (let i = 0; i < keys.length; i++) {
    let nextValue = values[i] || null;

    returnObject[keys[i]] = nextValue;
  }

  return returnObject;
}

module.exports = twoArrayObject;
