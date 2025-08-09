/**
 * SOLID Principles Assessment Tests
 * 
 * These tests validate the implementation of SOLID principles.
 * Students should run these tests to verify their solutions.
 */

const {
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
} = require('./index');

describe('SOLID Principles Assessment', () => {
  
  // ============================================================================
  // SINGLE RESPONSIBILITY PRINCIPLE TESTS
  // ============================================================================
  
  describe('Single Responsibility Principle (SRP)', () => {
    test('UserManager should be refactored into separate classes', () => {
      // This test will pass once students properly separate concerns
      
      // The original UserManager does too much - students should create:
      // - User class for user data
      // - UserValidator for validation
      // - EmailService for email notifications  
      // - UserRepository for data persistence
      // - UserService to orchestrate everything
      
      const userManager = new UserManager();
      
      // Test that basic functionality still works
      expect(() => {
        userManager.addUser({ name: 'John', email: 'john@test.com' });
      }).not.toThrow();
      
      // Students should implement separate classes and modify this test
      // to verify proper separation of concerns
    });

    test('Validation should be handled by separate validator class', () => {
      // Students should implement UserValidator class
      // and test it here independently
      expect(true).toBe(true); // Placeholder - students should implement
    });

    test('Email service should be separate from user management', () => {
      // Students should implement EmailService class
      // and test it here independently  
      expect(true).toBe(true); // Placeholder - students should implement
    });
  });

  // ============================================================================
  // OPEN-CLOSED PRINCIPLE TESTS
  // ============================================================================
  
  describe('Open-Closed Principle (OCP)', () => {
    test('Rectangle area calculation', () => {
      const rectangle = new Rectangle(5, 10);
      const calculator = new ShapeCalculator();
      
      // This should work after students implement proper OCP design
      expect(calculator.calculateArea(rectangle)).toBe(50);
    });

    test('Circle area calculation', () => {
      const circle = new Circle(5);
      const calculator = new ShapeCalculator();
      
      expect(calculator.calculateArea(circle)).toBeCloseTo(78.54, 2);
    });

    test('Should support adding new shapes without modifying existing code', () => {
      // Students should create Triangle and Pentagon classes
      // and be able to calculate their areas without modifying ShapeCalculator
      
      // Uncomment these once students implement the classes:
      // const triangle = new Triangle(5, 10);
      // const pentagon = new Pentagon(5);
      // const calculator = new ShapeCalculator();
      
      // expect(calculator.calculateArea(triangle)).toBe(25);
      // expect(typeof calculator.calculateArea(pentagon)).toBe('number');
      
      expect(true).toBe(true); // Placeholder
    });
  });

  // ============================================================================
  // LISKOV SUBSTITUTION PRINCIPLE TESTS
  // ============================================================================
  
  describe('Liskov Substitution Principle (LSP)', () => {
    test('Sparrow should be substitutable for Bird', () => {
      const sparrow = new Sparrow();
      expect(sparrow.fly()).toBe("Flying high!");
    });

    test('Current design violates LSP with Penguin', () => {
      const penguin = new Penguin();
      
      // This currently throws an error, violating LSP
      expect(() => penguin.fly()).toThrow("Penguins can't fly!");
    });

    test('Students should redesign to follow LSP', () => {
      // Students should create proper abstractions like:
      // - Bird (base class)
      // - Flyable (interface/mixin)
      // - Swimmable (interface/mixin)
      // - FlyingBird extends Bird implements Flyable
      // - SwimmingBird extends Bird implements Swimmable
      
      // Then Sparrow extends FlyingBird and Penguin extends SwimmingBird
      // This way all substitutions work properly
      
      expect(true).toBe(true); // Placeholder for student implementation
    });
  });

  // ============================================================================
  // INTERFACE SEGREGATION PRINCIPLE TESTS
  // ============================================================================
  
  describe('Interface Segregation Principle (ISP)', () => {
    test('Human implements all worker methods', () => {
      const human = new Human();
      
      expect(human.work()).toBe("Human working");
      expect(human.eat()).toBe("Human eating");
      expect(human.sleep()).toBe("Human sleeping");
    });

    test('Robot cannot eat or sleep - violates ISP', () => {
      const robot = new Robot();
      
      expect(robot.work()).toBe("Robot working");
      expect(() => robot.eat()).toThrow("Robots don't eat!");
      expect(() => robot.sleep()).toThrow("Robots don't sleep!");
    });

    test('Students should create segregated interfaces', () => {
      // Students should create:
      // - Workable interface with work()
      // - Eatable interface with eat()  
      // - Sleepable interface with sleep()
      
      // Then:
      // - Human implements Workable, Eatable, Sleepable
      // - Robot implements only Workable
      
      expect(true).toBe(true); // Placeholder for student implementation
    });
  });

  // ============================================================================
  // DEPENDENCY INVERSION PRINCIPLE TESTS  
  // ============================================================================
  
  describe('Dependency Inversion Principle (DIP)', () => {
    test('NotificationService works with current implementation', () => {
      const service = new NotificationService();
      
      expect(service.sendEmail("Hello")).toBe("Email sent: Hello");
      expect(service.sendSMS("Hello")).toBe("SMS sent: Hello");
    });

    test('Current design violates DIP by depending on concrete classes', () => {
      // The NotificationService directly instantiates EmailProvider and SMSProvider
      // This makes it hard to test and extend
      
      const service = new NotificationService();
      
      // We can't easily mock the providers or add new ones
      expect(service.emailProvider).toBeInstanceOf(EmailProvider);
      expect(service.smsProvider).toBeInstanceOf(SMSProvider);
    });

    test('Students should implement dependency injection', () => {
      // Students should:
      // 1. Create MessageProvider interface/abstract class
      // 2. Make EmailProvider and SMSProvider implement it
      // 3. Inject dependencies in constructor
      // 4. Add PushNotificationProvider support
      
      // Example of what the refactored code should support:
      // const emailProvider = new EmailProvider();
      // const smsProvider = new SMSProvider();
      // const pushProvider = new PushNotificationProvider();
      // 
      // const service = new NotificationService([emailProvider, smsProvider, pushProvider]);
      // expect(service.send("Hello", "email")).toBe("Email sent: Hello");
      
      expect(true).toBe(true); // Placeholder for student implementation
    });
  });

  // ============================================================================
  // INTEGRATION TESTS
  // ============================================================================
  
  describe('Integration Tests', () => {
    test('All SOLID principles should work together', () => {
      // This test verifies that all principles are properly implemented
      // Students should ensure their refactored code maintains functionality
      // while following all SOLID principles
      
      expect(true).toBe(true); // Students should implement comprehensive test
    });
  });
});

describe('Assessment Grading Criteria', () => {
  test('Code should demonstrate understanding of SRP', () => {
    // Grading criteria:
    // - Classes have single, well-defined responsibilities
    // - Separation of concerns is clear
    // - Each class has one reason to change
    expect(true).toBe(true);
  });

  test('Code should demonstrate understanding of OCP', () => {
    // Grading criteria:
    // - Can add new functionality without modifying existing code
    // - Uses polymorphism effectively
    // - Abstractions are properly defined
    expect(true).toBe(true);
  });

  test('Code should demonstrate understanding of LSP', () => {
    // Grading criteria:
    // - Subclasses can replace base classes without breaking functionality
    // - No strengthened preconditions or weakened postconditions
    // - Proper inheritance hierarchy
    expect(true).toBe(true);
  });

  test('Code should demonstrate understanding of ISP', () => {
    // Grading criteria:
    // - Interfaces are small and focused
    // - Classes only implement methods they actually use
    // - No fat interfaces forcing unnecessary implementations
    expect(true).toBe(true);
  });

  test('Code should demonstrate understanding of DIP', () => {
    // Grading criteria:
    // - Depends on abstractions, not concretions
    // - Uses dependency injection
    // - High-level modules don't depend on low-level modules
    expect(true).toBe(true);
  });
});
