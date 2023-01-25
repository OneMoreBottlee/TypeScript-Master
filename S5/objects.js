function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "hh", last: "aaaaa" });
// let coordinate: { x: number; y: number } = { x: 34, y: 2 };
// function randomCoorinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }
// 초과 프로퍼티
// 아래와 같이 지정되지 않은 인자를 추가하면 에러가 발생함.
printName({ first: "Mike", last: "Jagger", age: 476 });
// 하지만 변수에 설정한 후 호출하면 에러가 사라짐
var sig = { first: "Mike", last: "Jagger", age: 476, isAlive: true };
printName(sig);
var coordinate = { x: 34, y: 2 };
function randomCoorinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "나는요",
    artist: "IU",
    numStreams: 151351351,
    credits: {
        producer: "IUA",
        writer: "IUB"
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
