[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42883)

```javascript
function solution(number, k) {
    let answer = '';
    let removedCount = 0;
    const stack = [];
    
    for(const item of number) {
        while(removedCount < k && stack[stack.length - 1] < item) {
            stack.pop();
            removedCount++;
        }
        
        stack.push(item);
    }
    
    while(removedCount < k) {
        stack.pop();
        removedCount++;
    }
    
    return stack.join('');
}
```