function answer(num) {
  let answer = 0;

  for (let i = 1; i <= num; i++) {
    answer += i;
  }
  return answer;
}

console.log(answer(10))