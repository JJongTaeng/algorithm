function solution(arr) {

  let min = Math.min(...arr);

  var answer = arr.filter(num => num !== min);
  return answer.length ? answer : [-1];
}