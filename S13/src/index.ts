class Player {
  readonly first: string;
  readonly last: string;
  score:number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }


}

const koNo7 = new Player("HM", "SON")
koNo7.score = 55
koNo7.first = "KIM"

