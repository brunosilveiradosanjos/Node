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
        title: 'Weather',
        name: 'Bruno Anjos'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Giovana Anjos'
    })
})

// help.hbl file is rendered
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Sarah Anjos'
    })
})

// No weather file, send object to page
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'São Paulo'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Bruno Anjos',
        errorMessage: 'Help article not found'
    })
})

app.get('/about/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Bruno Anjos',
        errorMessage: 'About article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Bruno Anjos',
        errorMessage: ' Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})