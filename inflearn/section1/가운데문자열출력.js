function solution(str) {
  let answer;
  let index = str.length / 2
  if (str.length % 2 === 0) {
    answer = str.substring(index - 1, index + 1);
  } else {
    answer = str.substring(Math.floor(index), index + 1);
  }

  return answer;
}

console.log(solution('goaod'));