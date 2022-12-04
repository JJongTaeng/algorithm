- 그래프 탐색 알고리즘으로 최대한 깊은 정점부터 탐색하는 알고리즘
- Stack을 이용해서 구현할 수 있음.
- 시작 정점에서 깊은 것 부터 찾는다.
- V가 정점의 수 E가 간선의 수일 때 DFS의 시간복잡도는 O(V+E)

```javascript

function solution(n, edge) {

  const graph = [];
  const visited = [];
  const stack = [1];
  for(let i = 1; i <= n; i++) {
    graph[i] = [];
    visited[i] = 0;
  }

  edge.forEach(([src, dest]) => {
    graph[src].push(dest);
    graph[dest].push(src);
  });


  visited[1] = 1;

  while(stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    for(const next of graph[current]) {
      if(visited[next] === 0) {
        stack.push(next);
        visited[next] = 1;
      }
    }
  }
}


const edge = 	[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];
const n = 6;

solution(n, edge);
```
