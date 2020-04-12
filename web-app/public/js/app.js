const watherForm = document.querySelector('form')
const search = document.querySelector('input')

watherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = search.value
    console.log('location: ' + location)

    fetch('http://localhost:3000/weather?address=' + location).then((res) => {
        res.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})

// fetch('http://puzzle.mead.io/puzzle').then((res) => {
//     res.json().then((data) => {
//         console.log(data)
//     })
// })