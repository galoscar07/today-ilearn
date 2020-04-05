// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < scores.length; i++ ) {
    if (scores[i] === 0) {
        // continue will skip the loop from whre it is called
        continue
    }

    console.log('your score: ', scores[i])

    if (scores[i] === 100) { 
        console.log("Congrats you got the top score")
        // the break will stop the for loop and get out of it
        break
    }
}