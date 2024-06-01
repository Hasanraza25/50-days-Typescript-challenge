class ProductExAccessors {
  private _price: number;
  constructor(private id: number, private name: string) {
    this._price = 0; // Default price
  }
  get price(): number {
    return this._price;
  }
  set price(newPrice: number) {
    if (newPrice >= 0) {
      this._price = newPrice;
    } else {
      console.log("Price cannot be negative.");
    }
  }
  getProductInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}, Price: $${this._price}`;
  }
}
const productEx = new ProductExAccessors(1, "Widget");
productEx.price = 130;
console.log(productEx.getProductInfo()); // Updated price
