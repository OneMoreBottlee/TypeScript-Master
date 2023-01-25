function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "hh", last: "aaaaa" });

// let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// function randomCoorinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

// 초과 프로퍼티
// 아래와 같이 지정되지 않은 인자를 추가하면 에러가 발생함.
printName({ first: "Mike", last: "Jagger", age: 476 });

// 하지만 변수에 설정한 후 호출하면 에러가 사라짐
const sig = { first: "Mike", last: "Jagger", age: 476, isAlive: true };
printName(sig);
// 필요한 것만 전달하고 나머지는 전달하지 않음

// 타입 별칭, 반복되어 재사용 가능한 타입을 지정함
// type Point = {
//   x: number;
//   y: number;
// };

let coordinate: Point = { x: 34, y: 2 };

function randomCoorinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

// 원시 타입도 가능
type MyNum = number;

// 중첩 객체
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song) {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "나는요",
  artist: "IU",
  numStreams: 151351351,
  credits: {
    producer: "IUA",
    writer: "IUB",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);


// 선택적 프로퍼티
type Point = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point = { x: 1, y: 3 };
