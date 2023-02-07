"use strict";
// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   private score:number = 0;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     this.secretMethod()
//   }
//   private secretMethod() :void{
//     console.log("SECRET METHOD !")
//   }
// }
class Player {
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative !");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isWinner = true;
    }
    kingScore() {
        this._score = 9999;
    }
}
const koNo7 = new Player("HM", "SON", 100);
koNo7.fullName;
koNo7.score = 100;
koNo7.score = -500;
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() { console.log(`${this.color} ${this.brand} Jacket`); }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
