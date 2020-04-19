const add = ((a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
})

add(1, 2).then((sum) => {
    console.log(sum)
    return add(sum, 2)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})

// add(1, 2).then((sum) => {
//     console.log(sum)
//     add(sum, 2).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })

// Default Promise

// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve([1, 2, 7])
//         reject('Things whent workg')
//     }, 2000)
// })

// doWorkPromise.then((result) => {
//     console.log('Success ', result)
// }).catch((error) => {
//     console.log('Error!', error)
// })