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
