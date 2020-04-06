const mapArr = [1, 2, 3];

const map = (arr, func) => {
  return arr.reduce((acc, elem, index) => {
    acc.push(func(elem, index));
    return acc;
  }, []);
};

console.log(map(mapArr, (elem) => elem * 2));
