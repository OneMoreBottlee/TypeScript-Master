interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
  sayBye(): string;
}

const thomas: Person = {
  id: 235235,
  first: "Thomas",
  last: "Hardy",
  nickname: "gg",
  sayHi: () => {
    return "Hello!";
  },
  sayBye: () => {
    return "bye";
  },
};

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));
