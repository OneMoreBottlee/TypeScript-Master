
// 매개변수 에너테이션 설정
function square(num: number) {
  return num * num;
}

function greet(person: string) {
  return `Hi there, ${person}!`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(32);
greet("SON");
doSomething("hh", 3, true);

function greett(person: string = "stranger"){
    return `Hi there, ${person}!`
}

