function solution(str) {
  const list = [];

  for (const x of str) {
    list.push(x.toUpperCase())
  }

  return list.join('');
}

console.log(solution('ItisTimeToStudy'));