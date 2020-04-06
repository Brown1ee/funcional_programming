const arrayIndex = [5, 3, 4, 3, 1, 2, 7, 3, 4];

const findIndex = (arr, fn) => {
  return arr.reduce((acc, item, index) => {
    return fn(item) && acc == -1 ? index : acc;
  }, -1);
};

console.log(findIndex(arrayIndex, (item) => item > 6));
