## 트라이
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

[🏠 홈으로](/README.md) 