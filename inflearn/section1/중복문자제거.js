function solution(str) {
  const arr = str.split('');

  return [...new Set(arr)].join('');
}

console.log(solution('ksekkset'));
