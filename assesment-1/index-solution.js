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
 * TODO: The UserManager class below violates SRP. 
 * Refactor it into separate classes that each have a single responsibility.
 * 
 * Current responsibilities:
 * - User data management
 * - Email notifications
 * - Data persistence
 * - User validation
 */

class UserManager {
  constructor() {
    this.users = [];
  }

  // User management
  addUser(user) {
    // TODO: Move validation to separate class
    if (!user.email || !user.name) {
      throw new Error('Invalid user data');
    }
    
    this.users.push(user);
    
    // TODO: Move email logic to separate class
    this.sendWelcomeEmail(user);
    
    // TODO: Move persistence logic to separate class
    this.saveToDatabase(user);
  }

  sendWelcomeEmail(user) {
    console.log(`Sending welcome email to ${user.email}`);
  }

  saveToDatabase(user) {
    console.log(`Saving user ${user.name} to database`);
  }
}

// TODO: Create separate classes here:
// - User class
// - UserValidator class
// - EmailService class
// - UserRepository class
// - UserService class (orchestrates the others)

// ============================================================================
// OPEN-CLOSED PRINCIPLE (OCP)
// ============================================================================

/**
 * TODO: The ShapeCalculator class below violates OCP.
 * Modify it to be open for extension but closed for modification.
 * Add support for Triangle and Pentagon without modifying existing code.
 */

class Shape {
  // TODO: Define base shape interface
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  // TODO: Implement area calculation
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  // TODO: Implement area calculation
}

// TODO: Add Triangle class
// TODO: Add Pentagon class

class ShapeCalculator {
  calculateArea(shape) {
    // This violates OCP - we need to modify this method for each new shape
    if (shape instanceof Rectangle) {
      return shape.width * shape.height;
    } else if (shape instanceof Circle) {
      return Math.PI * shape.radius * shape.radius;
    }
    // TODO: Refactor to follow OCP
    throw new Error('Unknown shape type');
  }
}

// ============================================================================
// LISKOV SUBSTITUTION PRINCIPLE (LSP)
// ============================================================================

/**
 * TODO: The Bird hierarchy below violates LSP.
 * Fix the design so that all subclasses can properly substitute their base class.
 */

class Bird {
  fly() {
    return "Flying high!";
  }
}

class Sparrow extends Bird {
  // Can fly - no issues here
}

class Penguin extends Bird {
  fly() {
    // This violates LSP - penguins can't fly!
    throw new Error("Penguins can't fly!");
  }
}

// TODO: Redesign the hierarchy to follow LSP
// Consider creating interfaces like Flyable, Swimmable, etc.

// ============================================================================
// INTERFACE SEGREGATION PRINCIPLE (ISP)
// ============================================================================

/**
 * TODO: The Worker interface below violates ISP.
 * Split it into smaller, more specific interfaces.
 */

class Worker {
  work() {
    throw new Error("Must implement work method");
  }
  
  eat() {
    throw new Error("Must implement eat method");
  }
  
  sleep() {
    throw new Error("Must implement sleep method");
  }
}

class Human extends Worker {
  work() { return "Human working"; }
  eat() { return "Human eating"; }
  sleep() { return "Human sleeping"; }
}

class Robot extends Worker {
  work() { return "Robot working"; }
  
  eat() {
    // Robots don't eat! This violates ISP
    throw new Error("Robots don't eat!");
  }
  
  sleep() {
    // Robots don't sleep! This violates ISP
    throw new Error("Robots don't sleep!");
  }
}

// TODO: Create separate interfaces:
// - Workable
// - Eatable  
// - Sleepable
// Then implement only relevant interfaces for each class

// ============================================================================
// DEPENDENCY INVERSION PRINCIPLE (DIP)
// ============================================================================

/**
 * TODO: The NotificationService below violates DIP.
 * It depends on concrete implementations rather than abstractions.
 * Refactor to depend on abstractions (interfaces).
 */

class EmailProvider {
  send(message) {
    return `Email sent: ${message}`;
  }
}

class SMSProvider {
  send(message) {
    return `SMS sent: ${message}`;
  }
}

class NotificationService {
  constructor() {
    // Violates DIP - depending on concrete classes
    this.emailProvider = new EmailProvider();
    this.smsProvider = new SMSProvider();
  }

  sendEmail(message) {
    return this.emailProvider.send(message);
  }

  sendSMS(message) {
    return this.smsProvider.send(message);
  }
}

// TODO: Create abstractions and refactor:
// 1. Create a MessageProvider interface/abstract class
// 2. Make EmailProvider and SMSProvider implement it
// 3. Inject dependencies into NotificationService constructor
// 4. Add support for PushNotificationProvider without modifying NotificationService

// ============================================================================
// EXPORTS FOR TESTING
// ============================================================================

module.exports = {
  UserManager,
  Shape,
  Rectangle, 
  Circle,
  ShapeCalculator,
  Bird,
  Sparrow,
  Penguin,
  Worker,
  Human,
  Robot,
  EmailProvider,
  SMSProvider,
  NotificationService
};
