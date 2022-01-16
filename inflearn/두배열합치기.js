/*
오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램 을 작성하세요.

▣ 입력설명
첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다. 두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다. 네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.
▣ 출력설명

오름차순으로 정렬된 배열을 출력합니다.
 */

function solution (arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;

  let p1 = p2 = 0;

  while (p1 < n && p2 < m) {
    if(arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
    } else {
      answer.push(arr2[p2]);
      p2++;
    }
  }

  while(p1 < n) {
    answer.push(arr1[p1++]);
  }
  while(p2 < m) {
    answer.push(arr2[p2++]);
  }

  console.log(answer);
}

function makeArr(count) {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(Math.floor(Math.random() * 100))
  }
  return arr;
}

let startTime = new Date();
solution(makeArr(10), makeArr(20));

console.log('동작 시간 : ', (new Date() - startTime), 'ms');
