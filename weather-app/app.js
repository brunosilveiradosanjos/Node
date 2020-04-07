const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location) {
    return console.log('Please provide location')
}

geocode(location, MapBoxKey, (error, data) => {
    if (error) {
        return console.log(error)
    }
    forecast(data.lat, data.lon, OpenWeatherKey, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
})