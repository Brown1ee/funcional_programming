const array1 = ["a", "b", "c"];
const array2 = "afgg";

let concat = (...args) => {
  return args.reduce((total, amount) => {
    if (Array.isArray(amount)) {
      return [...total, ...amount];
    } else {
      return [...total,amount]
    }
  }, []);
};

console.log(concat(array1, array2));
