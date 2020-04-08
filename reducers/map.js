const mapArr = [1, 2, 3];

const map = (arr, func) => {
  return arr.reduce((acc, elem, index) => {
    return [...acc, func(elem, index)];
  }, []);
};

console.log(map(mapArr, (elem) => elem * 2));
