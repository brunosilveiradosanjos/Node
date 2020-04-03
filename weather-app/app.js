const key = ''
const request = require('request')
const sp_lat = -23.5489
const sp_lon = -46.6388

url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + sp_lat + '&lon=' + sp_lon + '&appid=' + key
// url = 'https://api.openweathermap.org/data/2.5/find?q=Río&appid=' + key

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})
