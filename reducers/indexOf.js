const arrIndexOf = [8, 2, 3, 8, 5, 7, 8, 4, 6];

const indexOf = (arr, val) => {
  return arr.reduce((acc, element, index) => {
    return element === val && acc == -1 ? index : acc;
  }, -1);
};

console.log(indexOf(arrIndexOf, 8));
