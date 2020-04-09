const reverseArr = [1, 2, 3, 4, 5,6,7,8,9,0];

const reverse = (arr) => {
  return arr.reduce((acc, elem, index) => {
    return [...acc, arr[arr.length-index-1]];
  }, []);
};

console.log(reverse(reverseArr));