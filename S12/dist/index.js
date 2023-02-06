class Player {
    constructor(first, last){
        this.first = first
        this.last = last
        console.log(`I'm ${this.first} ${this.last}`)
    }

    taunt(){
        console.log("WOOO!!")
    }

}

const Player1 = new Player("SON", "HM")
Player1.taunt()

const Player2 = new Player("Park", "JS")
Player2.taunt()