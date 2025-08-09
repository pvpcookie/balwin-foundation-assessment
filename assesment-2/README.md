# Algorithms Assessment

## Overview
This assessment evaluates understanding of fundamental algorithms across multiple categories:

- **Sorting Algorithms** - Bubble Sort, Quick Sort, Merge Sort
- **Searching Algorithms** - Binary Search, Linear Search
- **Dynamic Programming** - Fibonacci, Coin Change, Knapsack
- **Graph Algorithms** - BFS, DFS, Dijkstra's Algorithm
- **String Algorithms** - Palindrome Check, LCS, KMP Search
- **Mathematical Algorithms** - GCD, Prime Check, Fast Power, Sieve
- **Tree Algorithms** - Traversals, BST Validation, Depth Calculation

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run tests to see which algorithms need implementation:
   ```bash
   npm test
   ```

3. Implement the algorithms in `index.js`

4. Run tests again to verify your solutions

## Algorithm Categories

### 1. Sorting Algorithms
Implement three fundamental sorting algorithms:

- **Bubble Sort**: O(n²) time, O(1) space
- **Quick Sort**: O(n log n) average, O(n²) worst case time  
- **Merge Sort**: O(n log n) time, O(n) space

### 2. Searching Algorithms
Implement search algorithms for different scenarios:

- **Linear Search**: O(n) time, works on unsorted arrays
- **Binary Search**: O(log n) time, requires sorted array

### 3. Dynamic Programming
Solve optimization problems efficiently:

- **Fibonacci**: Calculate nth Fibonacci number
- **Coin Change**: Minimum coins to make target amount
- **0/1 Knapsack**: Maximize value within weight constraint

### 4. Graph Algorithms
Traverse and analyze graph structures:

- **BFS**: Breadth-first search using queue
- **DFS**: Depth-first search using recursion/stack
- **Dijkstra**: Shortest path in weighted graph

### 5. String Algorithms
Process and analyze text efficiently:

- **Palindrome Check**: Verify if string reads same forwards/backwards
- **Longest Common Subsequence**: Find longest shared subsequence
- **KMP Search**: Efficient pattern matching

### 6. Mathematical Algorithms
Solve computational mathematics problems:

- **GCD**: Greatest Common Divisor using Euclidean algorithm
- **Prime Check**: Determine if number is prime
- **Fast Power**: Efficient exponentiation
- **Sieve of Eratosthenes**: Generate prime numbers

### 7. Tree Algorithms
Work with binary tree structures:

- **Traversals**: Inorder, Preorder, Postorder
- **BST Validation**: Check if tree is valid Binary Search Tree
- **Max Depth**: Calculate maximum depth of tree

## Grading Criteria

Your implementation will be evaluated on:

1. **Correctness** (40%)
   - All test cases pass
   - Algorithms produce correct results
   - Edge cases handled properly

2. **Efficiency** (30%)
   - Correct time complexity
   - Appropriate space complexity
   - Optimal algorithm choices

3. **Code Quality** (20%)
   - Clean, readable implementation
   - Good variable naming
   - Proper error handling

4. **Understanding** (10%)
   - Comments explaining approach
   - Understanding of trade-offs
   - Ability to choose right algorithm

## Performance Expectations

Your implementations should meet these time complexities:

| Algorithm | Expected Time Complexity |
|-----------|-------------------------|
| Bubble Sort | O(n²) |
| Quick Sort | O(n log n) average |
| Merge Sort | O(n log n) |
| Binary Search | O(log n) |
| Linear Search | O(n) |
| Fibonacci (DP) | O(n) |
| Coin Change | O(amount × coins.length) |
| Knapsack | O(capacity × items) |
| BFS/DFS | O(V + E) |
| Dijkstra | O((V + E) log V) |

## Tips for Success

1. **Start Simple**: Begin with easier algorithms like bubble sort and linear search
2. **Test Frequently**: Run tests after implementing each algorithm
3. **Consider Edge Cases**: Empty arrays, single elements, duplicates
4. **Optimize Gradually**: Get correct solution first, then optimize
5. **Use Proper Data Structures**: Arrays, queues, stacks as needed
6. **Comment Your Code**: Explain the approach and key steps

## Common Mistakes to Avoid

- Off-by-one errors in array indexing
- Infinite loops in recursive algorithms
- Not handling empty inputs
- Incorrect base cases in recursion
- Memory leaks in dynamic programming
- Forgetting to mark visited nodes in graph algorithms

## Study Resources

- Review big O notation and complexity analysis
- Practice with different input sizes
- Understand when to use each algorithm
- Study the mathematical foundations
- Practice implementing without looking at solutions

Good luck! This assessment will demonstrate your algorithmic thinking and problem-solving skills.
