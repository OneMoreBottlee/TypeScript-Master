const activeUsers: string[] = [];
activeUsers.push("steven");

const ageList: number[] = [];
ageList.push(135);

// 또다른 선언 방법
const boos: Array<boolean> = [];
// const booa: boolean[] = []

// 커스텀으로도 선언할 수 있음
type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 8 });


// 다차원 배열
const board: string[][] = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"]
]

const demo: number [][][] = [[[1]]]