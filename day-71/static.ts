class MathOperations {
  // Static property
  static pi: number = 3.14;

  // Static method to calculate the area of a circle
  static calculateArea(radius: number): number {
    return MathOperations.pi * radius * radius;
  }
}

// Accessing static property directly
console.log(MathOperations.pi); // Output: 3.14

// Calling static method without creating an instance
const area = MathOperations.calculateArea(5); // Radius = 5
console.log(area); // Output: 78.5
