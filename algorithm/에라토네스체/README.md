# 에라토네스체
- 특정 수 보다 작은 모든 소수를 구하는데 가장 빠른 알고리즘

```javascript
function get_primes(num) {
  const primes = [false, false, ...Array.from({ length: num - 1 }).fill(true)];
  
  for(let i = 2; i * i < num; i++) {
    if(primes[i]) {
      for(let j = i * 2; j <= num; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes.map((prime, index) => prime && index)
    .filter(index => index);
}
```