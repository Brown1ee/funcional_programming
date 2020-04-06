const reverseArr = [1, 2, 3, 4, 5];

const reverse = (arr) => {
  return arr.reduce((acc, elem, index, arr) => {
    acc.push(arr.length - index);
    return acc;
  }, []);
};

console.log(reverse(reverseArr));
