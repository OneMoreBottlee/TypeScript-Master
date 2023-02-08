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
function getRandomElement(list) {
    const ranIdx = Math.floor(Math.random() * list.length);
    return list[ranIdx];
}
console.log(getRandomElement(["a", "b", "c", "d", "e", "f", "g", "h"]));
console.log(getRandomElement([1, 535, 2727, 8738, 46346, 378686548]));
console.log(getRandomElement(["SON", "CHA", "PARK", "KIM"]));
console.log(getRandomElement([true, false, "PARK", "KIM", 555, 600]));
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: "Son" }, { team: "ToT" });
console.log(comboObj);
console.log(merge({ name: "Park" }, 10));
function printDoubleLength(thing) {
    return thing.length * 2;
}
function makeEmptyArray() {
    return [];
}
const nums = makeEmptyArray();
const strings = makeEmptyArray();
class PlayList {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new PlayList();
songs.add({ title: "운이좋았지", artist: "권진아" });
const videos = new PlayList();
videos.add({ title: "55도발", creator: "침착맨", resolution: "720" });
