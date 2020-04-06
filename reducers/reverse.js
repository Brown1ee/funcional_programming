const reverseArr = [1, 2, 3, 4, 5];

const reverse = (arr) => {
  return arr.reduce((acc, elem, index, arr) => {
    let newArr = [...acc, arr.length - index];
    return newArr;
  }, []);
};

console.log(reverse(reverseArr));
