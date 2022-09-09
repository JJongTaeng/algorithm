# Heap(힙)

- FIFO 큐와 달리 우선순위가 높은 요소가 먼저 나가는 큐
- 우선순위 큐는 자료구조가 아닌 개념
- **이진 트리 형태**를 가지며 우선순위가 높은 요소가 먼저 나가기 위해 요소가 삽입, 삭제 될 때 정렬이 되는 특성이 있음

- 우선순위 큐와 힙은 같은 것이 아님.
- 우선순위 큐를 배열로도 구현할 수 있음
- 힙은 이진트리 형태로 구현된 우선순위 큐

#### 힙의 특징
1. 우선순위가 높은 요소가 먼저나가는 특징을 갖음
2. 루트가 가장 큰 값이 되는 최대 힙과 루트가 가장 작은 값이 되는 최소 힙이 있음
3. 자바스크립트에서 사용하기 위해선 직접 구현해야함
#### 힙 요소 추가 알고리즘
1. 요소가 추가될 때는 트리의 가장 마지막에 정점에 위치
2. 추가 후 부모 정점보다 우선순위가 높다면 부모 정점과 순서를 바꿈
3. 이 과정을 반복하면 결국 가장 우선순위가 높은 정점이 루트가 됨
4. 완전 이진 트리의 높이는 logN 이므로 힙의 요소 추가 알고리즘은 O(logN) 로그시간의 시간 복잡도를 갖는다.
#### 힙 요소 제거 알고리즘
1. 요소 제거는 루트 정정만 가능
2. 루트 정점이 제거된 후 가장 마지막 정점이 루트에 위치
3. 루트 정점의 두 자식 정점 중 더 우선순위가 높은 정점과 교체
4. 두 자식 정점이 우선순위가 더 낮을 때 까지 반복
5. 완전 이진 트리의 높이는 logN이기에 힙의 요소 제거 알고리즘의 시간복잡도는 O(logN) 로그 시간을 갖는다.

```javascript
class MaxHeap {
  constructor() {
    this.heap = [null];
    this.size = 0;
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while(parentIndex !== 0 && this.heap[parentIndex] < value) {
      const parentValue = this.heap[parentIndex];
      this.heap[parentIndex] = this.heap[currentIndex];
      this.heap[currentIndex] = parentValue;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
    this.size += 1;
  }

  pop() {
    if(this.heap.length === 1) {
      return;
    } else if(this.heap.length === 2) {
      this.size -= 1;
      return this.heap.pop();
    }
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while(
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
      ) {
      if(this.heap[leftIndex] < this.heap[rightIndex]) {
        const rightValue = this.heap[rightIndex];
        this.heap[rightIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = rightValue;

        currentIndex = rightIndex;
      } else {
        const leftValue = this.heap[leftIndex];
        this.heap[leftIndex] = this.heap[currentIndex];
        this.heap[currentIndex] = leftValue;

        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightnIndex = currentIndex * 2 + 1;
    }
    this.size -= 1;
    return returnValue;
  }

  isEmpty() {
    return this.size === 0;
  }
}
```

[🏠 홈으로](/README.md) 
