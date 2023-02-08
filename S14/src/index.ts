
const inputEl = document.querySelector<HTMLInputElement>("#username")!
console.log(inputEl.value)
inputEl.value = "Howw"

const btn = document.querySelector<HTMLButtonElement>(".btn")!

function numberIdentity (item: number):number {
    return item
}

function stringIdentity (item: string):string {
    return item
}

function booleanIdentity (item: boolean): boolean {
    return item
}


// 입력과 출력이 다른 타입일 수 있음
// function identity (item: any): any{
//     return item
// }

// 입력과 출력이 같은 타입
function identity <Type> (item: Type): Type {
    return item
}

identity<number>(7)
identity<string>("Hi")
identity<boolean>(true)



function getRandomElement <T> (list: T[]): T {
    const ranIdx = Math.floor(Math.random() * list.length)
    return list[ranIdx]
}

console.log(getRandomElement<string>(["a","b","c","d","e","f","g","h"]))
console.log(getRandomElement<number>([1,535,2727,8738,46346,378686548]))


console.log(getRandomElement(["SON","CHA","PARK","KIM"]))
console.log(getRandomElement([true,false,"PARK","KIM",555, 600]))


function merge <T extends object, U extends object> (object1:T, object2:U) {
    return {
        ...object1, ...object2
    }
}

const comboObj = merge({name: "Son"}, {team: "ToT"})
console.log(comboObj)

console.log(merge({ name: "Park"}, 10))

