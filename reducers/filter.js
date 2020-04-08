const arrToFilter = [1, 1, 3, 19, 2, 7, 3, 28, 5, 6];

const filter = (arr, fn) => {
  return arr.reduce((acc, elem) => {
    fn(elem) ? [...acc, elem] : acc
  }, []);
};

console.log(filter(arrToFilter, (elem) => elem > 3));
