function solution(strList) {
  let longString = '';
  for (let strListElement of strList) {
    longString = longString.length < strListElement.length ? strListElement : longString;
  }

  return longString
}

console.log(solution(['5', 'teacher', 'time', 'student', 'beautiful', 'good']));