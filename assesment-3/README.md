# Data Structures Assessment

## Overview
This assessment evaluates understanding of fundamental data structures and their implementations:

- **Linear Structures** - Dynamic Array, Linked List, Stack, Queue
- **Tree Structures** - Binary Search Tree, Heap, Trie
- **Hash-based Structures** - Hash Table
- **Graph Structures** - Graph with BFS/DFS

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run tests to see which data structures need implementation:
   ```bash
   npm test
   ```

3. Implement the data structures in `index.js`

4. Run tests again to verify your solutions

## Data Structure Categories

### 1. Dynamic Array
Implement a resizable array similar to JavaScript's Array:

**Key Operations:**
- `push(element)` - Add to end
- `pop()` - Remove from end  
- `get(index)` - Access by index
- `set(index, element)` - Update by index
- `insert(index, element)` - Insert at position
- `delete(index)` - Remove at position

**Time Complexities:**
- Access: O(1)
- Push/Pop: O(1) amortized
- Insert/Delete: O(n)

### 2. Linked List
Implement singly linked list with nodes:

**Key Operations:**
- `prepend(data)` - Add to beginning
- `append(data)` - Add to end
- `insert(index, data)` - Insert at position
- `delete(index)` - Remove at position
- `indexOf(data)` - Find element
- `get(index)` - Access by index

**Time Complexities:**
- Prepend: O(1)
- Append/Access: O(n)
- Insert/Delete: O(n)

### 3. Stack (LIFO - Last In, First Out)
Implement stack operations:

**Key Operations:**
- `push(element)` - Add to top
- `pop()` - Remove from top
- `peek()` - View top element
- `isEmpty()` - Check if empty
- `size()` - Get number of elements

**Time Complexities:**
- All operations: O(1)

### 4. Queue (FIFO - First In, First Out)
Implement queue operations:

**Key Operations:**
- `enqueue(element)` - Add to rear
- `dequeue()` - Remove from front
- `front()` - View front element
- `isEmpty()` - Check if empty
- `size()` - Get number of elements

**Time Complexities:**
- Enqueue: O(1)
- Dequeue: O(n) with array, O(1) with linked list

### 5. Binary Search Tree
Implement BST maintaining sorted order:

**Key Operations:**
- `insert(data)` - Add element
- `search(data)` - Find element
- `delete(data)` - Remove element
- `findMin()` / `findMax()` - Find extremes
- Traversals: `inorderTraversal()`, `preorderTraversal()`, `postorderTraversal()`

**Time Complexities:**
- Average case: O(log n)
- Worst case: O(n)

### 6. Hash Table
Implement hash table with collision resolution:

**Key Operations:**
- `set(key, value)` - Store key-value pair
- `get(key)` - Retrieve value
- `delete(key)` - Remove pair
- `has(key)` - Check existence
- `keys()` / `values()` - Get all keys/values

**Time Complexities:**
- Average case: O(1)
- Worst case: O(n)

### 7. Min Heap
Implement min heap (priority queue):

**Key Operations:**
- `insert(value)` - Add element
- `extractMin()` - Remove minimum
- `peek()` - View minimum
- `isEmpty()` - Check if empty
- `size()` - Get number of elements

**Time Complexities:**
- Insert/Extract: O(log n)
- Peek: O(1)

### 8. Graph
Implement graph with adjacency list:

**Key Operations:**
- `addVertex(vertex)` - Add node
- `addEdge(v1, v2)` - Connect nodes
- `removeVertex(vertex)` - Remove node
- `removeEdge(v1, v2)` - Disconnect nodes
- `bfs(start)` - Breadth-first search
- `dfs(start)` - Depth-first search

**Time Complexities:**
- Add vertex/edge: O(1)
- BFS/DFS: O(V + E)

### 9. Trie (Prefix Tree)
Implement trie for string operations:

**Key Operations:**
- `insert(word)` - Add word
- `search(word)` - Find word
- `startsWith(prefix)` - Check prefix
- `delete(word)` - Remove word
- `getWordsWithPrefix(prefix)` - Find words with prefix

**Time Complexities:**
- All operations: O(m) where m is word length

## Grading Criteria

Your implementation will be evaluated on:

1. **Correctness** (40%)
   - All operations work correctly
   - Proper handling of edge cases
   - Maintains data structure invariants

2. **Efficiency** (25%)
   - Correct time complexities
   - Appropriate space usage
   - Optimal implementations

3. **Code Quality** (25%)
   - Clean, readable code
   - Good encapsulation
   - Proper error handling

4. **Understanding** (10%)
   - Comments showing understanding
   - Knowledge of when to use each structure
   - Understanding of trade-offs

## Implementation Requirements

### Must Handle Edge Cases:
- Empty data structures
- Single element operations
- Boundary conditions (first/last elements)
- Invalid indices
- Null/undefined values
- Duplicate elements

### Memory Management:
- Efficient space usage
- Proper cleanup when removing elements
- Automatic resizing where appropriate

### Error Handling:
- Throw appropriate errors for invalid operations
- Graceful handling of edge cases
- Clear error messages

## Time Complexity Summary

| Data Structure | Access | Search | Insert | Delete |
|----------------|--------|---------|---------|---------|
| Dynamic Array | O(1) | O(n) | O(n) | O(n) |
| Linked List | O(n) | O(n) | O(n) | O(n) |
| Stack | O(1) | - | O(1) | O(1) |
| Queue | O(1) | - | O(1) | O(n)* |
| BST | O(log n) | O(log n) | O(log n) | O(log n) |
| Hash Table | - | O(1) | O(1) | O(1) |
| Min Heap | - | O(n) | O(log n) | O(log n) |
| Trie | - | O(m) | O(m) | O(m) |

*O(1) with linked list implementation

## Tips for Success

1. **Start with Simpler Structures**: Begin with Stack and Queue
2. **Test Each Method**: Implement and test one method at a time
3. **Handle Edge Cases**: Empty structures, single elements, boundaries
4. **Maintain Invariants**: Ensure data structure properties are preserved
5. **Use Helper Methods**: Break complex operations into smaller functions
6. **Consider Performance**: Choose efficient algorithms and data representations

## Common Implementation Challenges

- **Dynamic Array**: Proper resizing and copying elements
- **Linked List**: Correct pointer manipulation, especially for deletion
- **BST**: Handling three deletion cases (leaf, one child, two children)
- **Hash Table**: Good hash function and collision resolution
- **Heap**: Maintaining heap property during insert/delete
- **Graph**: Avoiding infinite loops in traversal algorithms
- **Trie**: Efficient prefix operations and cleanup

## Study Resources

- Review time and space complexity analysis
- Understand when each data structure is most appropriate
- Practice implementing without looking at solutions
- Study real-world applications of each structure
- Understand the trade-offs between different implementations

Good luck! This assessment will demonstrate your understanding of how data structures work internally and when to use each one.
