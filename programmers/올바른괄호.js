function solution(s){
  var answer = true;

  let right = 0;
  let left = 0;

  for(let str of s) {

    if(str === '(') left++;
    if(str === ')') right++;

    if(right > left) {
      return false
    }
  }

  if(left !== right) {
    return false;
  }

  return answer;
}