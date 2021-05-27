function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx]);
}
// const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx]);

function advancedFilter(arr) {
  return arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10);
}

// const advancedFilter = (arr) => arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10);