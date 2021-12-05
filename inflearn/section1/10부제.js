function answer(date, arr) {
  let count = 0;
  arr.forEach((value) => {
    value % 10 === date && count ++;
  })

  return count;
}

console.log(answer(3, [25, 23, 11, 47, 53, 17, 33]));