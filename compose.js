const compose = (...args) => {
  return (arr) => {
    let newArr = [...arr];
    args.map((fn) => {
      newArr = newArr.map((item) => fn(item));
    });
    return newArr;
  };
};
console.log(
  compose(
    (x) => x * 2,
    (x) => x * 3
  )([1, 2, 3])
);
