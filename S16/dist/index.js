"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const URL = "https://jsonplaceholer.typicode.com/users";
axios_1.default
    .get(URL)
    .then(res => {
    console.log("Woo!!", res);
    const { data } = res;
    data.forEach(user => printUser(user));
})
    .catch(e => console.log("ERror!", e));
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
