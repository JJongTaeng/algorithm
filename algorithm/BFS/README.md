- 너비 우선 탐색 (BFS)
- 그래프 탐색 알고리즘
- 같은 깊이의 정점부터 탐색하는 알고리즘

```javascript

function solution(n, edge) {

  const graph = [];
  const visited = [];
  const queue = [1];
  for(let i = 1; i <= n; i++) {
    graph[i] = [];
    visited[i] = 0;
  }

  edge.forEach(([src, dest]) => {
    graph[src].push(dest);
    graph[dest].push(src);
  });


  visited[1] = 1;

  while(queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for(const next of graph[current]) {
      if(visited[next] === 0) {
        queue.push(next);
        visited[next] = 1;
      }
    }
  }
}


const edge = 	[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];
const n = 6;

solution(n, edge);
```
