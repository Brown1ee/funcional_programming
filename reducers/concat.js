const array1 = ["a", "b", "c"];
const array2 = ["dsf", "sd"];

let concat = (...args) => {
  return args.reduce((total, amount) => {
    if (typeof amount == "object") {
      total = [...total, ...amount];
    } else {
      total[total.length] = amount;
    }

    return total;
  }, []);
};

console.log(concat(array1, array2));
