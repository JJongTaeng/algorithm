function answer(...rest) {
  let list = []
  rest.forEach((value) => {
    value % 2 && list.push(value);
  })
  let sum = list.reduce((prev, current) => {
    return prev + current;
  }, 0);

  let min = Math.min(...list);

  return { sum, min }
}

console.log(answer(12, 77, 38, 41, 53, 92, 85))

