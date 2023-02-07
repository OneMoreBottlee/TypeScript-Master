"use strict";
var _Player_score;
class Player {
    constructor(first, last) {
        this.score = 0;
        _Player_score.set(this, 0);
        this.first = first;
        this.last = last;
        this.secretMethod();
    }
    secretMethod() {
        console.log("SECRET METHOD !");
    }
}
_Player_score = new WeakMap();
const koNo7 = new Player("HM", "SON");
koNo7.score = 55;
koNo7. = 55;
koNo7.secretMethod();
