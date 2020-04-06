const arrEvery = [3, 2, 3];

const every = (arrEvery, fn) => {
  return arrEvery.reduce((acc, index) => {
    return !fn(index) ? false : acc;
  }, true);
};

console.log(every(arrEvery, (i) => i == 3));
