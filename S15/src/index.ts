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

