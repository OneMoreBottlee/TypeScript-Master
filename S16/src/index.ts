import axios from "axios"
import _ from "lodash"

const URL = "https://jsonplaceholer.typicode.com/users"

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    },
    phone: string,
    websice: string,
    company: {
        name: string,
        catchPharase: string,
        bs: string
    }
}

axios
.get<User[]>(URL)
.then(res => {
        console.log("Woo!!", res)
        const { data } = res
        data.forEach(user => printUser(user))
    })
.catch(e => console.log("ERror!", e))

function printUser(user: User){
    console.log(user.name)
    console.log(user.email)
    console.log(user.phone)
}

