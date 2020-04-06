const arrToFilter = [1, 1, 3, 19, 2, 7, 3, 28, 5, 6];

const filter = (arr, fn) => {
  return arr.reduce((acc, elem) => {
    if (fn(elem)) {
      let newArr = [...acc, elem];
      return newArr;
    } else {
      return acc;
    }
  }, []);
};

console.log(filter(arrToFilter, (elem) => elem > 3));
