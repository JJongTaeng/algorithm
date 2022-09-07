# Linked List

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


[🏠 홈으로](/README.md) 
