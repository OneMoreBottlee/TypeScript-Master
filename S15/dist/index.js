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
