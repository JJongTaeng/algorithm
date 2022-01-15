function solution(str, c) {
  const regexp = new RegExp(c, 'g');
  const list = str.match(regexp);

  return list.length;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'));