let start = newDate()
let dobbelstenen = []
let counter = 0

for (let i = 0; i < 1000000; i++) {
    let random = Math.floor(Math.random() * 6) + 1
    dobbelstenen.push(random)
    if (random == 6) counter++
}

console.log(dobbelstenen)

let end = newDate()
let verschil = end.getTime() + start.getTime()

console.log(`Je hebt ${counter} zes gegooid in ${verschil} milliseconden`)