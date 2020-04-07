const request = require('request')

const forecast = (lat, lon, openWeatherKey, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=' + lat + '&lon=' + lon + '&appid=' + openWeatherKey + ''
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to server', undefined)
        } else if (response.body.cod !== 200) {
            callback(response.body.message, undefined)
        } else {
            callback(undefined,
                response.body.weather[0].description + '. It\'s currently ' + response.body.main.temp + ' C degrees out. The wind is ' + response.body.wind.speed + ' m/s.'
                /*    {
                   temp: response.body.main.temp,
                   weather: response.body.weather[0].description,
                   wind: response.body.wind.speed
               } */
            )
        }
    })
}

module.exports = forecast


// request({ url: url, json: true }, (error, response) => {
//     console.log(url)
//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.cod !== 200) {
//         console.log('error: ' + response.body.cod + ' message: ' + response.body.message)
//     } else {
//         console.log('it\'s currently ' + response.body.main.temp + ' degrees out.And it\'s ' + response.body.weather[0].description + ' in ' + response.body.name + '.')

//     }
// })