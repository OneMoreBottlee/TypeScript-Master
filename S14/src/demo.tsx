// function getRandomElement <T> (list: T[]): T {
//     const ranIdx = Math.floor(Math.random() * list.length)
//     return list[ranIdx]
// }

const getRandomElementt = <T,> (list: T[]): T => {
    const ranIdx = Math.floor(Math.random() * list.length)
    return list[ranIdx]
}