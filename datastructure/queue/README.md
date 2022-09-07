# Queue

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
```typescript
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


[🏠 홈으로](/README.md) 