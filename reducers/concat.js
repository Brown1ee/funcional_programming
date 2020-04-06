const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

let concat = (arr1, arr2) => {
  return arr2.reduce(
    (total, amount) => {
      total.push(amount);
      return total;
    },
    [...arr1]
  );
};

console.log(concat(array1, array2));
