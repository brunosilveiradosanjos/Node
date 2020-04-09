const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup hanflebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup stattic directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Bruno Anjos'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Giovana Anjos'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Me',
        name: 'Sarah Anjos'
    })
})

app.get('/weather', (req, res) => {
    res.send({ forecast: 'Sunny', location: 'São Paulo' })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})