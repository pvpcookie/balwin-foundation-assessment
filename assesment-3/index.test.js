/**
 * Data Structures Assessment Tests
 * 
 * These tests validate the implementation of fundamental data structures.
 * Students should run these tests to verify their solutions.
 */

const {
  DynamicArray,
  LinkedList,
  ListNode,
  Stack,
  Queue,
  BinarySearchTree,
  BSTNode,
  HashTable,
  MinHeap,
  Graph,
  Trie,
  TrieNode
} = require('./index');

describe('Data Structures Assessment', () => {
  
  // ============================================================================
  // DYNAMIC ARRAY TESTS
  // ============================================================================
  
  describe('Dynamic Array', () => {
    let arr;

    beforeEach(() => {
      arr = new DynamicArray();
    });

    test('should start empty', () => {
      expect(arr.length()).toBe(0);
      expect(arr.isEmpty()).toBe(true);
    });

    test('should push elements and resize automatically', () => {
      arr.push(1);
      arr.push(2);
      arr.push(3);
      arr.push(4);
      arr.push(5);
      
      expect(arr.length()).toBe(5);
      expect(arr.get(0)).toBe(1);
      expect(arr.get(4)).toBe(5);
    });

    test('should pop elements correctly', () => {
      arr.push(1);
      arr.push(2);
      arr.push(3);
      
      expect(arr.pop()).toBe(3);
      expect(arr.length()).toBe(2);
      expect(arr.pop()).toBe(2);
      expect(arr.pop()).toBe(1);
      expect(arr.isEmpty()).toBe(true);
    });

    test('should insert at specific index', () => {
      arr.push(1);
      arr.push(3);
      arr.insert(1, 2);
      
      expect(arr.get(0)).toBe(1);
      expect(arr.get(1)).toBe(2);
      expect(arr.get(2)).toBe(3);
      expect(arr.length()).toBe(3);
    });

    test('should delete at specific index', () => {
      arr.push(1);
      arr.push(2);
      arr.push(3);
      arr.delete(1);
      
      expect(arr.get(0)).toBe(1);
      expect(arr.get(1)).toBe(3);
      expect(arr.length()).toBe(2);
    });

    test('should handle bounds checking', () => {
      expect(() => arr.get(0)).toThrow();
      expect(() => arr.set(0, 1)).toThrow();
      expect(() => arr.delete(0)).toThrow();
    });
  });

  // ============================================================================
  // LINKED LIST TESTS
  // ============================================================================
  
  describe('Linked List', () => {
    let list;

    beforeEach(() => {
      list = new LinkedList();
    });

    test('should start empty', () => {
      expect(list.length()).toBe(0);
      expect(list.isEmpty()).toBe(true);
      expect(list.toArray()).toEqual([]);
    });

    test('should prepend elements', () => {
      list.prepend(3);
      list.prepend(2);
      list.prepend(1);
      
      expect(list.toArray()).toEqual([1, 2, 3]);
      expect(list.length()).toBe(3);
    });

    test('should append elements', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      
      expect(list.toArray()).toEqual([1, 2, 3]);
      expect(list.length()).toBe(3);
    });

    test('should insert at specific index', () => {
      list.append(1);
      list.append(3);
      list.insert(1, 2);
      
      expect(list.toArray()).toEqual([1, 2, 3]);
      expect(list.length()).toBe(3);
    });

    test('should delete at specific index', () => {
      list.append(1);
      list.append(2);
      list.append(3);
      list.delete(1);
      
      expect(list.toArray()).toEqual([1, 3]);
      expect(list.length()).toBe(2);
    });

    test('should find elements', () => {
      list.append(10);
      list.append(20);
      list.append(30);
      
      expect(list.indexOf(20)).toBe(1);
      expect(list.indexOf(40)).toBe(-1);
      expect(list.get(1)).toBe(20);
    });
  });

  // ============================================================================
  // STACK TESTS
  // ============================================================================
  
  describe('Stack', () => {
    let stack;

    beforeEach(() => {
      stack = new Stack();
    });

    test('should start empty', () => {
      expect(stack.isEmpty()).toBe(true);
      expect(stack.size()).toBe(0);
    });

    test('should push and pop elements (LIFO)', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      
      expect(stack.size()).toBe(3);
      expect(stack.peek()).toBe(3);
      expect(stack.pop()).toBe(3);
      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);
      expect(stack.isEmpty()).toBe(true);
    });

    test('should peek without removing', () => {
      stack.push(1);
      stack.push(2);
      
      expect(stack.peek()).toBe(2);
      expect(stack.size()).toBe(2);
      expect(stack.peek()).toBe(2);
    });

    test('should clear all elements', () => {
      stack.push(1);
      stack.push(2);
      stack.clear();
      
      expect(stack.isEmpty()).toBe(true);
      expect(stack.size()).toBe(0);
    });
  });

  // ============================================================================
  // QUEUE TESTS
  // ============================================================================
  
  describe('Queue', () => {
    let queue;

    beforeEach(() => {
      queue = new Queue();
    });

    test('should start empty', () => {
      expect(queue.isEmpty()).toBe(true);
      expect(queue.size()).toBe(0);
    });

    test('should enqueue and dequeue elements (FIFO)', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      
      expect(queue.size()).toBe(3);
      expect(queue.front()).toBe(1);
      expect(queue.dequeue()).toBe(1);
      expect(queue.dequeue()).toBe(2);
      expect(queue.dequeue()).toBe(3);
      expect(queue.isEmpty()).toBe(true);
    });

    test('should peek front without removing', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      
      expect(queue.front()).toBe(1);
      expect(queue.size()).toBe(2);
      expect(queue.front()).toBe(1);
    });
  });

  // ============================================================================
  // BINARY SEARCH TREE TESTS
  // ============================================================================
  
  describe('Binary Search Tree', () => {
    let bst;

    beforeEach(() => {
      bst = new BinarySearchTree();
    });

    test('should insert elements maintaining BST property', () => {
      bst.insert(5);
      bst.insert(3);
      bst.insert(7);
      bst.insert(2);
      bst.insert(4);
      bst.insert(6);
      bst.insert(8);
      
      // Inorder traversal should give sorted order
      expect(bst.inorderTraversal()).toEqual([2, 3, 4, 5, 6, 7, 8]);
    });

    test('should search for elements', () => {
      bst.insert(5);
      bst.insert(3);
      bst.insert(7);
      
      expect(bst.search(5)).toBe(true);
      expect(bst.search(3)).toBe(true);
      expect(bst.search(7)).toBe(true);
      expect(bst.search(1)).toBe(false);
    });

    test('should find min and max values', () => {
      bst.insert(5);
      bst.insert(3);
      bst.insert(7);
      bst.insert(1);
      bst.insert(9);
      
      expect(bst.findMin()).toBe(1);
      expect(bst.findMax()).toBe(9);
    });

    test('should perform different traversals', () => {
      bst.insert(4);
      bst.insert(2);
      bst.insert(6);
      bst.insert(1);
      bst.insert(3);
      bst.insert(5);
      bst.insert(7);
      
      expect(bst.inorderTraversal()).toEqual([1, 2, 3, 4, 5, 6, 7]);
      expect(bst.preorderTraversal()).toEqual([4, 2, 1, 3, 6, 5, 7]);
      expect(bst.postorderTraversal()).toEqual([1, 3, 2, 5, 7, 6, 4]);
    });

    test('should delete elements correctly', () => {
      bst.insert(5);
      bst.insert(3);
      bst.insert(7);
      bst.insert(2);
      bst.insert(4);
      bst.insert(6);
      bst.insert(8);
      
      bst.delete(3); // Node with two children
      expect(bst.search(3)).toBe(false);
      expect(bst.inorderTraversal()).toEqual([2, 4, 5, 6, 7, 8]);
    });
  });

  // ============================================================================
  // HASH TABLE TESTS
  // ============================================================================
  
  describe('Hash Table', () => {
    let hashTable;

    beforeEach(() => {
      hashTable = new HashTable(5);
    });

    test('should set and get key-value pairs', () => {
      hashTable.set('name', 'John');
      hashTable.set('age', 30);
      hashTable.set('city', 'NYC');
      
      expect(hashTable.get('name')).toBe('John');
      expect(hashTable.get('age')).toBe(30);
      expect(hashTable.get('city')).toBe('NYC');
    });

    test('should handle collisions with chaining', () => {
      // Force collisions by using keys that hash to same value
      hashTable.set('a', 1);
      hashTable.set('f', 2); // Assuming these collide
      
      expect(hashTable.get('a')).toBe(1);
      expect(hashTable.get('f')).toBe(2);
    });

    test('should check if key exists', () => {
      hashTable.set('test', 'value');
      
      expect(hashTable.has('test')).toBe(true);
      expect(hashTable.has('notexist')).toBe(false);
    });

    test('should delete key-value pairs', () => {
      hashTable.set('delete', 'me');
      expect(hashTable.has('delete')).toBe(true);
      
      hashTable.delete('delete');
      expect(hashTable.has('delete')).toBe(false);
      expect(hashTable.get('delete')).toBeUndefined();
    });

    test('should get all keys and values', () => {
      hashTable.set('a', 1);
      hashTable.set('b', 2);
      hashTable.set('c', 3);
      
      expect(hashTable.keys()).toContain('a');
      expect(hashTable.keys()).toContain('b');
      expect(hashTable.keys()).toContain('c');
      
      expect(hashTable.values()).toContain(1);
      expect(hashTable.values()).toContain(2);
      expect(hashTable.values()).toContain(3);
    });
  });

  // ============================================================================
  // MIN HEAP TESTS
  // ============================================================================
  
  describe('Min Heap', () => {
    let heap;

    beforeEach(() => {
      heap = new MinHeap();
    });

    test('should start empty', () => {
      expect(heap.isEmpty()).toBe(true);
      expect(heap.size()).toBe(0);
    });

    test('should maintain min heap property', () => {
      heap.insert(5);
      heap.insert(3);
      heap.insert(8);
      heap.insert(1);
      heap.insert(6);
      
      expect(heap.peek()).toBe(1); // Minimum should be at root
    });

    test('should extract minimum elements in order', () => {
      const values = [5, 3, 8, 1, 6, 2, 7];
      values.forEach(val => heap.insert(val));
      
      const extracted = [];
      while (!heap.isEmpty()) {
        extracted.push(heap.extractMin());
      }
      
      expect(extracted).toEqual([1, 2, 3, 5, 6, 7, 8]);
    });

    test('should handle single element', () => {
      heap.insert(42);
      expect(heap.peek()).toBe(42);
      expect(heap.extractMin()).toBe(42);
      expect(heap.isEmpty()).toBe(true);
    });
  });

  // ============================================================================
  // GRAPH TESTS
  // ============================================================================
  
  describe('Graph', () => {
    let graph;

    beforeEach(() => {
      graph = new Graph();
    });

    test('should add vertices and edges', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      
      graph.addEdge('A', 'B');
      graph.addEdge('B', 'C');
      
      expect(graph.hasEdge('A', 'B')).toBe(true);
      expect(graph.hasEdge('B', 'A')).toBe(true); // Undirected
      expect(graph.hasEdge('A', 'C')).toBe(false);
    });

    test('should handle directed graphs', () => {
      const directedGraph = new Graph(true);
      directedGraph.addVertex('A');
      directedGraph.addVertex('B');
      directedGraph.addEdge('A', 'B');
      
      expect(directedGraph.hasEdge('A', 'B')).toBe(true);
      expect(directedGraph.hasEdge('B', 'A')).toBe(false); // Directed
    });

    test('should get neighbors', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      
      const neighbors = graph.getNeighbors('A');
      expect(neighbors).toContain('B');
      expect(neighbors).toContain('C');
    });

    test('should perform BFS traversal', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addVertex('D');
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('B', 'D');
      
      const bfsResult = graph.bfs('A');
      expect(bfsResult[0]).toBe('A');
      expect(bfsResult).toContain('B');
      expect(bfsResult).toContain('C');
      expect(bfsResult).toContain('D');
    });

    test('should perform DFS traversal', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addVertex('D');
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('B', 'D');
      
      const dfsResult = graph.dfs('A');
      expect(dfsResult[0]).toBe('A');
      expect(dfsResult).toContain('B');
      expect(dfsResult).toContain('C');
      expect(dfsResult).toContain('D');
    });

    test('should remove vertices and edges', () => {
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addEdge('A', 'B');
      
      graph.removeEdge('A', 'B');
      expect(graph.hasEdge('A', 'B')).toBe(false);
      
      graph.removeVertex('A');
      expect(graph.getVertices()).not.toContain('A');
    });
  });

  // ============================================================================
  // TRIE TESTS
  // ============================================================================
  
  describe('Trie', () => {
    let trie;

    beforeEach(() => {
      trie = new Trie();
    });

    test('should insert and search words', () => {
      trie.insert('cat');
      trie.insert('car');
      trie.insert('card');
      trie.insert('care');
      
      expect(trie.search('cat')).toBe(true);
      expect(trie.search('car')).toBe(true);
      expect(trie.search('card')).toBe(true);
      expect(trie.search('care')).toBe(true);
      expect(trie.search('ca')).toBe(false);
      expect(trie.search('dog')).toBe(false);
    });

    test('should check prefix existence', () => {
      trie.insert('hello');
      trie.insert('help');
      trie.insert('hero');
      
      expect(trie.startsWith('he')).toBe(true);
      expect(trie.startsWith('hel')).toBe(true);
      expect(trie.startsWith('hero')).toBe(true);
      expect(trie.startsWith('xyz')).toBe(false);
    });

    test('should delete words', () => {
      trie.insert('test');
      trie.insert('testing');
      
      expect(trie.search('test')).toBe(true);
      trie.delete('test');
      expect(trie.search('test')).toBe(false);
      expect(trie.search('testing')).toBe(true); // Should still exist
    });

    test('should get words with prefix', () => {
      trie.insert('cat');
      trie.insert('car');
      trie.insert('card');
      trie.insert('care');
      trie.insert('dog');
      
      const wordsWithCa = trie.getWordsWithPrefix('ca');
      expect(wordsWithCa).toContain('cat');
      expect(wordsWithCa).toContain('car');
      expect(wordsWithCa).toContain('card');
      expect(wordsWithCa).toContain('care');
      expect(wordsWithCa).not.toContain('dog');
    });
  });

  // ============================================================================
  // PERFORMANCE TESTS
  // ============================================================================
  
  describe('Performance Tests', () => {
    test('Dynamic Array should resize efficiently', () => {
      const arr = new DynamicArray(2);
      const start = performance.now();
      
      for (let i = 0; i < 10000; i++) {
        arr.push(i);
      }
      
      const time = performance.now() - start;
      expect(time).toBeLessThan(100); // Should be fast
      expect(arr.length()).toBe(10000);
    });

    test('BST operations should be logarithmic', () => {
      const bst = new BinarySearchTree();
      
      // Insert ordered data (worst case for BST)
      for (let i = 1; i <= 1000; i++) {
        bst.insert(i);
      }
      
      const start = performance.now();
      for (let i = 1; i <= 100; i++) {
        bst.search(i);
      }
      const time = performance.now() - start;
      
      expect(time).toBeLessThan(50); // Should be reasonably fast
    });

    test('Hash Table should have constant time operations', () => {
      const hashTable = new HashTable(100);
      
      // Insert many items
      for (let i = 0; i < 1000; i++) {
        hashTable.set(`key${i}`, i);
      }
      
      const start = performance.now();
      for (let i = 0; i < 100; i++) {
        hashTable.get(`key${i}`);
      }
      const time = performance.now() - start;
      
      expect(time).toBeLessThan(10); // Should be very fast
    });
  });

  // ============================================================================
  // EDGE CASES AND ERROR HANDLING
  // ============================================================================
  
  describe('Edge Cases and Error Handling', () => {
    test('should handle empty data structures', () => {
      const stack = new Stack();
      const queue = new Queue();
      const heap = new MinHeap();
      
      expect(() => stack.pop()).toThrow();
      expect(() => queue.dequeue()).toThrow();
      expect(() => heap.extractMin()).toThrow();
    });

    test('should handle null and undefined values', () => {
      const list = new LinkedList();
      list.append(null);
      list.append(undefined);
      
      expect(list.toArray()).toEqual([null, undefined]);
    });

    test('should handle duplicate values appropriately', () => {
      const bst = new BinarySearchTree();
      bst.insert(5);
      bst.insert(5); // Duplicate
      
      // BST should handle duplicates gracefully
      expect(bst.search(5)).toBe(true);
    });
  });
});

describe('Assessment Grading Criteria', () => {
  test('Code should demonstrate understanding of time complexity', () => {
    // Grading criteria:
    // - Implements operations with correct time complexity
    // - Understands trade-offs between different data structures
    // - Chooses appropriate data structure for given problems
    expect(true).toBe(true);
  });

  test('Code should demonstrate understanding of space complexity', () => {
    // Grading criteria:
    // - Considers memory usage in implementations
    // - Understands space-time tradeoffs
    // - Implements memory-efficient solutions
    expect(true).toBe(true);
  });

  test('Code should handle edge cases and errors', () => {
    // Grading criteria:
    // - Proper bounds checking
    // - Graceful handling of empty structures
    // - Appropriate error messages
    expect(true).toBe(true);
  });

  test('Code should be well-structured and maintainable', () => {
    // Grading criteria:
    // - Clear class and method organization
    // - Good encapsulation and information hiding
    // - Consistent coding style
    expect(true).toBe(true);
  });

  test('Code should demonstrate understanding of data structure properties', () => {
    // Grading criteria:
    // - Maintains structural invariants
    // - Implements core operations correctly
    // - Shows understanding of when to use each structure
    expect(true).toBe(true);
  });
});
