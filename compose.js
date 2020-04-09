const compose = (...args) => {
  return (arr) =>
    args.reduce((acc, item) => {
      return acc.reduce((acc,elem)=>{ return [...acc,item(elem)]; },[])
    },[...arr]);
};
console.log(
  compose(
    (x) => x * 2,
    (x) => x * 3
  )([1, 2, 3])
);
