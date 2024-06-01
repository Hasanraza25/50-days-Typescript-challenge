// Abstract class
abstract class Animal {
    abstract makeSound(): void; // Abstract method (no implementation)
    
    move(): void {
      console.log("Moving...");
    }
  }
  
  // Subclass extending the abstract class
  class Dog extends Animal {
    makeSound(): void {
      console.log("Bark");
    }
  }
  
  // Create an instance of the subclass
  const myDog = new Dog();
  myDog.makeSound(); // Output: Bark
  myDog.move();      // Output: Moving...
  