class Player {
    static descripton = "Player"

    // 클래스 필드
    #score = 0;
    numLives = 10;

    constructor(first, last){
        this.first = first
        this.last = last
        this.#secret
        console.log(`I'm ${this.first} ${this.last}`)
    }

    static randomPlayer(){
        return new Player("ran", "dom")
    }

    get fullName(){
        return `${this.first} ${this.last}`
    }

    set fullName(newName){
        const [first, last] = newName.split(" ")
        this.first = first
        this.last = last
    }

    get score(){
        return this.#score
    }

    set score(newScore){
        if(newScore < 0){
            throw new Error("Score must be greater than ZERO !!")
        }
        this.#score = newScore
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
console.log(Player1.fullName)
Player1.fullName = "Kim MJ"
console.log(Player1)
// console.log(Player1.score)
// Player1.score = 353
// console.log(Player1.score)
// Player1.score = -353
// console.log(Player1.score)

// const Player2 = new Player("Park", "JS")
// Player2.taunt()
// console.log(Player2)