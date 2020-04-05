// callbacks and foreach
// const myFunc = callbackFunc => {
//     // do something
//     callbackFunc(value)
// }
// myFunc(value => {
//     // do sumethong
//     console.log(value)
// })

let people = ['Oscar', 'Mike', 'Johanna']
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`)
}
// people.forEach((person, index) => {
//     console.log(index, person)
// })
people.forEach(logPerson);