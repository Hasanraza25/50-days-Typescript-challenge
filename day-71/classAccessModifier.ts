class Product {
    id: number;
    name: string;
    price: number;
  
    constructor(id: number, name: string, price: number) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }
  }
  
  const product1 = new Product(1, "Widget", 20.0);
  console.log(product1.getProductInfo());

// Class Access Modifiers
// Public:
class MyClassPublic {
  public name: string;
  constructor(name: string) {
      this.name = name;
  }
}
const instancePublic = new MyClassPublic("John");
console.log(instancePublic.name); // Accessing the public property
  
// Protected:
class Parent {
  protected familyName: string;
  constructor(name: string) {
      this.familyName = name;
  }
}
class Child extends Parent {
  introduceFamily() {
      console.log(`Our family name is ${this.familyName}`);
  }
}
const child = new Child("Mughal");
child.introduceFamily(); // Valid access

// Private
class MyClassPrivate {
  private secret: string;
  constructor(secret: string) {
      this.secret = secret;
  }
  revealSecret() {
      console.log(this.secret); // Accessing the private property
  }
}
const instancePrivate = new MyClassPrivate("My secret");
instancePrivate.revealSecret(); // Valid access


//             / Parent Class / Child Class / Outside Class /
//      Public /      ✅     /     ✅      /      ✅      /
//   Protected /      ✅     /     ✅      /      ❌      / 
//     Private /      ✅     /     ❌      /      ❌      /           