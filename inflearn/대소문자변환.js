function solution(str) {
  const list = []
  for (const x of str) {
    if (x === x.toUpperCase()) {
      list.push(x.toLowerCase());
    } else {
      list.push(x.toUpperCase());
    }
  }

  return list.join('');
}

console.log(solution('StuDY'));