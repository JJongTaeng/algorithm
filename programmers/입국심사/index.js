function solution(n, times) {
  let minMinute = 1; // 최소시간
  let maxMinute = times.sort((a, b) => a - b)[0] * n; // 최대로 걸릴 수 있는 시간
  let middleMinute = Math.floor((minMinute + maxMinute) / 2); // 중간 시간
  while(minMinute <= maxMinute) {
    let sum = times.reduce((acc, curr) => acc + (Math.floor(middleMinute / curr)), 0);

    if(sum < n) {
      minMinute = middleMinute + 1;
    } else {
      maxMinute = middleMinute - 1;
    }

    middleMinute = Math.floor((minMinute + maxMinute) / 2);
  }

  return minMinute; // 입국자 모두 심사하는 최소시간 리턴
}
