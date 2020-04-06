const arrEvery = [3, 2, 3];

const every = (arrEvery, fn) => {
  return arrEvery.reduce((acc, elem) => {
    return fn(elem) ? acc : false;
  }, true);
};

console.log(every(arrEvery, (i) => i < 4));
