# SOLID Principles Assessment

## Overview
This assessment evaluates understanding of the five SOLID principles of object-oriented design:

- **S** - Single Responsibility Principle
- **O** - Open-Closed Principle  
- **L** - Liskov Substitution Principle
- **I** - Interface Segregation Principle
- **D** - Dependency Inversion Principle

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run tests to see current state:
   ```bash
   npm test
   ```

3. Implement the required refactoring in `index.js`

4. Run tests again to verify your solutions

## Assessment Tasks

### 1. Single Responsibility Principle (SRP)
**Problem**: The `UserManager` class violates SRP by handling multiple responsibilities.

**Task**: Refactor into separate classes:
- `User` - User data model
- `UserValidator` - Input validation
- `EmailService` - Email notifications  
- `UserRepository` - Data persistence
- `UserService` - Orchestrates the workflow

### 2. Open-Closed Principle (OCP)
**Problem**: The `ShapeCalculator` class requires modification to add new shapes.

**Task**: 
- Create proper base `Shape` class with area calculation method
- Implement `Rectangle`, `Circle`, `Triangle`, and `Pentagon` classes
- Modify `ShapeCalculator` to work with any shape without changes

### 3. Liskov Substitution Principle (LSP)
**Problem**: `Penguin` class violates LSP by throwing error in `fly()` method.

**Task**: Redesign the hierarchy:
- Create proper abstractions (e.g., `Flyable`, `Swimmable` interfaces)
- Ensure all subclasses can properly substitute their parent

### 4. Interface Segregation Principle (ISP)
**Problem**: `Worker` interface forces `Robot` to implement `eat()` and `sleep()` methods it doesn't need.

**Task**: Split into focused interfaces:
- `Workable` - work functionality
- `Eatable` - eating functionality
- `Sleepable` - sleeping functionality

### 5. Dependency Inversion Principle (DIP)
**Problem**: `NotificationService` depends on concrete classes rather than abstractions.

**Task**: 
- Create `MessageProvider` interface/abstract class
- Use dependency injection in `NotificationService` constructor
- Add support for new providers without modifying existing code

## Grading Criteria

Your implementation will be evaluated on:

1. **Correctness** (40%)
   - All tests pass
   - SOLID principles properly implemented
   - Code maintains existing functionality

2. **Design Quality** (30%)
   - Clear separation of concerns
   - Proper use of abstractions
   - Good class and interface design

3. **Code Quality** (20%)
   - Clean, readable code
   - Consistent naming conventions
   - Appropriate error handling

4. **Understanding** (10%)
   - Comments showing understanding of principles
   - Justification of design decisions

## Tips for Success

- Start with one principle at a time
- Run tests frequently to ensure you don't break existing functionality
- Use descriptive class and method names
- Consider real-world scenarios when designing abstractions
- Remember: SOLID principles work together - your solution should demonstrate this

## Common Pitfalls to Avoid

- Over-engineering - keep solutions simple and focused
- Breaking existing functionality while refactoring
- Creating too many or too few abstractions
- Forgetting to handle edge cases
- Not maintaining backward compatibility where required

Good luck! This assessment will help demonstrate your understanding of fundamental object-oriented design principles.
