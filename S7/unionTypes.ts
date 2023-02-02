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

// type narrow
function calculateTax(price: number|string, tax: number){
    if(typeof price === "string"){
        price = parseFloat(price.replace("$", ""))
    }
    return price*tax
}