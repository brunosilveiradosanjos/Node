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

// The second ES6 feature is object destructuring. 
// Object destructuring gives you a syntax for pulling properties off of objects and into standalone variables. 
// This is useful when working with the same object properties throughout your code. 
// Instead of writing user.name a dozen times, you could destructure the property into a name variable