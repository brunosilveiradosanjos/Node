const request = require('request')
const city = 'Dublin'

url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + city + '.json?access_token=' + mapBoxKey + '&limit=1'

// url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=' + city + '&appid=' + openWeatherKey + ''

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


request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service')
    } else if (response.body.message) {
        console.log(response.body.message)
    } else {
        console.log('Place: ' + response.body.features[0].place_name + '. Latitude: ' + response.body.features[0].center[1] + ' and longitude: ' + response.body.features[0].center[0] + '.')
    }
})