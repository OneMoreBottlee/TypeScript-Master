// String
let movieTitle: string = "Amadeus";
movieTitle = "Harry Potter";
// Error
movieTitle = 9;

// Number
let numCatLives: number = 9;
numCatLives += 1;
// Error
numCatLives = "Zero";

// Boolean
let gameOver: boolean = false;
gameOver = true;
// Error
gameOver = "true";

// Type Inference
let tvShow = "Olive Kitteridge";
tvShow = "The Oher Two";
tvShow = false;

let isFunny = false;
isFunny = true;
isFunny = "asd";

// Any
let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();

let other = "hello";
other.sadsafa();
