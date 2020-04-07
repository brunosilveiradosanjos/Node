const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('São Paulo', '', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(20, -20, '', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
