const someArr = [1, 2, 3, 4, 5];

const some = (arr, fn) => {
  return arr.reduce((acc, elemt) => {
    return fn(elemt) ? true : acc;
  }, false);
};

console.log(some(someArr, (el) => el < 10));
