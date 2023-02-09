"use strict";
function triple(value) {
    return typeof value === 'string' ? value.repeat(3) : value * 3;
}
const el = document.getElementById("idk");
el ? el : el;
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log("YOU DID NOT PASS IN A WORD !");
    }
};
function someDemo(x, y) {
    if (x === y) {
        x.toUpperCase();
    }
}
function getRuntime(vedio) {
    if ("numEpisodes" in vedio) {
        return vedio.numEpisodes * vedio.episodeDuration;
    }
    else {
        return vedio.duration;
    }
}
function printFullDate(date) {
    // Date
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else { // string
        new Date(date).toUTCString();
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) { // User
        entity;
    }
    else { // Company
        entity;
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return "Meow";
    }
    else {
        animal;
    }
    animal;
}
const stevie = {
    name: "양대장",
    weight: 10,
    age: 5,
    kind: "양"
};
function getFarmAnimalSOund(animal) {
    switch (animal.kind) {
        case ("돼지"):
            return "꿀꿀";
        case ("소"):
            return "음머";
        case ("수탉"):
            return "꼬끼오";
        default:
            // 여기까지 오면 안됨 !! 오면 에러임 !
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
getFarmAnimalSOund(stevie);
