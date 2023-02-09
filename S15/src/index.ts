function triple (value: number | string) {
    return typeof value === 'string' ? value.repeat(3) : value * 3
}

const el = document.getElementById("idk")


el ? el : el


const printLetters = (word?: string)=>{
    if(word){
        for(let char of word){
            console.log(char)
        }
    }else{
        console.log("YOU DID NOT PASS IN A WORD !")
    }
}


function someDemo(x: string | number, y: string | boolean){
    if(x === y){
        x.toUpperCase()
    }
}


interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRuntime (vedio: Movie | TVShow) {
    if("numEpisodes" in vedio){
        return vedio.numEpisodes * vedio.episodeDuration
    }else{
        return vedio.duration
    }
}



function printFullDate (date: string | Date) {
    // Date
    if(date instanceof Date){
        console.log(date.toUTCString())
    }else{ // string
        new Date(date).toUTCString()
    }
}

class User {
    constructor(public username: string){}
}

class Company {
    constructor(public name: string){}
}

function printName(entity: User | Company){
    if(entity instanceof User){ // User
        entity
    }else{ // Company
        entity
    }
}



interface Cat {
    name: string,
    numLives: number
}

interface Dog{
    name: string,
    breed: string
}

function isCat (animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined
}

function makeNoise (animal: Cat | Dog):string {
    if(isCat(animal)){

        animal
        return "Meow"
    }else{
        animal
    }
    animal
}


interface Rooster {
    kind: "수탉";
    name: string;
    weight: number;
    age: number;
}

interface Cow {
    kind: "소";
    name: string;
    weight: number;
    age: number;
}

interface Pig {
    kind: "돼지";
    name: string,
    weight: number,
    age: number
}

type FarmAnimal = Pig | Cow | Rooster

function getFarmAnimalSOund(animal: FarmAnimal){
    switch(animal.kind){
        case("돼지"):
            return "꿀꿀"
        case("소"):
            return "음머"
        case("수탉"):
            return "꼬끼오"
    }
}

const stevie: Rooster = {
    name: "닭대장",
    weight: 10,
    age: 5,
    kind: "수탉"
}

getFarmAnimalSOund(stevie)

