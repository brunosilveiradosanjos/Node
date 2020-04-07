const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location) {
    return console.log('Please provide location')
}

geocode(location, MapBoxKey, (error, { lat, lon, location }) => {
    if (error) {
        return console.log(error)
    }
    forecast(lat, lon, OpenWeatherKey, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(location)
        console.log(forecastData)
    })
})