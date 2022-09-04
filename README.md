# Algoritm

## Programmers


|  #  |  ☆  | Problem                                      | Note |
| :-: | :-: | :------------------------------------------- | :--- |
| 01  |     | [수박수박수박수박수](./programmers/수박/README.md)     |      |
| 02  |     | [올바른괄호](./programmers/올바른괄호/README.md)   |      |
| 02  |     | [제일작은수제거하기](./programmers/제일작은수제거하기/README.md)   |      |


## Data Structure

### Heap(힙)

- FIFO 큐와 달리 우선순위가 높은 요소가 먼저 나가는 큐
- 우선순위 큐는 자료구조가 아닌 개념
- 이진 트리 형태를 가지며 우선순위가 높은 요소가 먼저 나가기 위해 요소가 삽입, 삭제 될 때 정렬이 되는 특성이 있음

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
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1; // 추가된 정점의 배열 인덱스
    let parentIndex = Math.floor(currentIndex / 2); // 부모 정점의 배열 인덱스

    while(parentIndex !== 0 && this.heap[parentIndex] < value) { // 부모 정점이 더 작으면 반복
      const temp = this.heap[parentIndex];

      this.heap[parentIndex] = value; // 부모와
      this.heap[currentIndex] = temp; // 자식의 위치를 바꾸고

      currentIndex = parentIndex; // 현재 인덱스와 부모 인덱스를 바꿈
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1]; // 임시로 루트 정점(상수) 저장
    this.heap[1] = this.heap.pop(); // 마지막 요소를 루트의 요소와 변경

    let currentIndex = 1;
    let leftIndex = 2; // 루트 이진 트리 좌측 자식 정점 인덱스
    let rightIndex = 3; // 루트 이진 트리 우측 자식 정점 인덱스

    while( // 부모정점이 하위 정점보다 우선 순위가 낮을 때 반복 
    this.heap[currentIndex] < this.heap[leftIndex] ||
    this.heap[currentIndex] < this.heap[rightIndex]
      ) {
      if(this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex; // 인덱스 교환
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}
```

### Linked List

#### 배열 특징
- 배열은 추가와 삭제에 시간복잡도가 O(n) 선형 시간만큼 소요
- 추가와 삭제가 반복되는 로직이라면 배열은 권장되지 않음
- 배열은 탐색이 많은 경우 유리한 자료구조
#### 연결리스트 특징
- 메모리가 허용하는 한 요소를 제한 없이 추가할 수 있음
- 탐색은 O(n) 선형 시간 만큼 소요
- 요소를 추가하거나 제거할 때는 O(1) 상수 시간이 소요됨
배열과는 정 반대
#### 연결리스트 종류
- 단일 연결 리스트(Singly Linked List)
- 이중 연결 리스트(Doubly Linked List)
- 다중 연결 리스트(Multiply Linked List)
- 원형 연결 리스트(Circular Linked List)

#### 구현
```typescript
class _Node {
    value: any;
    next?: _Node;
    constructor(value: any) {
        this.value = value;
    }
}

class SinglyLinkedList {
    head?: _Node;
    tail?: _Node;
    constructor() {
    }

    find(value: any) {
        let currNode = this.head;
        
        while(currNode?.value !== value) {
            if(!currNode?.next) {
                return;
            }
            currNode = currNode?.next;
        }
        return currNode;
    }

    append(newValue: any) {
        const newNode = new _Node(newValue);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if(this.tail) {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }
    }

    insert(node: _Node, newValue: any) {
        const newNode = new _Node(newValue);
        newNode.next = node.next;
        node.next = newNode;
    }

    remove(value: any) {
        if(this.head?.value === value) {
            this.head = this.head?.next;
        } else {
            let prevNode = this.head;
            while(prevNode?.next?.value !== value) {
                prevNode = prevNode?.next;
            }

            if(prevNode?.next) {
                prevNode.next = prevNode?.next?.next;
            }
        }
    }
}

const list = new SinglyLinkedList();

list.append(10);

list.append(11);
list.append(12);

list.remove(12);
console.log(list)
console.log(list.find(11));
```

### Queue

#### 큐(Queue)
- first in first out
- 선형 자료구조
- Linear Queue, Circular Queue가 있음

#### 구현(Array 사용)
- 배열을 사용해서 구현하면, 빈 인덱스가 생기고, index를 당기기 위해서는 선형 시간만큼이 소요되기 때문에 index를 당기기 위해서는 연결리스트로 구현해야함.

```javascript
class Queue {
    queue: any[] = [];
    front: number = 0;
    rear: number = 0;

    constructor() {

    }
    enqueue(value: any) {
        this.queue[this.rear++] = value;
    }

    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }

    peek() {
        return this.queue[this.front];
    }

    size() {
        return this.rear - this.front;
    }
}

```

#### 구현(연결리스트)
```javascript
class _Node {
    value: any;
    next?: _Node;
    constructor(value: any) {
        this.value = value;
    }
}

class Queue {
    head?: _Node;
    tail?: _Node;
    size: number = 0;
    constructor() {

    }
    
    enqueue(newValue: any) {
        const newNode = new _Node(newValue);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if(this.tail) {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }
        this.size += 1;
    }

    dequeue() {
        const value = this.head?.value;
        this.head = this.head?.next;
        this.size -= 1;
        return value;
    }

    peek() {
        return this.head?.value;
    }
}
```

#### shift 함수로 구현한 큐
- JS shift 함수를 사용하여 큐를 구현하는 것은 시간복잡도가 실제 큐와 다름
- shift는 선형시간 만큼 시간이 들기 때문에 큐를 구현할 때 shift를 사용하기 보단 큐를 구현해서 사용하는 것이 좋음


### 트라이
문자열을 저장하고 효율적으로 탐색하기 위한 트리 형태의 자료구조

#### 특징
- 검색어 자동완성, 사전 찾기 등에 응용될 수 있다.
- 문자열을 탐색할 때 단순하게 비교하는 것보다 효율적으로 찾을 수 있다.
- L이 문자열의 길이일 때, 삽입은 O(L) 선형시간 만큼 걸린다.
- 대신 각 정점이 자식에 대한 링크를 전부 가지고 있기에 저장 공간을 더 많이 사용한다.
- 
#### 구조
- 루트는 비어있다.
- 각 간선(링크)은 추가될 문자를 키로 가진다.
- 각 정점은 이전 정점의 값 + 간선의 키값으로 가진다.
- 해시테이블과 연결리스트를 이용하여 구현할 수 있다.

#### 구현
```javascript
class _Node {
  constructor(value = '') {
    this.children = new Map();
    this.value = value;
  }
}

class Trie {
  constructor() {
    this.root = new _Node();
  }

  insert(str) {
    let currentNode = this.root;

    for(const char of str) {
      if(!currentNode.children.has(char)) {
        currentNode.children.set(
          char,
          new _Node(currentNode.value + char)
        )
      }
      
      currentNode = currentNode.children.get(char);
    }
  }

  has(str) {
    let currentNode = this.root;

    for(const char of str) {
      if(!currentNode.children.has(char)) {
        return false;
      }

      currentNode = currentNode.children.get(char);
    }

    return true;
  }
}

```