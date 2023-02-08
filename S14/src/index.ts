
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