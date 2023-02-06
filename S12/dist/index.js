class Player {
    // 클래스 필드
    score = 0;
    numLives = 10;

    constructor(first, last){
        this.first = first
        this.last = last
        console.log(`I'm ${this.first} ${this.last}`)
    }

    taunt(){
        console.log("WOOO!!")
    }

    loseLife(){
        this.numLives -= 1
    }

}

const Player1 = new Player("SON", "HM")
Player1.taunt()
console.log(Player1.numLives)
Player1.loseLife()
console.log(Player1.numLives)

const Player2 = new Player("Park", "JS")
Player2.taunt()
console.log(Player2)