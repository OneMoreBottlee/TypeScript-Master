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

function greett(person: string = "stranger") {
  return `Hi there, ${person}!`;
}

// 리턴 애니테이션
function square2(num: number): number {
  return num * num;
}

square(2);

// 리턴값의 타입이 문자열일수도, 숫자일수도 있음
function rand(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

rand(3);

// 익명 함수
// for 나 map
const colors = ["red", "green", "blue"];
colors.map((color) => {
  return color.toUpperCase();
});

// Void
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}
