# Core Coding Skills Assessment Suite

## Overview

This comprehensive assessment suite evaluates core coding competencies across three fundamental areas:

1. **Assessment 1: SOLID Principles** - Object-oriented design principles
2. **Assessment 2: Algorithms** - Problem-solving and algorithmic thinking  
3. **Assessment 3: Data Structures** - Understanding of fundamental data structures

Each assessment is designed to test both theoretical understanding and practical implementation skills that are essential for software development.

## Getting Started

### Clone the Repository
```bash
# Clone the assessment suite
git clone git@github.com:pvpcookie/balwin-foundation-assessment.git
cd code-test

# Or download as ZIP and extract
```

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Setup All Assessments
```bash
# Navigate to each assessment and install dependencies
cd assesment-1 && npm install && cd ..
cd assesment-2 && npm install && cd ..  
cd assesment-3 && npm install && cd ..
```

## Assessment Structure

```
code-test/
├── assesment-1/          # SOLID Principles (21 tests)
│   ├── index.js          # Implementation file (your code here)
│   ├── index.test.js     # Test suite
│   ├── package.json      # Dependencies
│   └── README.md         # Detailed instructions
├── assesment-2/          # Algorithms (46 tests)
│   ├── index.js          # Implementation file (your code here)
│   ├── index.test.js     # Test suite
│   ├── package.json      # Dependencies
│   └── README.md         # Detailed instructions
├── assesment-3/          # Data Structures (54 tests)
│   ├── index.js          # Implementation file (your code here)
│   ├── index.test.js     # Test suite
│   ├── package.json      # Dependencies
│   └── README.md         # Detailed instructions
```

## Quick Start

### Run Individual Assessments
```bash
# Assessment 1: SOLID Principles
cd assesment-1
npm test

# Assessment 2: Algorithms
cd assesment-2  
npm test

# Assessment 3: Data Structures
cd assesment-3
npm test
```

## Assessment Details

### Assessment 1: SOLID Principles (Estimated Time: 2-3 hours)

**Skills Evaluated:**
- Understanding of SOLID design principles
- Object-oriented design and refactoring
- Code organization and architecture
- Dependency management

**Key Tasks:**
- Refactor violating code to follow SRP
- Implement OCP-compliant extensible design
- Fix LSP violations in inheritance hierarchies
- Create focused interfaces following ISP
- Apply DIP through dependency injection

### Assessment 2: Algorithms (Estimated Time: 3-4 hours)

**Skills Evaluated:**
- Algorithmic thinking and problem-solving
- Time and space complexity analysis
- Implementation of fundamental algorithms
- Optimization and efficiency considerations

**Algorithm Categories:**
- **Sorting**: Bubble Sort, Quick Sort, Merge Sort
- **Searching**: Binary Search, Linear Search
- **Dynamic Programming**: Fibonacci, Coin Change, Knapsack
- **Graph**: BFS, DFS, Dijkstra's Algorithm
- **String Processing**: Palindromes, LCS, Pattern Matching
- **Mathematical**: GCD, Prime Numbers, Fast Exponentiation
- **Tree**: Traversals, BST Operations, Depth Calculation

### Assessment 3: Data Structures (Estimated Time: 4-5 hours)

**Skills Evaluated:**
- Understanding of data structure internals
- Implementation of core operations
- Memory management and efficiency
- Choosing appropriate structures for problems

**Data Structures Covered:**
- **Linear**: Dynamic Array, Linked List, Stack, Queue
- **Tree-based**: Binary Search Tree, Min Heap, Trie
- **Hash-based**: Hash Table with collision resolution
- **Graph**: Adjacency list with traversal algorithms

## Grading Framework

Each assessment uses a comprehensive grading framework:

### Scoring Breakdown
- **Correctness (40%)**: All tests pass, requirements met
- **Efficiency (25-30%)**: Appropriate time/space complexity
- **Code Quality (20-25%)**: Clean, readable, maintainable code
- **Understanding (10%)**: Comments and design decisions

### Performance Levels
- **Excellent (90-100%)**: All requirements met with optimal solutions
- **Proficient (80-89%)**: Most requirements met with good solutions
- **Developing (70-79%)**: Basic requirements met, some areas need improvement
- **Needs Improvement (<70%)**: Significant gaps in understanding or implementation

## Support and Feedback

### Common Issues
- **Node.js/npm problems**: Ensure latest versions are installed
- **Test failures**: Read error messages carefully, implement step by step
- **Time management**: Start early, focus on understanding over completion

### Getting Help
- Read README files thoroughly for each assessment
- Use console.log() for debugging
- Start with simpler functions and build complexity gradually
- Review test cases to understand expected behavior

### Git Repository Setup

```bash
# Initialize repository (for instructors deploying)
git init
git add .
git commit -m "Initial commit: Core Coding Skills Assessment Suite"

# Set up remote repository
git remote add origin [YOUR_REPOSITORY_URL]
git branch -M main
git push -u origin main

# Clone for students
git clone [YOUR_REPOSITORY_URL]
cd code-test
```

## Assessment Philosophy

These assessments are designed to:
- **Test fundamental understanding** rather than memorization
- **Encourage problem-solving** and analytical thinking
- **Provide practical experience** with real-world coding challenges
- **Build confidence** in core programming concepts

--- 
## License

This assessment suite is designed for educational use. Feel free to adapt and modify for your specific needs while maintaining the educational integrity of the exercises.

---

**Good luck with your assessments!** Remember, the goal is learning and improvement, not just getting tests to pass. Focus on understanding the underlying concepts, and the implementation will follow naturally.
