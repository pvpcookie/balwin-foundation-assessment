/**
 * SOLID Principles Assessment
 * 
 * This assessment tests understanding of the five SOLID principles:
 * S - Single Responsibility Principle
 * O - Open-Closed Principle
 * L - Liskov Substitution Principle
 * I - Interface Segregation Principle
 * D - Dependency Inversion Principle
 * 
 * Instructions:
 * 1. Implement the classes and methods according to SOLID principles
 * 2. Each section has specific requirements marked with TODO
 * 3. Run tests with: npm test
 */

// ============================================================================
// SINGLE RESPONSIBILITY PRINCIPLE (SRP)
// ============================================================================

/**
 * TODO: The UserManager class below violates SRP by handling multiple responsibilities.
 * Refactor it into separate classes:
 * - UserValidator: for validation logic
 * - EmailService: for email operations
 * - UserRepository: for database operations
 * - UserManager: for coordinating user operations
 */

class UserManager {
  // TODO: Implement proper SRP structure
}

class UserValidator {
  // TODO: Implement validation methods
}

class EmailService {
  // TODO: Implement email methods
}

class UserRepository {
  // TODO: Implement database methods
}

// ============================================================================
// OPEN-CLOSED PRINCIPLE (OCP)
// ============================================================================

/**
 * TODO: Create a shape system that follows OCP.
 * Implement:
 * - Shape base class with calculateArea method
 * - Rectangle class extending Shape
 * - Circle class extending Shape
 * - AreaCalculator class that can work with any shape
 */

class Shape {
  // TODO: Implement base shape class
}

class Rectangle {
  // TODO: Implement rectangle
}

class Circle {
  // TODO: Implement circle
}

class AreaCalculator {
  // TODO: Implement area calculator
}

// ============================================================================
// LISKOV SUBSTITUTION PRINCIPLE (LSP)
// ============================================================================

/**
 * TODO: The current Bird hierarchy violates LSP.
 * Design a better hierarchy where:
 * - All birds can makeSound()
 * - Only flying birds can fly()
 * - Penguins are properly handled
 */

class Bird {
  // TODO: Implement base bird class
}

class Sparrow {
  // TODO: Implement sparrow
}

class Penguin {
  // TODO: Implement penguin (cannot fly!)
}

// ============================================================================
// INTERFACE SEGREGATION PRINCIPLE (ISP)
// ============================================================================

/**
 * TODO: The current Worker interface is too broad.
 * Create segregated interfaces:
 * - Workable: for work() method
 * - Eatable: for eat() method  
 * - Sleepable: for sleep() method
 */

class Human {
  // TODO: Implement human worker
}

class Robot {
  // TODO: Implement robot worker (doesn't eat or sleep!)
}

// ============================================================================
// DEPENDENCY INVERSION PRINCIPLE (DIP)
// ============================================================================

/**
 * TODO: The NotificationService depends on concrete classes.
 * Implement:
 * - Abstract NotificationChannel interface
 * - EmailNotification implementing the interface
 * - SMSNotification implementing the interface
 * - NotificationService depending on abstraction
 */

class NotificationService {
  // TODO: Implement with dependency injection
}

class EmailNotification {
  // TODO: Implement email notification
}

class SMSNotification {
  // TODO: Implement SMS notification
}

// Export all classes for testing
module.exports = {
  UserManager,
  UserValidator,
  EmailService,
  UserRepository,
  Shape,
  Rectangle,
  Circle,
  AreaCalculator,
  Bird,
  Sparrow,
  Penguin,
  Human,
  Robot,
  NotificationService,
  EmailNotification,
  SMSNotification
};
