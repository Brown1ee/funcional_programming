const compose = (...args) => {
  return (arr) => {
    args.map((fn) => {
      arr = arr.map((item) => fn(item));
    });
    return arr;
  };
};
console.log(
  compose(
    (x) => x * 2,
    (x) => x * 3
  )([1, 2, 3])
);
