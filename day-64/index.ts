// Object Definition
let personExOne: {
    name: string;
    age: number;
    jobTitle?: string;
    address: {
      street: string;
      city: string;
    };
  };
  
  personExOne = {
    name: "Alice",
    age: 30,
    jobTitle: "Engineer",
    address: {
      street: "123 Main St",
      city: "Wonderland",
    },
  };

// Object Initialization with type annotation
let personExTwo: {
    name: string;
    age: number;
    jobTitle?: string;
    address: {
      street: string;
      city: string;
    };
  } = {
    name: "Alice",
    age: 30,
    jobTitle: "Engineer",
    address: {
      street: "123 Main St",
      city: "Wonderland",
    },
  };