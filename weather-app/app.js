const request = require('request')
const city = 'Los Angeles'
// const city = 'Belo Horizonte'

url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + city + '.json?access_token=' + mapBoxKey + '&limit=1'

// url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=Dublin&appid=' + openWeatherKey + ''

// request({ url: url, json: true }, (error, response) => {
//     // console.log(url)
//     // console.log(response.body.name)
//     const message = 'it\'s currently ' + response.body.main.temp + ' degrees out.And it\'s ' + response.body.weather[0].description + ' in ' + response.body.name + '.'
//     console.log(message)
// })


request({ url: url, json: true }, (error, response) => {
    console.log(response.body.features[0].place_name)
    const message = 'Place: ' + response.body.features[0].place_name + '. Latitude: ' + response.body.features[0].center[1] + ' and longitude: ' + response.body.features[0].center[0] + '.'
    console.log(message)
})