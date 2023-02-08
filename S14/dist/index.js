"use strict";
const inputEl = document.querySelector("#username");
console.log(inputEl.value);
inputEl.value = "Howw";
const btn = document.querySelector(".btn");
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// 입력과 출력이 다른 타입일 수 있음
// function identity (item: any): any{
//     return item
// }
// 입력과 출력이 같은 타입
function identity(item) {
    return item;
}
identity(7);
identity("Hi");
identity(true);
