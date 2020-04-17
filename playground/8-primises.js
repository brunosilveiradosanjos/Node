const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1, 2, 7])
        reject('Things whent workg')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success ', result)
}).catch((error) => {
    console.log('Error!', error)
})