[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42583)

```javascript
function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    const waitQueue = new Queue();
    const crossingQueue = new Queue();
    const crossedQueue = new Queue();
    
    truck_weights.forEach(truckWeight => waitQueue.enqueue(truckWeight));
    while(crossedQueue.size != truck_weights.length) {
        const head = waitQueue.peek();
        if((crossingQueue.sum + head) <= weight) {
            const truck = waitQueue.dequeue();
            crossingQueue.enqueue(truck);
            answer++;
        } else {
            crossingQueue.enqueue(0);
            answer++;
        }
        
        if(crossingQueue.size === bridge_length) {
            const crossed = crossingQueue.dequeue();
            if(crossed) crossedQueue.enqueue(crossed);
        }
    }
    
    return answer + 1;
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.sum = 0;
    }
    
    enqueue(value) {
        const node = new Node(value);
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.sum += value;
        this.size += 1;        
    }
    
    dequeue() {
        if(this.size === 0) return;
        const value = this.head.value;
        this.head = this.head.next;
        
        this.size -= 1;
        this.sum -= value;
        return value;
    }
    
    peek() {
        if(this.size === 0) return;
        return this.head.value;
    }
    
}

```

[🏠 홈으로](/README.md) 