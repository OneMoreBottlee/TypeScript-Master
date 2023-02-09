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


