

```javascript

function solution(n, edge) {

    const graph = [];
    const distance = {};
    const queue = [1];
    for(let i = 1; i <= n; i++) {
        graph[i] = [];
        distance[i] = 0;
    }
    
    edge.forEach(([src, dest]) => {
        graph[src].push(dest);
        graph[dest].push(src);
    });
    
    distance[1] = 1;
    
    while(queue.length > 0) {
        const src = queue.shift();
        for(const dest of graph[src]) {
            if(distance[dest] === 0) {
                console.log(dest)
                queue.push(dest);
                distance[dest] = 1;
            }
        }
    }
}

const edge = 	[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];
const n = 6;

solution(n, edge);
```
