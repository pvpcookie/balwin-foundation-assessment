/**
 * Data Structures Assessment
 * 
 * This assessment tests understanding of fundamental data structures including:
 * - Arrays and Dynamic Arrays
 * - Linked Lists
 * - Stacks and Queues
 * - Trees and Binary Search Trees
 * - Hash Tables
 * - Heaps
 * - Graphs
 * 
 * Instructions:
 * 1. Implement each data structure with all required methods
 * 2. Consider time and space complexity for each operation
 * 3. Handle edge cases appropriately
 * 4. Run tests with: npm test
 */

// ============================================================================
// DYNAMIC ARRAY
// ============================================================================

/**
 * TODO: Implement a dynamic array (similar to JavaScript Array but from scratch)
 * Should automatically resize when capacity is exceeded
 */
class DynamicArray {
  constructor(initialCapacity = 2) {
    // TODO: Initialize with fixed capacity, resize when needed
    this.data = new Array(initialCapacity);
    this.size = 0;
    this.capacity = initialCapacity;
  }

  /**
   * TODO: Add element to end of array
   * Time Complexity: O(1) amortized, O(n) worst case (when resizing)
   */
  push(element) {
    // TODO: Implement push with automatic resizing
  }

  /**
   * TODO: Remove and return last element
   * Time Complexity: O(1)
   */
  pop() {
    // TODO: Implement pop with bounds checking
  }

  /**
   * TODO: Get element at index
   * Time Complexity: O(1)
   */
  get(index) {
    // TODO: Implement get with bounds checking
  }

  /**
   * TODO: Set element at index
   * Time Complexity: O(1)
   */
  set(index, element) {
    // TODO: Implement set with bounds checking
  }

  /**
   * TODO: Insert element at specific index
   * Time Complexity: O(n)
   */
  insert(index, element) {
    // TODO: Implement insert with shifting elements
  }

  /**
   * TODO: Remove element at specific index
   * Time Complexity: O(n)
   */
  delete(index) {
    // TODO: Implement delete with shifting elements
  }

  /**
   * TODO: Get current size
   */
  length() {
    return this.size;
  }

  /**
   * TODO: Check if array is empty
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * TODO: Resize internal array when needed
   */
  _resize() {
    // TODO: Double capacity and copy elements
  }
}

// ============================================================================
// LINKED LIST
// ============================================================================

/**
 * Node class for linked list
 */
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * TODO: Implement singly linked list
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * TODO: Add element to beginning of list
   * Time Complexity: O(1)
   */
  prepend(data) {
    // TODO: Create new node and update head
  }

  /**
   * TODO: Add element to end of list
   * Time Complexity: O(n)
   */
  append(data) {
    // TODO: Traverse to end and add new node
  }

  /**
   * TODO: Insert element at specific index
   * Time Complexity: O(n)
   */
  insert(index, data) {
    // TODO: Find position and insert new node
  }

  /**
   * TODO: Remove element at specific index
   * Time Complexity: O(n)
   */
  delete(index) {
    // TODO: Find node and update links
  }

  /**
   * TODO: Find element and return index
   * Time Complexity: O(n)
   */
  indexOf(data) {
    // TODO: Traverse list to find element
  }

  /**
   * TODO: Get element at specific index
   * Time Complexity: O(n)
   */
  get(index) {
    // TODO: Traverse to index and return data
  }

  /**
   * TODO: Get current size
   */
  length() {
    return this.size;
  }

  /**
   * TODO: Check if list is empty
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * TODO: Convert to array for easy testing
   */
  toArray() {
    // TODO: Traverse and collect all elements
  }
}

// ============================================================================
// STACK
// ============================================================================

/**
 * TODO: Implement stack using array
 * LIFO (Last In, First Out) principle
 */
class Stack {
  constructor() {
    this.items = [];
  }

  /**
   * TODO: Add element to top of stack
   * Time Complexity: O(1)
   */
  push(element) {
    // TODO: Add element to end of array
  }

  /**
   * TODO: Remove and return top element
   * Time Complexity: O(1)
   */
  pop() {
    // TODO: Remove and return last element
  }

  /**
   * TODO: Return top element without removing
   * Time Complexity: O(1)
   */
  peek() {
    // TODO: Return last element without removing
  }

  /**
   * TODO: Check if stack is empty
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * TODO: Get current size
   */
  size() {
    return this.items.length;
  }

  /**
   * TODO: Clear all elements
   */
  clear() {
    this.items = [];
  }
}

// ============================================================================
// QUEUE
// ============================================================================

/**
 * TODO: Implement queue using array
 * FIFO (First In, First Out) principle
 */
class Queue {
  constructor() {
    this.items = [];
  }

  /**
   * TODO: Add element to rear of queue
   * Time Complexity: O(1)
   */
  enqueue(element) {
    // TODO: Add element to end of array
  }

  /**
   * TODO: Remove and return front element
   * Time Complexity: O(n) with array, O(1) with linked list
   */
  dequeue() {
    // TODO: Remove and return first element
  }

  /**
   * TODO: Return front element without removing
   * Time Complexity: O(1)
   */
  front() {
    // TODO: Return first element without removing
  }

  /**
   * TODO: Check if queue is empty
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * TODO: Get current size
   */
  size() {
    return this.items.length;
  }
}

// ============================================================================
// BINARY SEARCH TREE
// ============================================================================

/**
 * Node class for BST
 */
class BSTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * TODO: Implement Binary Search Tree
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * TODO: Insert element into BST
   * Time Complexity: O(log n) average, O(n) worst case
   */
  insert(data) {
    // TODO: Implement recursive insertion
  }

  /**
   * TODO: Helper method for insertion
   */
  _insertNode(node, data) {
    // TODO: Recursive insertion logic
  }

  /**
   * TODO: Search for element in BST
   * Time Complexity: O(log n) average, O(n) worst case
   */
  search(data) {
    // TODO: Implement recursive search
  }

  /**
   * TODO: Helper method for search
   */
  _searchNode(node, data) {
    // TODO: Recursive search logic
  }

  /**
   * TODO: Delete element from BST
   * Time Complexity: O(log n) average, O(n) worst case
   */
  delete(data) {
    // TODO: Implement recursive deletion with three cases:
    // 1. Node with no children (leaf)
    // 2. Node with one child
    // 3. Node with two children (replace with inorder successor)
  }

  /**
   * TODO: Find minimum value in BST
   */
  findMin() {
    // TODO: Go left until no left child
  }

  /**
   * TODO: Find maximum value in BST
   */
  findMax() {
    // TODO: Go right until no right child
  }

  /**
   * TODO: Inorder traversal (returns sorted array)
   * Time Complexity: O(n)
   */
  inorderTraversal() {
    // TODO: Left, Root, Right
  }

  /**
   * TODO: Preorder traversal
   * Time Complexity: O(n)
   */
  preorderTraversal() {
    // TODO: Root, Left, Right
  }

  /**
   * TODO: Postorder traversal
   * Time Complexity: O(n)
   */
  postorderTraversal() {
    // TODO: Left, Right, Root
  }

  /**
   * TODO: Get height of tree
   */
  height() {
    // TODO: Calculate maximum depth
  }
}

// ============================================================================
// HASH TABLE
// ============================================================================

/**
 * TODO: Implement hash table with collision resolution
 * Use chaining (array of linked lists) for collision handling
 */
class HashTable {
  constructor(size = 10) {
    this.size = size;
    this.buckets = new Array(size);
    // Initialize each bucket as empty array for chaining
    for (let i = 0; i < size; i++) {
      this.buckets[i] = [];
    }
  }

  /**
   * TODO: Simple hash function
   */
  _hash(key) {
    // TODO: Convert key to index (0 to size-1)
    // Simple approach: sum char codes and mod by size
  }

  /**
   * TODO: Set key-value pair
   * Time Complexity: O(1) average, O(n) worst case
   */
  set(key, value) {
    // TODO: Hash key, handle collision with chaining
  }

  /**
   * TODO: Get value by key
   * Time Complexity: O(1) average, O(n) worst case
   */
  get(key) {
    // TODO: Hash key, search in bucket
  }

  /**
   * TODO: Delete key-value pair
   * Time Complexity: O(1) average, O(n) worst case
   */
  delete(key) {
    // TODO: Hash key, remove from bucket
  }

  /**
   * TODO: Check if key exists
   */
  has(key) {
    // TODO: Hash key, check bucket
  }

  /**
   * TODO: Get all keys
   */
  keys() {
    // TODO: Collect all keys from all buckets
  }

  /**
   * TODO: Get all values
   */
  values() {
    // TODO: Collect all values from all buckets
  }
}

// ============================================================================
// MIN HEAP
// ============================================================================

/**
 * TODO: Implement min heap (priority queue)
 * Parent is smaller than children
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  /**
   * TODO: Get parent index
   */
  _getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  /**
   * TODO: Get left child index
   */
  _getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  /**
   * TODO: Get right child index
   */
  _getRightChildIndex(index) {
    return 2 * index + 2;
  }

  /**
   * TODO: Swap elements at two indices
   */
  _swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  /**
   * TODO: Insert element into heap
   * Time Complexity: O(log n)
   */
  insert(value) {
    // TODO: Add to end, then bubble up
  }

  /**
   * TODO: Bubble up element to maintain heap property
   */
  _bubbleUp() {
    // TODO: Compare with parent and swap if needed
  }

  /**
   * TODO: Extract minimum element
   * Time Complexity: O(log n)
   */
  extractMin() {
    // TODO: Remove root, move last to root, bubble down
  }

  /**
   * TODO: Bubble down element to maintain heap property
   */
  _bubbleDown() {
    // TODO: Compare with children and swap with smaller
  }

  /**
   * TODO: Peek at minimum element
   * Time Complexity: O(1)
   */
  peek() {
    return this.heap[0];
  }

  /**
   * TODO: Get heap size
   */
  size() {
    return this.heap.length;
  }

  /**
   * TODO: Check if heap is empty
   */
  isEmpty() {
    return this.heap.length === 0;
  }
}

// ============================================================================
// GRAPH
// ============================================================================

/**
 * TODO: Implement graph using adjacency list
 * Support both directed and undirected graphs
 */
class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = new Map();
  }

  /**
   * TODO: Add vertex to graph
   */
  addVertex(vertex) {
    // TODO: Add vertex with empty adjacency list
  }

  /**
   * TODO: Add edge between vertices
   */
  addEdge(vertex1, vertex2, weight = 1) {
    // TODO: Add edge, handle directed vs undirected
  }

  /**
   * TODO: Remove vertex and all its edges
   */
  removeVertex(vertex) {
    // TODO: Remove vertex and clean up edges
  }

  /**
   * TODO: Remove edge between vertices
   */
  removeEdge(vertex1, vertex2) {
    // TODO: Remove edge, handle directed vs undirected
  }

  /**
   * TODO: Get all neighbors of a vertex
   */
  getNeighbors(vertex) {
    // TODO: Return adjacency list for vertex
  }

  /**
   * TODO: Check if edge exists
   */
  hasEdge(vertex1, vertex2) {
    // TODO: Check if edge exists between vertices
  }

  /**
   * TODO: Get all vertices
   */
  getVertices() {
    // TODO: Return array of all vertices
  }

  /**
   * TODO: Get graph size (number of vertices)
   */
  size() {
    return this.vertices.size;
  }

  /**
   * TODO: Breadth-first search traversal
   */
  bfs(startVertex) {
    // TODO: Implement BFS using queue
  }

  /**
   * TODO: Depth-first search traversal
   */
  dfs(startVertex) {
    // TODO: Implement DFS using recursion or stack
  }
}

// ============================================================================
// TRIE (PREFIX TREE)
// ============================================================================

/**
 * Node class for Trie
 */
class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

/**
 * TODO: Implement Trie (Prefix Tree) for efficient string operations
 */
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * TODO: Insert word into trie
   * Time Complexity: O(m) where m is word length
   */
  insert(word) {
    // TODO: Traverse/create path for each character
  }

  /**
   * TODO: Search for word in trie
   * Time Complexity: O(m) where m is word length
   */
  search(word) {
    // TODO: Traverse path and check if end of word
  }

  /**
   * TODO: Check if any word starts with prefix
   * Time Complexity: O(m) where m is prefix length
   */
  startsWith(prefix) {
    // TODO: Traverse path for prefix
  }

  /**
   * TODO: Delete word from trie
   * Time Complexity: O(m) where m is word length
   */
  delete(word) {
    // TODO: Remove word, cleanup unnecessary nodes
  }

  /**
   * TODO: Get all words with given prefix
   */
  getWordsWithPrefix(prefix) {
    // TODO: Find prefix node, then DFS to collect words
  }
}

// ============================================================================
// EXPORTS FOR TESTING
// ============================================================================

module.exports = {
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
};
