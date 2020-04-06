const mapArr = [1, 2, 3];

const map = (arr, func) => {
  return arr.reduce((acc, elem, index) => {
    let newArr = [...acc, func(elem, index)];
    return newArr;
  }, []);
};

console.log(map(mapArr, (elem) => elem * 2));
