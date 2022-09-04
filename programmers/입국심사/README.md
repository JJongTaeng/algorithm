[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/43238)

```javascript
function solution(n, times) {
    let minMinute = 1;
    let maxMinute = times.sort((a, b) => a - b)[0] * n;
    let middleMinute = Math.floor((minMinute + maxMinute) / 2);
    while(minMinute <= maxMinute) {
        let sum = times.reduce((acc, curr) => acc + (Math.floor(middleMinute / curr)), 0);
        
        if(sum < n) {
            minMinute = middleMinute + 1;
        } else {
            maxMinute = middleMinute - 1;
        }
        
        middleMinute = Math.floor((minMinute + maxMinute) / 2);
    }
    
    return minMinute;
}
```
