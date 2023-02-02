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

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 10,
  breed: "DDONG",
  bark() {
    return "wak wak";
  },
};

// 확장 . 상속
interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "sleep";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 15,
  breed: "Lab",
  bark() {
    return "wang";
  },
  job: "sleep",
};


interface Human {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}

interface Engineer extends Human, Employee{
    level: string,
    languages: string[]
}

const pierre: Engineer = {
    name: "Pierre",
    id: 135135,
    email: "pierre@gamil.com",
    level: "senior",
    languages: ["JS", "TS"],