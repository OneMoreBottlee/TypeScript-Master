class Player {
    // 클래스 필드
    #score = 0;
    numLives = 10;

    constructor(first, last){
        this.first = first
        this.last = last
        this.#secret
        console.log(`I'm ${this.first} ${this.last}`)
    }

    getScore(){
        return this.#score
    }

    setScore(newScore){
        this.#score = newScore
        console.log("score update!")
    }

    taunt(){
        console.log("WOOO!!")
    }

    loseLife(){
        this.numLives -= 1
    }

    #secret(){
        console.log("Secret !!!")
    }
}

const Player1 = new Player("SON", "HM")
Player1.taunt()
console.log(Player1.getScore())
console.log(Player1.setScore(55))
console.log(Player1.getScore())
console.log(Player1)

const Player2 = new Player("Park", "JS")
Player2.taunt()
console.log(Player2)