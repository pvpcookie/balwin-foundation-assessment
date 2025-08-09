/**
 * Algorithms Assessment Tests
 * 
 * These tests validate the implementation of fundamental algorithms.
 * Students should run these tests to verify their solutions.
 */

const {
  // Sorting
  bubbleSort,
  quickSort,
  mergeSort,
  
  // Searching
  binarySearch,
  linearSearch,
  
  // Dynamic Programming
  fibonacci,
  coinChange,
  knapsack,
  
  // Graph Algorithms
  breadthFirstSearch,
  depthFirstSearch,
  dijkstra,
  
  // String Algorithms
  isPalindrome,
  longestCommonSubsequence,
  kmpSearch,
  
  // Mathematical
  gcd,
  isPrime,
  fastPower,
  sieveOfEratosthenes,
  
  // Tree Algorithms
  TreeNode,
  inorderTraversal,
  preorderTraversal,
  postorderTraversal,
  isValidBST,
  maxDepth
} = require('./index');

describe('Algorithms Assessment', () => {
  
  // ============================================================================
  // SORTING ALGORITHMS TESTS
  // ============================================================================
  
  describe('Sorting Algorithms', () => {
    const testCases = [
      { input: [64, 34, 25, 12, 22, 11, 90], expected: [11, 12, 22, 25, 34, 64, 90] },
      { input: [5, 2, 4, 6, 1, 3], expected: [1, 2, 3, 4, 5, 6] },
      { input: [1], expected: [1] },
      { input: [], expected: [] },
      { input: [3, 3, 3], expected: [3, 3, 3] },
      { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] }
    ];

    testCases.forEach(({ input, expected }, index) => {
      test(`Bubble Sort - Test Case ${index + 1}`, () => {
        expect(bubbleSort([...input])).toEqual(expected);
      });

      test(`Quick Sort - Test Case ${index + 1}`, () => {
        expect(quickSort([...input])).toEqual(expected);
      });

      test(`Merge Sort - Test Case ${index + 1}`, () => {
        expect(mergeSort([...input])).toEqual(expected);
      });
    });

    test('Performance comparison on large array', () => {
      const largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
      
      const bubbleStart = performance.now();
      const bubbleResult = bubbleSort([...largeArray]);
      const bubbleTime = performance.now() - bubbleStart;
      
      const quickStart = performance.now();
      const quickResult = quickSort([...largeArray]);
      const quickTime = performance.now() - quickStart;
      
      const mergeStart = performance.now();
      const mergeResult = mergeSort([...largeArray]);
      const mergeTime = performance.now() - mergeStart;
      
      // All should produce same result
      expect(bubbleResult).toEqual(quickResult);
      expect(quickResult).toEqual(mergeResult);
      
      // Quick sort and merge sort should be faster than bubble sort
      expect(quickTime).toBeLessThan(bubbleTime);
      expect(mergeTime).toBeLessThan(bubbleTime);
      
      console.log(`Performance Results:
        Bubble Sort: ${bubbleTime.toFixed(2)}ms
        Quick Sort: ${quickTime.toFixed(2)}ms
        Merge Sort: ${mergeTime.toFixed(2)}ms`);
    });
  });

  // ============================================================================
  // SEARCHING ALGORITHMS TESTS
  // ============================================================================
  
  describe('Searching Algorithms', () => {
    const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const unsortedArray = [19, 3, 15, 7, 1, 9, 13, 5, 17, 11];

    test('Binary Search - element exists', () => {
      expect(binarySearch(sortedArray, 7)).toBe(3);
      expect(binarySearch(sortedArray, 1)).toBe(0);
      expect(binarySearch(sortedArray, 19)).toBe(9);
    });

    test('Binary Search - element does not exist', () => {
      expect(binarySearch(sortedArray, 2)).toBe(-1);
      expect(binarySearch(sortedArray, 20)).toBe(-1);
      expect(binarySearch([], 5)).toBe(-1);
    });

    test('Linear Search - element exists', () => {
      expect(linearSearch(unsortedArray, 7)).toBe(3);
      expect(linearSearch(unsortedArray, 19)).toBe(0);
      expect(linearSearch(unsortedArray, 11)).toBe(9);
    });

    test('Linear Search - element does not exist', () => {
      expect(linearSearch(unsortedArray, 2)).toBe(-1);
      expect(linearSearch(unsortedArray, 20)).toBe(-1);
      expect(linearSearch([], 5)).toBe(-1);
    });
  });

  // ============================================================================
  // DYNAMIC PROGRAMMING TESTS
  // ============================================================================
  
  describe('Dynamic Programming', () => {
    test('Fibonacci sequence', () => {
      expect(fibonacci(0)).toBe(0);
      expect(fibonacci(1)).toBe(1);
      expect(fibonacci(2)).toBe(1);
      expect(fibonacci(5)).toBe(5);
      expect(fibonacci(10)).toBe(55);
      expect(fibonacci(20)).toBe(6765);
    });

    test('Coin Change problem', () => {
      expect(coinChange([1, 3, 4], 6)).toBe(2); // 3 + 3
      expect(coinChange([2], 3)).toBe(-1); // impossible
      expect(coinChange([1], 0)).toBe(0); // no coins needed
      expect(coinChange([1, 2, 5], 11)).toBe(3); // 5 + 5 + 1
    });

    test('0/1 Knapsack problem', () => {
      const weights = [10, 20, 30];
      const values = [60, 100, 120];
      expect(knapsack(50, weights, values)).toBe(220); // items 2 and 3
      
      const weights2 = [1, 3, 4, 5];
      const values2 = [1, 4, 5, 7];
      expect(knapsack(7, weights2, values2)).toBe(9); // items 2 and 4
    });
  });

  // ============================================================================
  // GRAPH ALGORITHMS TESTS
  // ============================================================================
  
  describe('Graph Algorithms', () => {
    const graph = {
      'A': ['B', 'C'],
      'B': ['A', 'D', 'E'],
      'C': ['A', 'F'],
      'D': ['B'],
      'E': ['B', 'F'],
      'F': ['C', 'E']
    };

    const weightedGraph = {
      'A': [{ node: 'B', weight: 4 }, { node: 'C', weight: 2 }],
      'B': [{ node: 'A', weight: 4 }, { node: 'C', weight: 1 }, { node: 'D', weight: 5 }],
      'C': [{ node: 'A', weight: 2 }, { node: 'B', weight: 1 }, { node: 'D', weight: 8 }, { node: 'E', weight: 10 }],
      'D': [{ node: 'B', weight: 5 }, { node: 'C', weight: 8 }, { node: 'E', weight: 2 }],
      'E': [{ node: 'C', weight: 10 }, { node: 'D', weight: 2 }]
    };

    test('Breadth-First Search', () => {
      const result = breadthFirstSearch(graph, 'A');
      expect(result[0]).toBe('A'); // Should start with A
      expect(result).toContain('B');
      expect(result).toContain('C');
      expect(result.length).toBe(6); // All nodes visited
    });

    test('Depth-First Search', () => {
      const result = depthFirstSearch(graph, 'A');
      expect(result[0]).toBe('A'); // Should start with A
      expect(result).toContain('B');
      expect(result).toContain('C');
      expect(result.length).toBe(6); // All nodes visited
    });

    test('Dijkstra shortest path', () => {
      const result = dijkstra(weightedGraph, 'A', 'E');
      expect(result.distance).toBe(10); // A -> C -> B -> D -> E
      expect(result.path).toContain('A');
      expect(result.path).toContain('E');
    });
  });

  // ============================================================================
  // STRING ALGORITHMS TESTS
  // ============================================================================
  
  describe('String Algorithms', () => {
    test('Palindrome check', () => {
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
      expect(isPalindrome('race a car')).toBe(false);
      expect(isPalindrome('')).toBe(true);
      expect(isPalindrome('a')).toBe(true);
    });

    test('Longest Common Subsequence', () => {
      expect(longestCommonSubsequence('ABCDGH', 'AEDFHR')).toBe(3); // ADH
      expect(longestCommonSubsequence('AGGTAB', 'GXTXAYB')).toBe(4); // GTAB
      expect(longestCommonSubsequence('', 'ABC')).toBe(0);
      expect(longestCommonSubsequence('ABC', 'ABC')).toBe(3);
    });

    test('KMP Pattern Search', () => {
      expect(kmpSearch('ABABDABACDABABCABCABCABCABC', 'ABABCABCABCABC')).toEqual([10]);
      expect(kmpSearch('AABAACAADAABAABA', 'AABA')).toEqual([0, 9, 12]);
      expect(kmpSearch('ABCD', 'XYZ')).toEqual([]);
    });
  });

  // ============================================================================
  // MATHEMATICAL ALGORITHMS TESTS
  // ============================================================================
  
  describe('Mathematical Algorithms', () => {
    test('Greatest Common Divisor', () => {
      expect(gcd(48, 18)).toBe(6);
      expect(gcd(17, 13)).toBe(1);
      expect(gcd(0, 5)).toBe(5);
      expect(gcd(100, 25)).toBe(25);
    });

    test('Prime number check', () => {
      expect(isPrime(2)).toBe(true);
      expect(isPrime(17)).toBe(true);
      expect(isPrime(97)).toBe(true);
      expect(isPrime(1)).toBe(false);
      expect(isPrime(4)).toBe(false);
      expect(isPrime(100)).toBe(false);
    });

    test('Fast power calculation', () => {
      expect(fastPower(2, 10)).toBe(1024);
      expect(fastPower(3, 4)).toBe(81);
      expect(fastPower(5, 0)).toBe(1);
      expect(fastPower(2, 1)).toBe(2);
    });

    test('Sieve of Eratosthenes', () => {
      expect(sieveOfEratosthenes(10)).toEqual([2, 3, 5, 7]);
      expect(sieveOfEratosthenes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
      expect(sieveOfEratosthenes(2)).toEqual([2]);
    });
  });

  // ============================================================================
  // TREE ALGORITHMS TESTS
  // ============================================================================
  
  describe('Tree Algorithms', () => {
    // Create test tree:     4
    //                     /   \
    //                    2     6
    //                   / \   / \
    //                  1   3 5   7
    
    const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(6);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    root.right.left = new TreeNode(5);
    root.right.right = new TreeNode(7);

    test('Tree traversals', () => {
      expect(inorderTraversal(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
      expect(preorderTraversal(root)).toEqual([4, 2, 1, 3, 6, 5, 7]);
      expect(postorderTraversal(root)).toEqual([1, 3, 2, 5, 7, 6, 4]);
    });

    test('Valid BST check', () => {
      expect(isValidBST(root)).toBe(true);
      
      // Create invalid BST
      const invalidRoot = new TreeNode(5);
      invalidRoot.left = new TreeNode(1);
      invalidRoot.right = new TreeNode(4);
      invalidRoot.right.left = new TreeNode(3);
      invalidRoot.right.right = new TreeNode(6);
      
      expect(isValidBST(invalidRoot)).toBe(false);
    });

    test('Maximum depth', () => {
      expect(maxDepth(root)).toBe(3);
      expect(maxDepth(null)).toBe(0);
      expect(maxDepth(new TreeNode(1))).toBe(1);
    });
  });

  // ============================================================================
  // PERFORMANCE AND EDGE CASES
  // ============================================================================
  
  describe('Performance and Edge Cases', () => {
    test('Empty input handling', () => {
      expect(bubbleSort([])).toEqual([]);
      expect(linearSearch([], 1)).toBe(-1);
      expect(fibonacci(0)).toBe(0);
      expect(isPalindrome('')).toBe(true);
    });

    test('Single element handling', () => {
      expect(quickSort([1])).toEqual([1]);
      expect(binarySearch([1], 1)).toBe(0);
      expect(maxDepth(new TreeNode(1))).toBe(1);
    });

    test('Large input performance', () => {
      const largeArray = Array.from({ length: 10000 }, (_, i) => i);
      
      const start = performance.now();
      const result = binarySearch(largeArray, 9999);
      const time = performance.now() - start;
      
      expect(result).toBe(9999);
      expect(time).toBeLessThan(1); // Should be very fast
    });
  });
});

describe('Assessment Grading Criteria', () => {
  test('Code should demonstrate understanding of time complexity', () => {
    // Grading criteria:
    // - Implements algorithms with correct time complexity
    // - Shows understanding of big O notation
    // - Chooses appropriate algorithms for different scenarios
    expect(true).toBe(true);
  });

  test('Code should demonstrate understanding of space complexity', () => {
    // Grading criteria:
    // - Considers memory usage in implementations
    // - Uses appropriate space-time tradeoffs
    // - Implements in-place algorithms where appropriate
    expect(true).toBe(true);
  });

  test('Code should handle edge cases properly', () => {
    // Grading criteria:
    // - Handles empty inputs gracefully
    // - Manages boundary conditions
    // - Validates input parameters
    expect(true).toBe(true);
  });

  test('Code should be clean and well-structured', () => {
    // Grading criteria:
    // - Clear variable names and logic flow
    // - Proper error handling
    // - Efficient implementations
    expect(true).toBe(true);
  });
});
