let age: number | string = 21
age = 23
age = "24"

type Point = {
    x: number;
    y: number;
}

type Loc = {
    lat: number;
    long: number;
}

let coordinates: Point | Loc = {x: 1, y: 34}
coordinates = {lat: 321.231, long: 32.2352}

// 함수에 유니온 적용하기
function printAge(age: number | string):void {
    console.log(`U R ${age} years old`)
}

printAge(23)
printAge("73")

// 변수를 확인하고 에러를 발생함
// function calculateTax(price: number|string, tax: number){
//     price.replace("$", "")
// }

// type narrowing
function calculateTax(price: number|string, tax: number){
    if(typeof price === "string"){
        price = parseFloat(price.replace("$", ""))
    }
    return price*tax
}

// 배열에 유니온 타입 설정
// const nums: number[] = [1,2,3,4]

const stuff: (number | string)[] = [1, 5, "Gg"]

// 괄호가 없다면 하나의 값에 해당하는 타입
// const stuff: number | string[] = 1

const coords: (Point|Loc)[] = []
coords.push({lat:123, long:135315})
coords.push({x:123, y:135315})


// 리터럴 타입
let zero: 0 = 0
zero = 2

let hi: "hi" = "hi"
hi = "hello"

let mood: "Happy" | "Sad" = "Happy"
mood = "Sad"
mood = "Angry"

type DayOfWeek = "Mon" | "Tue" | "Wen" | "Thur" | "Fri" | "Sat" | "Sun"
let today: DayOfWeek = ""