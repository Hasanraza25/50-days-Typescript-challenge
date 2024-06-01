class Animal {
  makeSound(): void {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow");
  }
}

const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach((animal) => {
  animal.makeSound(); // Outputs "Bark" for Dog and "Meow" for Cat
});
