const https = require('https')
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=20&lon=20&appid=' + OpenWeatherKey + ''

const request = https.request(url, (respose) => {
    let data = ''
    respose.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    respose.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)

    })
})

request.on('error', (erro) => {
    console.log('An error', error)
})

request.end()