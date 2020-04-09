const array9 = [2, 4, 5, 6, 7, 8];

const find = (arr, fn) => {
  return arr.reduce((acc, item) => {
    return fn(item) && acc == undefined ? item : acc;
  }, undefined);
};

console.log(find(array9, (e) => e > 4));
