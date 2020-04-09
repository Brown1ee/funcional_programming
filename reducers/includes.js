const arrIncludes = [1, 3, 3];

const includes = (arr, val) => {
  return arr.reduce((acc, item) => {
    return item === val ? true : acc;
  }, false);
};

console.log(includes(arrIncludes, 2));
