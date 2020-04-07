const request = require('request')

const geocode = (address, mapBoxKey, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + mapBoxKey + '&limit=1'
    // console.log(url)
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (response.body.message) {
            callback(response.body.message, undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode


// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.message) {
//         console.log(response.body.message)
//     } else {
//         console.log('Place: ' + response.body.features[0].place_name + '. Latitude: ' + response.body.features[0].center[1] + ' and longitude: ' + response.body.features[0].center[0] + '.')
//     }
// })