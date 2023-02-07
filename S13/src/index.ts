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
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative !");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
    public isWinner: boolean = true
    kingScore(){
        this._score = 9999
    }
}

const koNo7 = new Player("HM", "SON", 100);
koNo7.fullName;
koNo7.score = 100;
koNo7.score = -500;

interface Colorful {
    color: string;
}

interface Printable {
    print(): void
}

class Bike implements Colorful{
    constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string){}
    
    print(): void {console.log(`${this.color} ${this.brand} Jacket`)}
}

const bike1 = new Bike("red")
const jacket1 = new Jacket("Prada", "black")