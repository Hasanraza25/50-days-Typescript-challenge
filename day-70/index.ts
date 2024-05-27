interface PersonEx1 {
    name: string;
    age: number;
  }
  
  const John: PersonEx1 = {
    name: "John",
    age: 30,
  };

// Interface methods and parameters

interface PersonEx2 {
    name: string;
    age: number;
    greet(message: string): void;
  }
  
  const Sarah: PersonEx2 = {
    name: "Sarah",
    age: 30,
    greet(message: string) {
      console.log(`${this.name} says: ${message}`);
    },
  };
  
  Sarah.greet("Hello, TypeScript!"); // Output: Sarah says: Hello, TypeScript!

  