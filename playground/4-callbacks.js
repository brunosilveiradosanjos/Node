const doWorkCallBack = (callback) => {
    setTimeout(() => {
        callback(undefined, [1, 2, 7])
    }, 2000)

}
doWorkCallBack((error, resuult) => {
    if (error) {
        return console.log('ERROR ' + error)
    }

    console.log(resuult)
})

// const add = (x, y, callback) => {
//     setTimeout(() => {
//         const sum = x + y
//         callback(sum)
//     }, 2000)
// }

// add(1, 4, (sum) => {
//     console.log(sum)
// })

// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// const name = ['Andrew', 'Bruno', 'Sarah']

// const shortNames = name.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })